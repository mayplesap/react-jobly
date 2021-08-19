import React from "react";

/*CompanyCard
 * 
 * prop:
 * - company: object
 * 
 * CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  return (
    <div className="row border shadow mt-3 rounded">
      <div className="col-9">
        <h3>{company.name}</h3>
      </div>
      <div className="col-3">
        {company.logoUrl
          ?
          <img 
            src={company.logoUrl} 
            alt={company.name} 
            className="pull-right img-fluid" 
            style={{width:"100px"}}/>
          :
          null
        }
      </div>
      <p className="col-12">{company.description}</p>
    </div>
  )
}

export default CompanyCard