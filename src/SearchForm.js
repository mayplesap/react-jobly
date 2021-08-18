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
    <form onSubmit={handleSubmit} className="form-group row text-center mt-3">
      <div className="col-10">
      <input
        name="search"
        placeholder="Enter Search Term..."
        onChange={handleChange}
        className="form-control"
      />
      </div>
      <div className="col-2">
      <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  )
}

export default SearchForm;