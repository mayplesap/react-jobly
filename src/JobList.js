import React from "react";
import JobCard from "./JobCard"
import { v4 as uuid } from "uuid"
//TODO: { userState, useEffect } for apply button

/** JobList
 * 
 * props:
 * - jobs: array of objects
 * 
 * { ListWithSearch, CompanyList } -> JobList
 */
function JobList({ jobs }) {
  
  return (
    <div className="JobList">
      { jobs.map ( job => (
        <JobCard key={uuid()} job={job}/>
      ))}
    </div>
  )
}

export default JobList;