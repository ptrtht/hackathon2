import { Outlet } from 'react-router-dom'
import OrderCart from './OrderCart'

export default function Layout({ ordersState, addOrder, decrementOrder }) {
  return (
    <div className='flex flex-row gap-10 mt-10'>
      <div className='flex-4'>
        <Outlet />
      </div>
      <div className='max-w-[450px] w-full'>
        <OrderCart ordersState={ordersState} addOrder={addOrder} decrementOrder={decrementOrder} />

      </div>
    </div>
  )
}
