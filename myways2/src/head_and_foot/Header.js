import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className='flex justify-between bg-sky-600 text-white px-[2rem] items-center py-[1rem] '>
      <h3 className='text-white font-bold text-[1.5rem]'>myFood</h3>
      
      <ul className='flex space-x-10 mr-[3rem]'>
     
      <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/food">Stored Food</Link>
        </li>
        
      </ul>
     
    </div>
  )
}

export default Header
