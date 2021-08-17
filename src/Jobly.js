import SearchForm from "./SearchForm";
import CompanyList from "./CompanyList";
import JobList from "./JobList";

function Jobly({ list, listType }) {
  return (
    <div>
      <SearchForm />
      {listType === "companies"
        ? <CompanyList companies={list} />
        : <JobList jobs={list} />
      }
    </div>
  )
}

export default Jobly;