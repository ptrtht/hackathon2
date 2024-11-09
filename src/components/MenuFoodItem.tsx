import { Link } from 'react-router-dom'
import * as db from '../db.json'

export default function MenuFoodItem({
  menuItem,
  addOrder,
  ordersState,
  decrementOrder,
}: {
  menuItem: (typeof db.restaurants)[number]['menu']['food'][number]
  addOrder: ({ name, id }) => void
  ordersState: { [id: string]: { quantity: number } }
  decrementOrder: ({ name, id }) => void
}) {
  return (
    <div className='card bg-base-100 w-96 max-h-96 shadow-xl'>
      <figure>
        <img className='object-fill' src={menuItem.imageUrl} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{menuItem.name}</h2>
        <p>{menuItem.description}</p>
        <div className='card-actions grid '>
          {/* price */}
          <div className='flex items-center justify-center gap-2'>
            <span className='text-lg font-bold'>${menuItem.price}</span>
          </div>

          {ordersState[menuItem.id]?.quantity > 0 && (
            <div className='flex items-center justify-center h-full gap-2'>
              <span>
                <button
                  className='btn btn-xs  btn-outline'
                  onClick={() => {
                    decrementOrder(menuItem)
                  }}
                >
                  -
                </button>
              </span>
              <span className='badge badge-outline'>{ordersState[menuItem.id].quantity} in cart</span>
              <span>
                <button
                  className='btn btn-xs  btn-outline'
                  onClick={() => {
                    addOrder(menuItem)
                  }}
                >
                  +
                </button>
              </span>
            </div>
          )}

          {!ordersState[menuItem.id]?.quantity && (
            <button
              className='btn btn-primary'
              onClick={() => {
                addOrder(menuItem)
              }}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
