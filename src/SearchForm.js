import { useState } from "react";

/** SearchForm
 * 
 * Jobly -> SearchForm
 */
function SearchForm({handleSearch}){

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
    handleSearch(formData["search"]);
    setFormData({});
  }

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <input
        name="search"
        placeholder="Enter Search Term..."
        onChange={handleChange}
        className="mr-3"
      />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default SearchForm;