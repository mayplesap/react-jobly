import { useState } from "react";
import { useHistory } from "react-router-dom";

/** LoginForm
 * 
 * TODO: alert
 * props:
 * - handleSave: function
 * 
 * state: 
 * - formData: objec
 * 
 * Routes -> LoginForm
 */
function LoginForm({ handleSave }){
  const [formData, setFormData] = useState({});
  const history = useHistory();

  function handleChange(evt){
    const {name, value} = evt.target;
    setFormData( oldData => (
      {
        ...oldData,
        [name]: value,
      }
    ))
  }

  function handleSubmit(evt){
    evt.preventDefault();
    //TODO: if imported constant then 32 make more sense than just string
    handleSave(formData, "login")
    history.push("/companies");
  }

  return (
    <form onSubmit={handleSubmit} className="container mt-3">
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          name="username"
          onChange={handleChange}
          className="form-control"
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          onChange={handleChange}
          className="form-control"
        />
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </div>

    </form>
  )
}

export default LoginForm