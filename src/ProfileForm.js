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
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <p>{currentUser.username}</p>
      <label htmlFor="firstName">First Name</label>
      <input
        name="firstName"
        value="{currentUser.firstName}"
        onChange={handleChange}
        />
      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName"
        value="{currentUser.lastName}"
        onChange={handleChange}
        />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        value="{currentUser.email}"
        onChange={handleChange}
      />
      <label htmlFor="password">Comfirm Password to make changes:</label>
      <input
        name="password"
        type="password"
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  )
}

export default ProfileForm;