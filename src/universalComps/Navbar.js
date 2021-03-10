import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  let loginLogoutButton;
  if (props.loggedIn) {
    loginLogoutButton = (
      <button
        onClick={(event) => props.logoutHandler(event)}
        className='text-white hover:bg-yellow-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
      >
        LOGOUT
      </button>
    );
  } else {
    loginLogoutButton = (
      <button
        onClick={() => props.showLoginModal()}
        className='text-white hover:bg-yellow-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
      >
        SIGN-IN
      </button>
    );
  }

  return (
    <header>
      <nav className='bg-blue-500'>
        <div className='relative flex items-center justify-end h-10'>
          <div>
            <NavLink
              exact
              to='/'
              className='text-white hover:bg-yellow-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium'
            >
              ABOUT
            </NavLink>
          </div>
          <div>
            {props.loggedIn ? (
              <NavLink
                to='/pets'
                className='text-white hover:bg-yellow-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                PETS
              </NavLink>
            ) : null}
          </div>
          <div>
            {props.loggedIn ? (
              <NavLink
                to='/newpet'
                className='text-white hover:bg-yellow-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                NEW PET
              </NavLink>
            ) : null}
          </div>
          <div>
            {props.loggedIn ? (
              <NavLink
                to='/profile'
                className='text-white hover:bg-yellow-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                PROFILE
              </NavLink>
            ) : (
              <NavLink
                to='/signup'
                className='text-white hover:bg-yellow-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
              >
                SIGN-UP WITH EMAIL
              </NavLink>
            )}
          </div>

          <div>{loginLogoutButton}</div>
        </div>
      </nav>
    </header>
  );
}
