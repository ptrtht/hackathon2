import { Link } from 'react-router-dom'

export default function RestaurantList() {
  return (
    <div>
      <div className='grid grid-cols-2 gap-4'>
        <div className='card bg-base-100 w-96 shadow-xl'>
          <figure>
            <img src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' alt='Shoes' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Restaurant 1</h2>
            <p>Delicious pizza and feet pics</p>
            <div className='card-actions justify-end'>
              <Link className='btn btn-primary' to={'/restaurants/1'}>
                See Menu
              </Link>
            </div>
          </div>
        </div>
        <div className='card bg-base-100 w-96 shadow-xl'>
          <figure>
            <img src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' alt='Shoes' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Restaurant 1</h2>
            <p>Goth girls are a real specialty here</p>
            <div className='card-actions justify-end'>
              <Link className='btn btn-primary' to={'/restaurants/2'}>
                See Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
