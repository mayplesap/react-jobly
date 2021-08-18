import { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobList from "./JobList";
import { useParams } from "react-router-dom";

/** TODO:
 * CompanyDetail
 * 
 * state:
 * - company: object
 * - isLoading: boolean
 * 
 * Jobly -> CompanyList -> CompanyDetail
 */

function CompanyDetail(){
  const [company, setCompany] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { handle } = useParams();

  useEffect(function getCompanyOnRender(){
    async function callApi() {
      let companyObj = await JoblyApi.getCompany(handle);
      setCompany(companyObj);
      setIsLoading(false);
    }
    callApi();
  }, [handle]);

  if(isLoading) return <p>Loading...</p>
  return (
    <div>
      <h2>{company.name}</h2>
      <h5>{company.description}</h5>
      <JobList jobs={company.jobs} />
    </div>
  )

}


export default CompanyDetail;