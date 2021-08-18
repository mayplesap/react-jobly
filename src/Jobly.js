import SearchForm from "./SearchForm";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import JoblyApi from "./api";
import { useState, useEffect } from "react";

/** Jobly
 * 
 * props:
 * - listType: string of "companies" or "jobs"
 * 
 * state:
 * - list
 * - isLoading
 * - searchTerm
 * 
 * App -> Routes -> Jobly
 */
function Jobly({ listType }) {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("")

  function updateSearchTerm(word){
    setSearchTerm(word);
  }
  
  useEffect(function getListOnRender(){
    async function callApi(){
      let newList;
      if(listType === "companies"){
        newList = await JoblyApi.getCompanies();
      } else {
        newList = await JoblyApi.getJobs();
      }
      setList(newList);
      setIsLoading(false);
    }
    callApi();
  }, [listType])

  useEffect(function updateListWhenSearch(){
    async function updateList() {
      let newList;
      if(listType === "companies") {
        newList = await JoblyApi.getCompanies({ name: searchTerm });
      } else {
        newList = await JoblyApi.getJobs({ title: searchTerm });
      }
      setList( newList );
    }
    updateList();
  },[searchTerm, listType])

  if(isLoading) return <h2 className="text-center mt-5">Loading...</h2>

  return (
    <div className="container" >
      <SearchForm handleSearch={updateSearchTerm} />
      {listType === "companies"
        ? <CompanyList companies={list} />
        : <JobList jobs={list} />
      }
    </div>
  )
}

export default Jobly;