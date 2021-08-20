import React, { useState, useEffect } from "react";
import Routes from './Routes';
import Navbar from './Navbar';
import JoblyApi from "./JoblyApi";
import UserContext from "./userContext";
import ErrorContext from "./errorContext";
import UpdateContext from "./updateContext";
import './App.css';
import "bootswatch/dist/flatly/bootstrap.min.css";
import { LOGIN_METHOD, SIGNUP_METHOD, UPDATE_METHOD, } from "./constants";
import { useHistory } from "react-router-dom";

/** App
 * 
 * state:
 * - currentUser: object
 * - isLoading: boolean
 * - error: holds error message
 * 
 * context:
 * - currentUser: context provider
 */
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updated, setUpdated] = useState(false);
  const history = useHistory();

  function logout() {
    setCurrentUser(null);
    setError(null);
    localStorage.removeItem("token");
  }

  /** save function for login, signup, edit profile
   * - data: the formData
   * - method: string
   * 
   * sets isLoading
   */
  async function save(data, method) {
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

  /** loginUser - calls Api 
   * if correct info
   * - sets localStorage
   * - setCurrentUser
   * - redirect to "/companies"
   * 
   * if error
   * - setsError
   */
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

  /** signup - calls Api 
   * if no incorrect info
   * - sets localStorage
   * - setCurrentUser
   * - redirect to "/companies"
   * 
   * if error
   * - setsError
   */
  async function signup(data) {
    try {
      let user = await JoblyApi.register(data);
      localStorage.setItem("token", JoblyApi.token);
      setCurrentUser(user);
      setError(null);
      history.push("/companies");
    } catch (err) {
      setError(err);
      setCurrentUser(null);
    }
  }

  /** update - calls Api 
   * if no incorrect info
   * - setCurrentUser
   * 
   * if error
   * - setsError
   */
  async function update(data) {
    try {
      let user = await JoblyApi.update(data, currentUser.username);
      setError(null);
      setCurrentUser(user);
      setUpdated(true);
    } catch (err) {
      setError(err);
    }
  }

  /** keeps user logged in when refresh */
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
        <ErrorContext.Provider value={error}>
          <UpdateContext.Provider value={{ updated, setUpdated }}>
            <Navbar currentUser={currentUser} token={JoblyApi.token} logout={logout} />
            <Routes handleSave={save} token={JoblyApi.token}/>
          </UpdateContext.Provider>
        </ErrorContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;


