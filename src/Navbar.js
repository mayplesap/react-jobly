import React from "react";
import { NavLink } from "react-router-dom";

/** Navbar
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
 * props:
 * - currentUser: object
 * - logout: function to logout
 * - token
 * 
 * App -> Navbar
 */
function Navbar({ currentUser, token, logout }) {
  return (
    <nav className="NavBar navbar navbar-expand navbar-light bg-light p-0">
    <div className="container-fluid p-0">
      <NavLink className="nav-link" exact to="/">
        Jobly
      </NavLink>
      {(token && currentUser) ?
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
                Logout {currentUser.username}
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