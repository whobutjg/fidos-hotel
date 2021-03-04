import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className='bg-gray-800'>
      <div className="relative flex items-center justify-end h-10">
        <div>
          <NavLink exact to="/" 
          className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium'>
            Homepage
          </NavLink>
        </div>
        <div>
          <NavLink to="/pets" className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
            Pets
          </NavLink>
        </div>
        <div>
          <NavLink to="/newpet" className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
            New Pet
          </NavLink>
        </div>
        <div>
          <NavLink to='/newbooking' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
            Bookings
          </NavLink>
          {/* <NavLink to='/login' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Login</NavLink>
          <NavLink to='/signup' className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>Sign-Up</NavLink> */}
        </div>
      </div>
      </nav>
    </header>
  );
}
