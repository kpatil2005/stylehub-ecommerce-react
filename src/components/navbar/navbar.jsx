import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
function Navbar() {
    const [menu, setmenu] = useState('home')
    const { getTotalCartItems } = useContext(ShopContext)
    return (
        <div className='navbar bg-white shadow-sm border-b border-gray-100 px-4 py-4 flex items-center justify-between' >
            <div className="nav-logo flex items-center gap-2">
                <img className='w-12 h-12 md:w-16 md:h-16 object-contain hover:scale-105 transition-transform duration-200' src={logo} alt="" />
                <h3 className='text-lg md:text-2xl font-bold text-gray-900'>StyleHub</h3>
            </div>

            <ul className='nav-menu hidden md:flex space-x-8 text-gray-600 font-medium'>
                <li onClick={() => { setmenu("home") }}>
                    <Link to='/' className='hover:text-gray-900 cursor-pointer transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50'>Home</Link>
                    {menu === "home" ? <hr className='mx-auto mt-1 h-0.5 bg-gray-900 rounded' /> : null}
                </li>

                <li onClick={() => { setmenu("mens") }}>
                    <Link to='/mens' className='hover:text-gray-900 cursor-pointer transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50 capitalize'>Man</Link>
                    {menu === "mens" ? <hr className='mx-auto mt-1 h-0.5 bg-gray-900 rounded' /> : null}
                </li>

                <li onClick={() => { setmenu("womens") }}>
                    <Link to='/womens' className='hover:text-gray-900 cursor-pointer transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50 capitalize'>Woman</Link>
                    {menu === "womens" ? <hr className='mx-auto mt-1 h-0.5 bg-gray-900 rounded' /> : null}
                </li>

                <li onClick={() => { setmenu("kids") }}>
                    <Link to='/kids' className='hover:text-gray-900 cursor-pointer transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50 capitalize'>Kids</Link>
                    {menu === "kids" ? <hr className='mx-auto mt-1 h-0.5 bg-gray-900 rounded' /> : null}
                </li>
            </ul>

            <div className="nav-login-cart flex items-center space-x-2 md:space-x-4">
                <Link to='/login' className='hidden md:block bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-200 capitalize'>Login</Link>
                <Link to='/cart' className='relative'>
                    <img className='w-6 h-6 md:w-8 md:h-8 cursor-pointer hover:scale-105 transition-transform duration-200' src={cart} alt="" />
                    <span className='absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center'>{getTotalCartItems()}</span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar

