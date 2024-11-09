// import { useStateTogether } from 'react-together'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RestaurantList from '@components/RestaurantList'
import './index.css'
import RestaurantMenu from '@components/Menu'
import Layout from '@components/Layout'
import { useStateTogether } from 'react-together'
import * as db from './db.json'

export default function App() {
  // const [count, set_count] = useStateTogether('counter_0', 0)

  type orderItemType = (
    | (typeof db.restaurants)[number]['menu']['food'][number]
    | (typeof db.restaurants)[number]['menu']['beverages'][number]
  ) & { quantity: number }

  const [ordersState, setOrdersState] = useStateTogether<{ [id: string]: orderItemType }>('orders', {})

  const addOrder = (order: orderItemType) => {

    console.log(order)

    setOrdersState({
      ...ordersState,
      [order.id]: order,
    })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/restaurants' element={<Layout ordersState={ordersState} />}>
          <Route index element={<RestaurantList />} />
          <Route path='/restaurants/:id' element={<RestaurantMenu addOrder={addOrder} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
