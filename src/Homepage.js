function Homepage() {

  return (
    <div className="text-center mt-5">
      <h1>Welcome Back</h1>
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
    </div>
  )
}

export default Homepage;