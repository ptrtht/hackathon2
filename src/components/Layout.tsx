import { Outlet } from 'react-router-dom'

export default function Layout({ ordersState }) {
  return (
    <>
      <Outlet />

      <pre>{JSON.stringify(ordersState, null, 2)}</pre>
    </>
  )
}
