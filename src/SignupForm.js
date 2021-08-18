import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

/** Signup Form
 * TODO: Alert & handleSave function
 * 
 * Routes -> SignupForm
 */
function SignupForm({ handleSave }){
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
    handleSave(formData);
    history.push("/companies");
  }

  return (
    <form onSubmit={handleSubmit} className="container mt-3">
      <div clasName="form-group">
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
      <label htmlFor="firstName">First Name</label>
      <input
        name="firstName"
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="lastNae">Last Name</label>
      <input
        name="lastName"
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        onChange={handleChange}
        className="form-control"
      />
      <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </div>
    </form>
  )
}

export default SignupForm;