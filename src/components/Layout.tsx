import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'
import OrderCart from './OrderCart'

export default function Layout({ ordersState, addOrder, decrementOrder }) {
  return (
    <div className='h-screen flex-row'>
    <TopBar />
    <div className='flex flex-row gap-10'>
      <div className='flex-4'>
        <Outlet />
      </div>

      <div id="" className='max-w-[450px] w-full'>
        <OrderCart ordersState={ordersState} addOrder={addOrder} decrementOrder={decrementOrder} />
      </div>
    </div>
    </div>
  )
}
