import { Menubar } from 'primereact/menubar';

export default function TopBar() {
  return (
  <div className="bg-base-200 navbar bg-base-100 w-full h-10">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">Slicr</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><a>Link</a></li>
      </ul>
    </div>
  </div>
  )
}