import { useState, useContext } from "react";
import UserContext from './userContext';
import { UPDATE_METHOD } from "./constants";

/** ProfileForm
 * 
 * TODO: alert for successfully update or errors
 * 
 * props:
 * - handleSave: function
 * 
 * state:
 * - formData
 * 
 * context:
 * - user: UserContext
 * 
 * Routes -> ProfileForm
 */
function ProfileForm({ handleSave}){
  const currentUser = useContext(UserContext);
  const [formData, setFormData] = useState(currentUser);

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
    handleSave(formData, UPDATE_METHOD);
    console.log("sucessfully updatdddd!")
  }

  return (
    <form onSubmit={handleSubmit} className="container mt-3">
      <div className="form-group">
      <label>Username</label>
      <p>{currentUser.username}</p>
      <label htmlFor="firstName">First Name</label>
      <input
        name="firstName"
        id="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className="form-control"
        />
      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName"
        id="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className="form-control"
        />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        id="email"
        type="email"
        vslue={formData.email}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="password">Comfirm Password to make changes:</label>
      <input
        name="password"
        id="password"
        type="password"
        onChange={handleChange}
        className="form-control"
        required="required"
        autoComplete="on"
      />
      <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </div>
    </form>
  )
}

export default ProfileForm;