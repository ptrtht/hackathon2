import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'
import OrderCart from './OrderCart'

export default function Layout({ ordersState, addOrder, decrementOrder, nameState, incrementMod, decrementMod }) {
  return (
    <div className='drawer drawer-end h-screen flex-row'>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <TopBar nameState={nameState} />
          <div className='flex-4 pt-16 min-h-full'>
            <Outlet />
          </div>
      </div>
      <div className='drawer-side'>
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className='max-w-[450px] w-full min-h-full flex align-middle'>
          <OrderCart incrementMod={incrementMod} decrementMod={decrementMod} nameState={nameState} ordersState={ordersState} addOrder={addOrder} decrementOrder={decrementOrder} checkout={false} />
        </div>
      </div>
    </div>
  )
}
