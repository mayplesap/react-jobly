import React, { useState, useEffect } from "react";
import JobCard from "./JobCard"

/** TODO:
 * JobList
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