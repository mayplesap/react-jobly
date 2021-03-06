import SearchForm from "./SearchForm";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import JoblyApi from "./JoblyApi";
import { useState, useEffect } from "react";
import { LIST_TYPE_COMPANIES, LIST_TYPE_JOBS } from "./constants";

/** ListWithSearch
 * 
 * props:
 * - listType: string of "companies" or "jobs"
 * 
 * state:
 * - list
 * - isLoading
 * - searchTerm
 * 
 * App -> Routes -> ListWithSearch
 */
function ListWithSearch({ listType }) {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("")

  function updateSearchTerm(word) {
    setSearchTerm(word);
  }

  

  useEffect(function getListOnRender() {
    async function callApi() {
      let newList;
      if (listType === LIST_TYPE_COMPANIES) {
        newList = await JoblyApi.getCompanies();
      } else if (listType === LIST_TYPE_JOBS) {
        newList = await JoblyApi.getJobs();
      }
      setList(newList);
      setIsLoading(false);
    }
    callApi();
  }, [listType])

  useEffect(function updateListWhenSearch() {
    async function updateList() {
      let newList;
      if (listType === LIST_TYPE_COMPANIES) {
        newList = await JoblyApi.getCompanies({ name: searchTerm });
      } else if (listType === LIST_TYPE_JOBS) {
        newList = await JoblyApi.getJobs({ title: searchTerm });
      }
      setList(newList);
    }

    async function callApi() {
      let newList;
      if (listType === LIST_TYPE_COMPANIES) {
        newList = await JoblyApi.getCompanies();
      } else if (listType === LIST_TYPE_JOBS) {
        newList = await JoblyApi.getJobs();
      }
      setList(newList);
      setIsLoading(false);
    }

    if (searchTerm) {
      updateList();
    }
    else { 
      callApi()
    }
  }, [searchTerm, listType])

  //make new useEffect to update search word when URL changes, useLocation(from react-router-dom)
  if (isLoading) return <h2 className="text-center mt-5">Loading...</h2>

  return (
    <div className="ListWithSearch container" >
      <SearchForm handleSearch={updateSearchTerm} />
      {listType === LIST_TYPE_COMPANIES
        ? <CompanyList companies={list} />
        : <JobList jobs={list} />
      }
    </div>
  )
}

export default ListWithSearch;