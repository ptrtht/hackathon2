// import { useStateTogether } from 'react-together'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RestaurantList from '@components/RestaurantList'
import './index.css'
import RestaurantMenu from '@components/Menu'
import Layout from '@components/Layout'
import { useStateTogether } from 'react-together'

export default function App() {
  // const [count, set_count] = useStateTogether('counter_0', 0)

  const [ordersState, setOrdersState] = useStateTogether('orders', {})

  const addOrder = (order: { name: string }) => {
    setOrdersState({
      ...ordersState,
      order,
    })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/restaurants' element={<Layout />}>
          <Route index element={<RestaurantList />} />
          <Route path='/restaurants/:id' element={<RestaurantMenu addOrder={addOrder} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
