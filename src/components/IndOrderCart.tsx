import { useNavigate } from "react-router-dom";

export default function IndOrderCart({ ordersState, addOrder, decrementOrder, nameState, incrementMod, decrementMod }) {
  const navigate = useNavigate();
  let orderKeys = Object.keys(ordersState).filter((key) => ordersState[key].culprit[nameState] > 0)
  
  return (
<div className="flex align-center justify-center items-center h-full">
  <div className="card bg-base-200  w-full h-fit md:m-24 mt-24 md:shadow-xl">
    <div className="card-body items-center space-y-3">
    <div className='bg-base-200 rounded-xl min-w-full'>
      {/* list of orders */}
      <div className='p-4'>
        <h1 className='text-2xl font-bold'>Your Individual Cart</h1>
        <ul>
          {orderKeys.map((key) => {
            const order = ordersState[key]
            return (
              <div key={key}>
              <li key={key} className='flex grid grid-cols-7 mt-2'>
                <span className={'col-span-3'}>{order.name}</span>
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
                  {ordersState[key].culprit[nameState]}
                  <button
                    className='btn btn-xs btn-outline'
                    onClick={() => {
                      addOrder(order)
                    }}
                  >
                    +
                  </button>
                </span>
                <span className='font-semibold'>${Number(order.price * ordersState[key].culprit[nameState]).toFixed(2)}</span>
              </li>
              {Object.keys(order.modifications ?? {}).map((modKey) => {
                const mod = order.modifications[modKey]
                return (
                  <li key={modKey} className='flex grid grid-cols-7 mt-2'>
                  <p className={'indent-5 col-span-3'}>&#8226; {mod.name}</p>
                  <span>{mod.price}</span>
                  <span className='flex justify-center gap-2 col-span-2'>
                    <button
                      className='btn btn-xs btn-outline'
                      onClick={() => {
                        decrementMod(order, mod)
                      }}
                    >
                      -
                    </button>
                    {mod.quantity ?? 0}
                    <button
                      className='btn btn-xs btn-outline'
                      onClick={() => {
                        incrementMod(order, mod)
                      }}
                    >
                      +
                    </button>
                  </span>
                  <span className='font-semibold'>+{Number(mod.price * (mod.quantity ?? 0)).toFixed(2)}</span>
                  </li>
                )
              })}
              </div>
            )
          })}
        </ul>
      </div>

      {/* total individual */}
      <span className='divider mx-10'></span>

      <div className='flex grid grid-cols-7 px-4'>
        <div className='col-span-4 '>Your Total:</div>
        {/* no items */}
        <div className='col-span-2 flex justify-center'>
          {orderKeys.reduce((acc, key) => {
            return acc + ordersState[key].quantity
          }, 0)}
        </div>
        {/* total $$ */}
        <div className='font-semibold'>
          $
          {orderKeys.reduce((acc, key) => {
            return Number(
              (acc + ordersState[key].quantity * ordersState[key].price + 
                Object.keys(ordersState[key].modifications ?? {}).reduce((acc, modKey) => 
                  acc + ordersState[key].quantity * (ordersState[key].modifications[modKey].quantity ?? 0) * ordersState[key].modifications[modKey].price
              , 0)).toFixed(2)
            )}, 0)}
        </div>
      </div>
    </div>
    <button
      className="btn btn-primary btn-block mt-10"
      onClick={() => navigate("/checkout/success?m=Thank you for choosing Slicr.")}
    >Pay</button>
    </div>
  </div>
</div>
  )
}
