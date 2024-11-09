import { Link } from 'react-router-dom'
import * as db from '../db.json'

export default function MenuFoodItem({
  menuItem,
  addOrder,
}: {
  menuItem: (typeof db.restaurants)[number]['menu']['beverages'][number]
  addOrder: ({ name, id }) => void
}) {
  return (
    <div className='card bg-base-100 w-96 shadow-xl'>
      <figure>
        <img src={menuItem.imageUrl} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{menuItem.name}</h2>
        <p>{menuItem.description}</p>
        <div className='card-actions justify-end'>
          <button
            className='btn btn-primary'
            onClick={() => {
              addOrder({ name: 'hahah', id: Math.random() })
            }}
          >
            See Menu
          </button>
        </div>
      </div>
    </div>
  )
}
