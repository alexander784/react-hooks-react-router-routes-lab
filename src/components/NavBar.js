import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div>
    <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" activeClassName="active">
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/directors" activeClassName="active">

            Directors
            </NavLink>
          </li>
          <li>
            <NavLink to="/actors" activeClassName="active">
              Actors
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );

  
}

export default NavBar;
