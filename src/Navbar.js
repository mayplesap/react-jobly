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
function Navbar({ currentUser, logout }) {
  

  return (
    <nav className="navbar navbar-expand">
    <div className="container-fluid">
      <NavLink className="nav-link" exact to="/">
        Jobly
      </NavLink>
      {(currentUser) ?
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
              <NavLink className="nav-item nav-link" exact to="logout" onClick={logout}>
                Log out 
              </NavLink>
            </li>
          </ul>
        )
        : (
        
          <ul className="nav navabar-nav">
            <li>
              <NavLink exact to="/login" className="nav-item nav-link">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/signup" className="nav-item nav-link">
                Signup
              </NavLink>
            </li>
          </ul>
        )
      }
      </div>
    </nav>
  )
}

export default Navbar;