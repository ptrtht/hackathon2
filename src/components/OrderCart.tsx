import { useNavigate } from "react-router-dom";

export default function OrderCart({ nameState, ordersState, addOrder, decrementOrder, checkout }) {
  const navigate = useNavigate();

  return (
    <div className='bg-base-200 rounded-xl min-w-full p-3'>
      {!checkout &&
        <>
        <label htmlFor="my-drawer" className="btn btn-block btn-outline drawer-button">
          <i className="pi pi-arrow-left" style={{ fontSize: '1rem' }}></i>
        </label>
        <div className='card-title justify-center w-full mt-4 sm:hidden'>
          {nameState}
        </div>
        </>
      }
      {/* list of orders */}
      <div className='p-4'>
        <h1 className='text-2xl font-bold'>Group Cart</h1>
        <ul>
          {Object.keys(ordersState).map((key) => {
            const order = ordersState[key]
            return (
              <li key={key} className='flex grid grid-cols-7 mt-2'>
                <span className={`col-span-3 ${order.culprit != nameState ? 'italic ' : ''}`}>{order.name}</span>
                <span className={`${order.culprit != nameState ? 'italic' : ''}`}>{order.price}</span>
                <span className='flex justify-center gap-2 col-span-2'>
                  <button
                    className='btn btn-xs btn-outline'
                    onClick={() => {
                      decrementOrder(order)
                    }}
                  >
                    -
                  </button>
                  {order.quantity}
                  <button
                    className='btn btn-xs btn-outline'
                    onClick={() => {
                      addOrder(order)
                    }}
                  >
                    +
                  </button>
                </span>
                <span className='font-semibold'>${Number(order.price * order.quantity).toFixed(2)}</span>
              </li>
            )
          })}
        </ul>
      </div>

      {/* total */}
      <span className='divider mx-10'></span>

      <div className='flex grid grid-cols-7 px-4'>
        <div className='col-span-4 '>Total:</div>
        {/* no items */}
        <div className='col-span-2 flex justify-center'>
          {Object.keys(ordersState).reduce((acc, key) => {
            return acc + ordersState[key].quantity
          }, 0)}
        </div>
        {/* total $$ */}
        <div className='font-semibold'>
          $
          {Object.keys(ordersState).reduce((acc, key) => {
            return Number((acc + ordersState[key].quantity * ordersState[key].price).toFixed(2))
          }, 0)}
        </div>
      </div>

      {/* checkout */}
      {!checkout &&
        <div className='p-4 flex flex-col mx-10'>
          <label htmlFor="my-drawer" className='btn btn-content btn-outline' onClick={() => navigate("/checkout")}>Checkout</label>
        </div>
      }
    </div>
  )
}
