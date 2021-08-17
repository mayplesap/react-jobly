import SearchForm from "./SearchForm";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import JoblyApi from "./api";
import { useState, useEffect } from "react";

/** TODO:
 * 
 */
function Jobly({ listType }) {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("")

  function updateSearchTerm(word){
    setSearchTerm(word);
  }

  async function getCompanies(){
    return await JoblyApi.getCompanies();
  }

  async function getJobs(){
    return await JoblyApi.getJobs();
  }

  useEffect(function getListOnRender(){
    async function callApi(){
      let newList;
      if(listType==="companies"){
        newList = await getCompanies();
      } else {
        newList = await getJobs();
      }
      setList(newList);
      setIsLoading(false);
    }
    callApi();
  }, [listType])

  useEffect(function updateListWhenSearch(){
    async function updateList() {
      let newList = await JoblyApi.getCompanies({ name: searchTerm });
      setList( newList );
    }
    updateList();
  },[searchTerm])

  if(isLoading) return <p>Loading...</p>

  return (
    <div>
      <SearchForm handleSearch={updateSearchTerm} />
      {listType === "companies"
        ? <CompanyList companies={list} />
        : <JobList jobs={list} />
      }
    </div>
  )
}

export default Jobly;