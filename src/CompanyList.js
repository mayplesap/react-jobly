import CompanyCard from "./CompanyCard";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid"

/** CompanyList
 * 
 * props:
 * - companies: array of company objects
 * 
 * ListWithSearch -> CompanyList
 */
function CompanyList({ companies }){
  
  return (
    <div className="CompanyList">
    { companies.map( company => (
    <Link 
      key={uuid()} 
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