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
function ProfileForm({ handleSave, error }){
  const currentUser = useContext(UserContext);
  const [formData, setFormData] = useState(currentUser);
  const [submitted, setSubmitted] = useState(false);

  useEffect(function onUnmount(){
    return setSubmitted(false)
  })

  function handleChange(evt){
    const {name, value} = evt.target;
    setFormData( oldData => (
      {
        firstName: oldData.firstName,
        lastName: oldData.lastName,
        password: oldData.password,
        email: oldData.email,
        [name]: value,
      }
    ))
  }

  async function handleSubmit(evt){
    evt.preventDefault();
    await handleSave(formData, UPDATE_METHOD);
    setSubmitted(true);
  }

  // function message() {
  //   console.log("Messgae", error)
  //   if(submitted) {
  //     return <Alert message="Successfully Updated" type="success" />
  //   } 
  //   return <Alert message={error} type="danger" />
  // }

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
      {submitted
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