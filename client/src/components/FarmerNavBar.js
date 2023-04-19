import React from "react";
import { NavLink } from "react-router-dom";
import './FarmerNavBar.css'



function FarmerNavBar({ farmerId }) {

  const profileUrl = `/farmers/${farmerId}`

    return (
    <nav>
      <ul>
        <li className="hover-underline-animation">
        <NavLink to="/">Logout</NavLink>
        </li>
        <li className="hover-underline-animation">
        <NavLink to="/farmers/profile">Profile</NavLink>
        </li>
        <li className="hover-underline-animation">
        <NavLink to="/farmers/orders">My Orders</NavLink>
        </li>
      </ul>
    </nav>
    )

}

export default FarmerNavBar;