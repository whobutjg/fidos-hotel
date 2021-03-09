import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  let loginLogoutButton;
if (props.loggedIn) {
  loginLogoutButton = (
  <button onClick={(event) => props.logoutHandler(event)} 
    className='text-white hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
    Logout
  </button>)
} else {
  loginLogoutButton = (
    <button onClick={() => props.showLoginModal()} 
      className='text-white hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
      Login
    </button>)
}

  return (
    <header>
      <nav className='bg-blue-500'>
        <div className="relative flex items-center justify-end h-10">
          <div>
            <NavLink exact to="/" 
            className='text-white hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium'>
              About
            </NavLink>
          </div>
          <div>
            {(props.loggedIn) ? <NavLink to="/pets" className='text-white hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
              Pets
            </NavLink> : null}
          </div>
          <div>
            {(props.loggedIn) ? <NavLink to="/newpet" className='text-white hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>
              New Pet
            </NavLink> : null}
          </div>
          <div>
            {(props.loggedIn) ? <NavLink to='/profile' className='text-white hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>Profile</NavLink>: 
            <NavLink to='/signup' className='text-white hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium'>Sign-Up With Email</NavLink>}   
          </div>

          <div>
            {loginLogoutButton}
          </div>

        </div>
      </nav>
    </header>
  );
}
