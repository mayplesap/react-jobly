import { useState, useContext, useEffect } from "react";
import UserContext from './userContext';
import ErrorContext from './errorContext';
import UpdateContext from './updateContext';
import { UPDATE_METHOD } from "./constants";
import Alert from "./Alert";

/** ProfileForm
 * 
 * props:
 * - handleSave: function
 * 
 * state:
 * - formData
 * 
 * context:
 * - user: UserContext
 * - error: ErrorContext
 * - update: UpdateContext
 * 
 * 
 * Routes -> ProfileForm
 */
function ProfileForm({ handleSave }) {
  const currentUser = useContext(UserContext);
  const error = useContext(ErrorContext);
  const updatedObj = useContext(UpdateContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    password: currentUser.password,
    email: currentUser.email,
  });
  

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
  }

  useEffect(function clearMessageOnUnmount() {
    return function unmount() {
      updatedObj.setUpdated(false);
    }
  }, [updatedObj])

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
        {updatedObj.updated
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