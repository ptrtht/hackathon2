import * as db from '../db.json'
import MenuFoodItem from './MenuFoodItem'
export default function RestaurantMenu({ addOrder, ordersState, decrementOrder }) {
  const loc = window.location.pathname.split('/')
  const restaurant_id = loc[loc.length - 1]
  const restaurant = db.restaurants.find((r) => r.restaurantId === restaurant_id)

  console.log(restaurant)

  return (
    <>
      <div className='flex flex-wrap gap-4 p-4'>
        {restaurant?.menu.food.map((foodItem) => (
          <MenuFoodItem
            key={foodItem.id}
            menuItem={foodItem}
            addOrder={addOrder}
            ordersState={ordersState}
            decrementOrder={decrementOrder}
          />
        ))}
      </div>
    </>
  )
}
