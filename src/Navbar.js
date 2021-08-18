import React from "react";
import { NavLink } from "react-router-dom";

/** TODO: add ternary
 * Navbar
 * when logged in 
 *    - Home
 *    - Companies
 *    - Jobs
 *    - Profile
 *    - Logout
 * when logged out
 *    - Home
 *    - Login
 *    - Signup
 * 
 * App -> Navbar
 */
function Navbar({ isUser }) {
  return (
    <nav className="navbar navbar-expand">
    <div className="container-fluid">
      <NavLink className="nav-link" exact to="/">
        Jobly
      </NavLink>
      {(isUser) ?
        (

          <ul className="nav navabar-nav">
            <li>
            <NavLink className="nav-item nav-link" exact to="/companies">
              Companies
            </NavLink>
            </li>
            <li>
            <NavLink className="nav-item nav-link" exact to="/jobs">
              Jobs
            </NavLink>
            </li>
            <li>
            <NavLink  className="nav-item nav-link" exact to="/profile">
              Profile
            </NavLink>
            </li>
            <li>
            <NavLink className="nav-item nav-link" exact to="logout">
              Log out
            </NavLink>
            </li>
          </ul>
        )
        : (
          <div>
            <NavLink exact to="/login">
              Login
            </NavLink>
            <NavLink exact to="/signup">
              Signup
            </NavLink>
          </div>
        )
      }
      </div>
    </nav>
  )
}

export default Navbar;