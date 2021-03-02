import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div>
        <div>
          <NavLink exact to="/">
            Homepage
          </NavLink>
        </div>
        <div>
          <NavLink to="/pets">Pets</NavLink>
        </div>
        <div>
          <NavLink to="/newpet">New Pet</NavLink>
        </div>
        <div>
          <NavLink to='/newbooking'>Bookings</NavLink>
        </div>
      </div>
    </header>
  );
}
