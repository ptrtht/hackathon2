import { Link } from 'react-router-dom'
import * as db from '../db.json'
import RestaurantItem from './RestaurantItem'

export default function RestaurantList() {
  return (
    <div className='flex flex-wrap gap-4 p-4'>
      {db.restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.restaurantId} restaurant={restaurant} />
      ))}
    </div>
  )
}
