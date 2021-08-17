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
    <nav className="Navbar">
      <NavLink exact to="/">
        Jobly
      </NavLink>
      {(isUser) ?
        (
          <div>
            <NavLink exact to="/companies">
              Companies
            </NavLink>
            <NavLink exact to="/jobs">
              Jobs
            </NavLink>
            <NavLink exact to="/profile">
              Profile
            </NavLink>
            <NavLink exact to="logout">
              Log out
            </NavLink>
          </div>
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
    </nav>
  )
}

export default Navbar;