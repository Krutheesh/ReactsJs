import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <>
   <div>
   <nav className=' absolute top-1 z-50  w-full flex items-center justify-between px-3'>
      <h1 className='text-red-600 font-bold text-[2rem] md:text-[2.5rem]'><Link to='/'>MYFLIX</Link></h1>
      <div className='space-x-3 md:space-x-5'>
      <button className='p-1 px-3 rounded text-white hover:bg-red-600'> <Link to='/login'>Login</Link></button>
      <button className='p-1 px-3 rounded text-white bg-red-600'><Link to = '/sign'>Sign Up</Link></button>
      </div>
    </nav>
    <Outlet/>
   </div>
    
    </>
  )
}

export default Navbar
