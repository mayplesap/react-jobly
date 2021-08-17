import React from "react";
import { useState } from "react";

/** Signup Form
 * TODO: Alert & handleSave function
 * 
 * Routes -> SignupForm
 */
function SignupForm({ handleSave }){
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
    handleSave(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label for="username">Username</label>
      <input
        name="username"
        onChange={handleChange}
      />
      <label for="password">Password</label>
      <input
        name="password"
        type="password"
        onChange={handleChange}
      />
      <label for="firstName">First Name</label>
      <input
        name="firstName"
        onChange={handleChange}
      />
      <label for="lastNae">Last Name</label>
      <input
        name="lastName"
        onChange={handleChange}
      />
      <label for="email">Email</label>
      <input
        name="email"
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  )
}

export default SignupForm;