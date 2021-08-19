import { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobList from "./JobList";
import { useParams } from "react-router-dom";

/** CompanyDetail
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

  if(isLoading) return <h2 className="text-center mt-5">Loading...</h2>
  return (
    <div className="CompanyDetail container mt-5">
      <h2>{company.name}</h2>
      <h6>{company.description}</h6>
      <JobList jobs={company.jobs} />
    </div>
  )

}


export default CompanyDetail;