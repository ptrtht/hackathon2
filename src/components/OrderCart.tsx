export default function OrderCart({ ordersState, addOrder, decrementOrder }) {
  return (
    <div className='bg-base-200 rounded-xl min-w-full'>
      {/* list of orders */}
      <div className='p-4'>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <ul>
          {Object.keys(ordersState).map((key) => {
            const order = ordersState[key]
            return (
              <>
                <li key={key} className='flex grid grid-cols-7 mt-2'>
                  <span className='col-span-3'>{order.name}</span>
                  <span>{order.price}</span>
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
                  <span className='font-semibold'>${order.price * order.quantity}</span>
                </li>
              </>
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
      <div className='p-4 flex flex-col mx-10'>
        <button className='btn btn-content btn-outline' disabled>Checkout</button>
      </div>
    </div>
  )
}
