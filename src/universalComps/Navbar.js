import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <header>
      <nav className='bg-blue-500'>
      <div className="relative flex items-center justify-end h-10">
        <div>
          <NavLink exact to="/" 
          className='text-white hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium'>
            Abpout
          </NavLink>
        </div>
        <div>
          <NavLink to="/pets" className='text-white hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
            Pets
          </NavLink>
        </div>
        <div>
          <NavLink to="/newpet" className='text-white hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
            New Pet
          </NavLink>
        </div>
        <div>
          <NavLink to='/newbooking' className='text-white hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
            Bookings

          </NavLink>
          {(props.loggedIn) ? <NavLink to='/profile' className='text-white hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>Profile</NavLink>: 
           <NavLink to='/login' className='text-white hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>Login</NavLink>}
          
          
          <NavLink to='/signup' className='text-white hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>Sign-Up With Email</NavLink>
        </div>
        <div>
          <NavLink to='/logout' className='text-white hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>Logout</NavLink>
        </div>
      </div>
      </nav>
    </header>
  );
}
