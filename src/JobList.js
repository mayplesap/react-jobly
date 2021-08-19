import React from "react";
import JobCard from "./JobCard"
//TODO: { userState, useEffect } for apply

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
        <JobCard key={job.id} job={job}/>
      ))}
    </div>
  )
}

export default JobList;