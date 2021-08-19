import { Link } from 'react-router-dom';
import { useContext } from "react";
import UserContext from './userContext';

/** Homepage
 * 
 * context:
 * - user
 * 
 * Routes -> Homepage
 */
function Homepage() {
  const user = useContext(UserContext); 

  return (
    <div className="text-center mt-5 container">
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {user? 
      <h3>Welcome Back, {user.username}</h3>
      :
      <div>
        <Link type="button" to="/login" className="btn btn-info" style={{"marginRight": 10}}>
          Login
        </Link>
        <Link type="button" to="/signup" className="btn btn-info">
          Signup
        </Link>
      </div>
        }

    </div>
  )
}

export default Homepage;