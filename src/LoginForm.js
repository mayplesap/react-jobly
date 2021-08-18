import { useState } from "react";

/** LoginForm
 * 
 * TODO: handleSave & alert
 * 
 * Routes -> LoginForm
 */
function LoginForm({ handleSave }){
  const [formData, setFormData] = useState({});

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
    handleSave(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        name="username"
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  )
}

export default LoginForm