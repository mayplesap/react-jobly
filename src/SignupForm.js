import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { SIGNUP_METHOD } from "./constants";

/** Signup Form
 * TODO: Alert
 * 
 * props:
 * - handleSave: function
 * 
 * state:
 * - formData
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
    handleSave(formData, SIGNUP_METHOD);
    history.push("/companies");
  }
  
  return (
    <form onSubmit={handleSubmit} className="container mt-3">
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
      <label htmlFor="firstName">First Name</label>
      <input
        name="firstName"
        id="firstName"
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName"
        id="lastName"
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        id="email"
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