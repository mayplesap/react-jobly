import React from "react";

/** TODO:
 * CompanyCard
 * 
 * 
 * CompanyList -> CompanyCard
 */

function CompanyCard({ company }){
  return (
    <div>
      <h3>{company.name}</h3>
      {company.logoUrl
      ?
      <img src={company.logoUrl} alt={company.name}/>
      :
      null 
      }
      <p>{company.description}</p>
    </div>
  )
}

export default CompanyCard