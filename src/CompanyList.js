import CompanyCard from "./CompanyCard";
import { Link } from "react-router-dom";

/** CompanyList
 * 
 * props:
 * - companies: array of company objects
 * 
 * ListWithSearch -> CompanyList
 */
function CompanyList({ companies }){
  
  return (
    <div>
    { companies.map( company => (
    <Link 
      key={company.handle} 
      to={`/companies/${company.handle}`} 
      className="text-decoration-none text-reset">
    <CompanyCard 
      company={company} />
    </Link>) 
    )}
    </div>
  )
}

export default CompanyList;