import React from "react";

/** JobCard
 *  TODO: handlesave, isapplied --> for apply button
 * 
 * props:
 * - job: object
 * 
 * JobList -> JobCard
 */
function JobCard({ job, handleSave, isApplied }) {
  // let currUser = ...;

  return (
    <div className="JobCard row border shadow mt-3 rounded">
      <h3 className="col-12">{job.title}</h3>
      <h4 className="col-12 font-weight-normal">{job.companyHandle}</h4>
      {job.salary
        ?
        <p className="col-12">Salary: {job.salary}</p>
        :
        null
      }
      {job.equity
        ?
        <p className="col-12">Equity: {job.equity}</p>
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