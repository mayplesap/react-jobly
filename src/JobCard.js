import React from "react";

/** TODO:
 * JobCard
 * 
 * JobList -> JobCard
 */
function JobCard({ job, handleSave, isApplied }) {
  // let currUser = ...;//TODO:

  return (
    <div>
      <h3>{job.title}</h3>
      <h4>{job.companyHandle}</h4>
      {job.salary
        ?
        <p>Salary: {job.salary}</p>
        :
        null
      }
      {job.equity
        ?
        <p>Equity: {job.equity}</p>
        :
        null
      }
      {/* {job in currUser.jobs
        ?
        <button disabled>Applied</button>
        :
        <button onClick={handleSave}>Apply</button>
      } */}
    </div>
  )
}

export default JobCard;