import React from "react";
import { useState } from "react";
import { SIGNUP_METHOD } from "./constants";
import Alert from "./Alert";

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
function SignupForm({ handleSave, error}){
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

  async function handleSubmit(evt){
    evt.preventDefault();
    await handleSave(formData, SIGNUP_METHOD);
  }
  
  
  return (
    <form onSubmit={handleSubmit} className="SignupForm container mt-3">
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
      {error ?
        <Alert message={error} type="danger"/>
        :
        null
      }
      <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </div>
    </form>
  )
}

export default SignupForm;