import { useState } from "react";

function LoginForm(){
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
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        placeholder="Enter Search Term..."
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  )
}

export default LoginForm