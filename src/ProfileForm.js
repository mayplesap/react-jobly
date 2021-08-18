import { useState } from "react";

/** ProfileForm
 * 
 * TODO: handleSave & alert
 * Routes -> ProfileForm
 */
function ProfileForm({ handleSave, currentUser}){
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
    <form onSubmit={handleSubmit} className="container mt-3">
      <div className="form-group">
      <label>Username</label>
      <p>{currentUser.username}</p>
      <label htmlFor="firstName">First Name</label>
      <input
        name="firstName"
        value="{currentUser.firstName}"
        onChange={handleChange}
        className="form-control"
        />
      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName"
        value="{currentUser.lastName}"
        onChange={handleChange}
        className="form-control"
        />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        value="{currentUser.email}"
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="password">Comfirm Password to make changes:</label>
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

export default ProfileForm;