import React from "react";

/** TODO:
 * JobCard
 * 
 * JobList -> JobCard
 */
function JobCard({ job, handleSave, isApplied }) {
  let currUser = ...;//TODO:

  return (
    <div>
      <h3>{job.title}</h3>
      <h4>{job.handle}</h4>
      <p>Salary: {job.salay}</p>
      <p>Equity: {job.equity}</p>
      {job in currUser.jobs
        ?
        <button disabled>Applied</button>
        :
        <button onClick={handleSave}>Apply</button>

      }
    </div>
  )
}

export default JobCard;