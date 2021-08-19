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
  const [token, setToken] = useState(JoblyApi.token);
  const [login, setLogin] = useState({isLogged: false, formMethod: ""});
  const [formInfo, setFormInfo] = useState({});

  function logout() {
    setCurrentUser(null)
  }

  /** save function for login, signup, edit profile
   * - data: the formData
   * - method: object like { isLogged: boolean, formMethod: string constant}
   * 
   * sets currentUser, login, formInfo
   */
  function save(data, method){
    setCurrentUser(data);
    setFormInfo(currentUser);
    setLogin({
      isLogged: true,
      formMethod: method
    });
  }

  useEffect(function handleForms(){
    async function signup() {
      let user = await JoblyApi.register(formInfo);
      setToken(JoblyApi.token);
      setCurrentUser(user);
    }
    async function login(data) {
      let user = await JoblyApi.login(data);
      setToken(JoblyApi.token);
      setCurrentUser(user);
    }
    async function update(data){
      let user = await JoblyApi.update(data, formInfo.username);
      setCurrentUser(user);
    }

    if(login.formMethod === SIGNUP_METHOD){
      signup();
    } else if (login.formMethod === LOGIN_METHOD) {
      login(formInfo);
    } else if (login.formMethod === UPDATE_METHOD) {
      update();
    }

  }, [login, formInfo])

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


