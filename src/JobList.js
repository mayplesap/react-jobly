import React from "react";
import JobCard from "./JobCard"
//TODO: { userState, useEffect } for apply

/** JobList
 * 
 * props:
 * - jobs: array of objects
 * 
 * { Jobly, CompanyList } -> JobList
 */
function JobList({ jobs }) {
  return (
    <div>
      { jobs.map ( job => (
        <JobCard job={job} key={job.id}/>
      ))}
    </div>
  )
}

export default JobList;