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

    // if no quantity exists, set it to 1
    if (!order.quantity || order.quantity === 0) {
      order.quantity = 1
    }

    // if order already exists, increment quantity
    if (ordersState[order.id]) {
      order.quantity = ordersState[order.id].quantity + 1
    }

    setOrdersState({
      ...ordersState,
      [order.id]: order,
    })
  }

  const decrementOrder = (order: orderItemType) => {
    if (ordersState[order.id].quantity === 1) {
      const { [order.id]: _, ...rest } = ordersState
      setOrdersState(rest)
    } else {
      setOrdersState({
        ...ordersState,
        [order.id]: {
          ...ordersState[order.id],
          quantity: ordersState[order.id].quantity - 1,
        },
      })
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/restaurants' element={<Layout ordersState={ordersState} addOrder={addOrder} decrementOrder={decrementOrder} />}>
          <Route index element={<RestaurantList />} />
          <Route
            path='/restaurants/:id'
            element={<RestaurantMenu addOrder={addOrder} ordersState={ordersState} decrementOrder={decrementOrder} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
