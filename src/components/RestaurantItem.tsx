import { Link } from 'react-router-dom'
import * as db from '../db.json'

export default function RestaurantItem({ restaurant }: { restaurant: (typeof db.restaurants)[number] }) {
  return (
    <div className='card bg-base-100 w-96 max-h-96 shadow-xl'>
      <figure>
        <img src={restaurant.imageUrl} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{restaurant.name}</h2>
        <p>{restaurant.cuisine}</p>
        <div className='card-actions justify-end'>
          <Link className='btn btn-primary' to={'/restaurants/' + restaurant.restaurantId}>
            See Menu
          </Link>
        </div>
      </div>
    </div>
  )
}
