import { useState, useEffect } from "react";
import JoblyApi from "./api";
import JobList from "./JobList";
import { useParams } from "react-router-dom";

/** TODO:
 * CompanyDetail
 * 
 * Jobly -> CompanyList -> CompanyDetail
 */

function CompanyDetail(){
  const [company, setCompany] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { handle } = useParams();

  async function getCompany() {
    return await JoblyApi.getCompany();
  }

  useEffect(function getCompanyOnRender(){
    async function callApi() {
      let companyObj = await getCompany(handle);
      setCompany(companyObj);
    }
    callApi();
    setIsLoading(false);
  }, [handle]);

  if(isLoading) return <p>Loading...</p>

  return (
    <div>
      <h2>{company.name}</h2>
      <h5>{company.description}</h5>
      <Joblist jobs={company.jobs} />
    </div>
  )

}


export default CompanyDetail;