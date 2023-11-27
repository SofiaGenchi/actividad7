import { Link, Outlet } from "react-router-dom"
export default function Nav() {
  return (
    <>
        <nav className="bg-white shadow dark:bg-black">
            <ul className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                <li class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                    <Link to="/">Inicio</Link>
                </li>
                <li class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                    <Link to="/productos">Productos</Link>
                </li>
                <li class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
                    <Link to="/contacto">Contacto</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}
