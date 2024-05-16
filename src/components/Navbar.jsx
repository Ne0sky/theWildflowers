import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between font-secondary sticky z-20 bg-white  top-0 px-4 md:px-8 lg:px-16  py-8'>
        <div className='text-3xl font-bold text-green-800 font-logo'>
           <Link to='/'>the WildFlowers</Link>
        </div>
        <div className=''>
            <ul className='flex gap-4 font-medium'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/cart' >Cart</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar