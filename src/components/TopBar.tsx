import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function TopBar({nameState}: {nameState: string}) {
  const navigate = useNavigate();

  return (
  <div className="bg-base-200 navbar bg-base-100 w-full h-10 fixed z-10 shadow-xl">
    <div className="flex-1">
      <button 
        className='btn btn-ghost card-title sm:hidden'
        onClick={() => navigate(-1)}
      >
        <i className="pi pi-arrow-left" style={{ fontSize: '1rem' }}></i>
      </button>
      <Link to="/" className="btn btn-ghost text-xl">
      <img 
        className='max-w-full max-h-full'
        src='https://i.imgur.com/dwMXdHb.png' />
      </Link>
      <Link to="/restaurants" className='btn btn-ghost card-title hidden sm:flex'>
        Restaurants
      </Link>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>
          <h2 className='card-title hidden sm:block'>
            {nameState}
          </h2>
        </li>
        <li>
          <label htmlFor="my-drawer" className="btn ml-3 btn-ghost btn-square drawer-button">
            <i className="pi pi-shopping-cart" style={{ fontSize: '1rem' }}></i>
          </label>
        </li>
      </ul>
    </div>
  </div>
  )
}
