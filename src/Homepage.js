import { Link } from 'react-router-dom';
import { useContext } from "react";
import UserContext from './userContext';

function Homepage() {
  const user = useContext(UserContext); 

  return (
    <div className="text-center mt-5">
      <h1>Jobly</h1>
      
      {user? :
      
        }
      <li>
        <Link exact to="/login" className="nav-item nav-link">
          Login
        </Link>
      </li>
      <li>
        <Link exact to="/signup" className="nav-item nav-link">
          Signup
        </Link>
      </li>
    </div>
  )
}

export default Homepage;