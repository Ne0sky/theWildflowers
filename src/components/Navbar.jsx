import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import useCartContext from '../hooks/useCartContext';
import { FaHome } from 'react-icons/fa';
const Navbar = () => {
  const { cart } = useCartContext();
  return (
    <div className='w-full flex items-center justify-between font-secondary sticky z-20 bg-white  top-0 px-4 md:px-8 lg:px-16  py-8'>
        <div className='text-3xl font-bold text-green-800 font-logo'>
           <Link to='/'>the WildFlowers</Link>
        </div>
        <div className=''>
            <ul className='flex gap-8 font-medium'>
                <li ><Link to='/' className='flex items-center gap-2  text-xl'><FaHome/><p className='hidden md:flex'>Home</p></Link></li>
                <li ><Link to='/cart' className='flex items-center gap-2  text-xl relative' ><FaCartShopping/><span className='absolute text-white text-center rounded-full px-1 py-0 -top-1 text-xs left-3 bg-blue-600'>{cart.items.length}</span><p className='hidden md:flex'>Cart</p></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar