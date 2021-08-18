import CompanyCard from "./CompanyCard";
import { Link } from "react-router-dom";

/** TODO:
 * CompanyList
 * 
 * 
 * Jobly -> CompanyList
 */
function CompanyList({ companies }){
  
  return (
    <div>
    { companies.map( company => (
    <Link key={company.handle} to={`/companies/${company.handle}`}>
    <CompanyCard 
      company={company} />
    </Link>) 
    )}
    </div>
  )
}

export default CompanyList;