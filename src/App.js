import React, { useState, useEffect } from "react";
import Routes from './Routes';
import Navbar from './Navbar';
import JoblyApi from "./api";
import UserContext from "./userContext";
import './App.css';
import "bootswatch/dist/flatly/bootstrap.min.css";
import { LOGIN_METHOD, SIGNUP_METHOD, UPDATE_METHOD, } from "./constants";
import { useHistory } from "react-router-dom";

/** App
 * 
 * state:
 * - currentUser: object
 * - token: jwt token from backend
 * - login: object like {isLogged: boolean, method: string}
 * - formInfo: object
 * 
 * context:
 * - currentUser: context provider
 */
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();

  function logout() {
    setCurrentUser(null);
    setError(null);
    localStorage.removeItem("token");
  }

  /** save function for login, signup, edit profile
   * - data: the formData
   * - method: object like { isLogged: boolean, formMethod: string constant}
   * 
   * sets currentUser, login, formInfo
   */
  async function save(data, method){
    setIsLoading(true);

    if (method === SIGNUP_METHOD) {
      await signup(data);
    } else if (method === LOGIN_METHOD) {
      await loginUser(data);
    } else if (method === UPDATE_METHOD) {
      await update(data);
    }
    setIsLoading(false);
    
  }
  
  async function loginUser(data) {
    try {
      let user = await JoblyApi.login(data);
      localStorage.setItem("token", JoblyApi.token);
      setCurrentUser(user);
      setError(null);
      history.push("/companies");
    } catch (err) {
      setError(err);
      setCurrentUser(null);
    }
  }
  async function signup(data) {
    try{
      let user = await JoblyApi.register(data);
      localStorage.setItem("token", JoblyApi.token);
      setCurrentUser(user);
      setError(null);
      history.push("/companies");
    } catch(err) {
      setError(err);
      setCurrentUser(null);
    }
  }

  async function update(data) {
    console.log("DTAAA", data)
    try{
      let user = await JoblyApi.update(data, currentUser.username);
      setError(null);
      setCurrentUser(user);
    } catch(err) {
      setError(err);
    }
  }

  useEffect(function getUserOnMount() {
    let token = localStorage.getItem("token");
    async function getUserWithToken(token) {
      JoblyApi.token = token;
      const user = await JoblyApi.getUser();
      setCurrentUser(user);
      setIsLoading(false);
    }
    if (token) {
      getUserWithToken(token);
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) return <p className="text-center mt-5">Loading...</p>

  return (
    <div className="App">
      
        <UserContext.Provider value={currentUser}>
          <Navbar currentUser={currentUser} token={JoblyApi.token} logout={logout} />
          <Routes handleSave={save} token={JoblyApi.token} error={error} />
        </UserContext.Provider>
      
    </div>
  );
}

export default App;


