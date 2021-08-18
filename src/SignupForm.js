import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

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
    //TODO: the const for signup
    handleSave(formData, "signup");
    history.push("/companies");
  }
  //htmlFor conencst to id of input
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
      <label htmlFor="firstName">First Name</label>
      <input
        name="firstName"
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="lastName">Last Name</label>
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