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

  async function updateList() {
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
        : null
      }
    </div>
  )
}

export default Jobly;