import SearchForm from "./SearchForm";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import JoblyApi from "./JoblyApi";
import { useState, useEffect } from "react";

function Jobly({ listType }) {
  const [list, setList] = useState([]);

  async function updateList() {
    //fjdskaf
    setList(()=>(list))
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
    }
    callApi();
  }, [listType])

  

  return (
    <div>
      <SearchForm searchFunction={updateList} />
      {listType === "companies"
        ? <CompanyList companies={list} />
        : <JobList jobs={list} />
      }
    </div>
  )
}

export default Jobly;