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
    <div className="container">
    { companies.map( company => (
    <Link 
      key={company.handle} 
      to={`/companies/${company.handle}`} 
      className="text-decoration-none">
    <CompanyCard 
      company={company} />
    </Link>) 
    )}
    </div>
  )
}

export default CompanyList;