import { useState, useContext } from "react";
import UserContext from './userContext';
import { useHistory } from "react-router-dom";

/** ProfileForm
 * 
 * TODO: handleSave & alert
 * Routes -> ProfileForm
 */
function ProfileForm({ handleSave}){
  const currentUser = useContext(UserContext);
  const [formData, setFormData] = useState(currentUser);
  // const history = useHistory();

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
    console.log()
    evt.preventDefault();
    handleSave(formData, "update");
    // history.push("/companies");
  }

  return (
    <form onSubmit={handleSubmit} className="container mt-3">
      <div className="form-group">
      <label>Username</label>
      <p>{currentUser.username}</p>
      <label htmlFor="firstName">First Name</label>
      <input
        name="firstName"
        placeholder={`${currentUser.firstName}`}
        onChange={handleChange}
        className="form-control"
        />
      <label htmlFor="lastName">Last Name</label>
      <input
        name="lastName"
        placeholder={`${currentUser.lastName}`}
        onChange={handleChange}
        className="form-control"
        />
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        placeholder={`${currentUser.email}`}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="password">Comfirm Password to make changes:</label>
      <input
        name="password"
        type="password"
        onChange={handleChange}
        className="form-control"
        required="required"
      />
      <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </div>
    </form>
  )
}

export default ProfileForm;