// import { useStateTogether } from 'react-together'

import RestaurantList from '@pages/RestaurantList'
import './index.css'

export default function App() {
  // const [count, set_count] = useStateTogether('counter_0', 0)

  return (
    <div className='min-h-screen min-w-screen flex'>
      <RestaurantList />
    </div>
  )
}
