import { useState, useContext, useEffect } from "react";
import UserContext from './userContext';
import { UPDATE_METHOD } from "./constants";
import Alert from "./Alert";

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
function ProfileForm({ handleSave, error, updated, setUpdated }) {
  const currentUser = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    password: currentUser.password,
    email: currentUser.email,
  });
  // const [submitted, setSubmitted] = useState(false);


  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(oldData => (
      {
        ...oldData,
        [name]: value,
      }
    ))
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    await handleSave(formData, UPDATE_METHOD);
    // setSubmitted(true);
  }

  useEffect(function clearMessageOnUnmount() {
    return function unmount() {
      setUpdated(false);
    }
  }, [setUpdated])

  return (
    <form onSubmit={handleSubmit} className="ProfileForm container mt-3">
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
          value={formData.email}
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
        {error
          ?
          <Alert message={error} type="danger" />
          :
          null
        }
        {updated
          ?
          <Alert message="Successfully Updated" type="success" />
          :
          null
        }


        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </div>
    </form>
  )
}

export default ProfileForm;