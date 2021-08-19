import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Navbar';
import JoblyApi from "./api";
import UserContext from "./userContext";
import './App.css';
import "bootswatch/dist/flatly/bootstrap.min.css";
import {LOGIN_METHOD, SIGNUP_METHOD, UPDATE_METHOD,} from "./constants";

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
  // const [token, setToken] = useState(JoblyApi.token);
  const [login, setLogin] = useState({isLogged: false, formMethod: ""});
  const [formInfo, setFormInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //localStorage.getItem()

  function logout() {
    setCurrentUser(null);
    localStorage.removeItem("token");
  }

  /** save function for login, signup, edit profile
   * - data: the formData
   * - method: object like { isLogged: boolean, formMethod: string constant}
   * 
   * sets currentUser, login, formInfo
   */
  function save(data, method){
    setCurrentUser(data);
    setFormInfo(data);
    setLogin({
      isLogged: true,
      formMethod: method
    });
  }

  useEffect(function handleForms(){
    async function signup() {
      let user = await JoblyApi.register(formInfo);
      // setToken(JoblyApi.token);
      setCurrentUser(user);
    }
    async function loginUser(data) {
      let user = await JoblyApi.login(data);
      // setToken(JoblyApi.token);
      setCurrentUser(user);
      localStorage.setItem("token",JoblyApi.token);
    }
    async function update(data){
      let username = await JoblyApi(JoblyApi.token)
      let user = await JoblyApi.update(data, username);
      setCurrentUser(user);
    }
    if(login.formMethod === SIGNUP_METHOD){
      signup();
    } else if (login.formMethod === LOGIN_METHOD) {
      loginUser(formInfo);
    } else if (login.formMethod === UPDATE_METHOD) {
      update();
    }

  }, [login, formInfo]);

  useEffect(function getUserOnMount(){
    let token = localStorage.getItem("token");
    async function getUserWithToken(token){
      JoblyApi.token = token;
      const user = await JoblyApi.getUser();
      setCurrentUser(user);
      setIsLoading(false);
    }
    if(token) {
      getUserWithToken(token);
    } else {
      setIsLoading(false);
    }
    
  },[]);
  
  if(isLoading) return <p className="text-center mt-5">Loading...</p>

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={ currentUser }>
          <Navbar currentUser={currentUser} logout={logout}/>
          <Routes handleSave={save} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;


