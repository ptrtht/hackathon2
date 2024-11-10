import { Menubar } from 'primereact/menubar';
import { Link } from 'react-router-dom';

export default function TopBar({nameState}: {nameState: string}) {
  return (
  <div className="bg-base-200 navbar bg-base-100 w-full h-10 fixed z-10 shadow-xl">
    <div className="flex-1">
      <Link to="/" className="btn btn-ghost text-xl">
      <img 
        className='max-w-full max-h-full'
      src='https://media.discordapp.net/attachments/1304748717076774912/1304857526164131961/Untitled.png?ex=6730eac5&is=672f9945&hm=2992ee4439321828261ed3706fc179d7772836c262020fdd1711e418f320bd0f&=&format=webp&quality=lossless' />
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