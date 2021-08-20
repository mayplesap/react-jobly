import { useState } from "react";
import { LOGIN_METHOD } from "./constants";
import Alert from "./Alert";

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
function LoginForm({ handleSave, error }) {
  const [formData, setFormData] = useState({});

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(oldData => (
      {
        ...oldData,
        [name]: value,
      }
    ))
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    await handleSave(formData, LOGIN_METHOD)
  }

  return (
    <form onSubmit={handleSubmit} className="LoginForm container mt-3">
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          name="username"
          id="username"
          onChange={handleChange}
          className="form-control"
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          id="password"
          type="password"
          onChange={handleChange}
          className="form-control"
          autoComplete="on"
        />
        {error ?
          <Alert message={error} type="danger" />
          :
          null
        }
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </div>

    </form>
  )
}

export default LoginForm