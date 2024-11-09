import { Link } from 'react-router-dom'
import * as db from '../db.json'
import RestaurantItem from './RestaurantItem'

export default function RestaurantList() {
  return (
    <div className='grid 2xl:grid-cols-3 md:grid-cols-2 gap-4'>
      {db.restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.restaurantId} restaurant={restaurant} />
      ))}
    </div>
  )
}
