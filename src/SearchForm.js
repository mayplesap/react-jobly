import { useState } from "react";

/** SearchForm
 * 
 * state:
 * - formData
 * 
 * Jobly -> SearchForm
 */
function SearchForm({ handleSearch }){
  const [formData, setFormData] = useState({search:""});

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
    setFormData({search:""});
  }

  return (
    <form onSubmit={handleSubmit} className="SearchFrom form-group row text-center mt-5">
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