import axios from "axios";
import JWT from "jsonwebtoken";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  /* Get list of companies, 
  optional search filter: minEmployees, maxEmployees, nameLike
  input:  {minEmployees: <integer>, maxEmployees: <integer>, nameLike: <string>}

  output: { companies: [ { handle, name, description, numEmployees, logoUrl }, ...] }
  */
  static async getCompanies(searchFilter={}){
    let res = await this.request(`companies`, searchFilter);
    return res.companies;
  }

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get list of jobs 
   * optional search filter: minSalary, hasEquity, title
   * input: {minSalary: <integer>, hasEquity: <integer>, title: <string>}
   * 
   * output: { jobs: [ { id, title, salary, equity, companyHandle, companyName },...] }
  */
 static  async getJobs(searchFilter={}) {
   let res = await this.request(`jobs`, searchFilter);
   return res.jobs;
 }

  // obviously, you'll add a lot here ...

  /* getUser - decode token into payload and gets user from database */
  static async getUser(){
    let payload = await JWT.decode(this.token);
    let res = await this.request(`users/${payload.username}`);
    console.log('USER RESPONSE', res)
    return res.user;
  }

  /* signup - sets token & returns user */
  static async register(data){
    let res = await this.request(`auth/register`, data, "post");
    this.token = res.token;
    let user = await this.getUser();
    return user;
  }

  /* login - sets token & return user*/
  static async login(data){
    let res = await this.request(`auth/token`, data, "post");
    this.token = res.token;
    let user = await this.getUser();
    return user;
  }

}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;