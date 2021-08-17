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
    <Link to={`/companies/${company.name}`}>
    <CompanyCard 
      key={company.handle} 
      company={company} />
    </Link>) 
    )}
    </div>
  )
}

export default CompanyList;