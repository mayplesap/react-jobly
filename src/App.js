import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Navbar';
import JoblyApi from "./api";
import UserContext from "./userContext";
import './App.css';
import "bootswatch/dist/flatly/bootstrap.min.css";
import { LOGIN_METHOD, SIGNUP_METHOD, UPDATE_METHOD, } from "./constants";

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
  const [login, setLogin] = useState({ isLogged: false, formMethod: "" });
  // const [formInfo, setFormInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
    setCurrentUser(data);
    // setFormInfo(data);
    setIsLoading(true);
    setLogin({
      isLogged: true,
      formMethod: method
    });

    if (login.formMethod === SIGNUP_METHOD) {
      await signup(data);
    } else if (login.formMethod === LOGIN_METHOD) {
      await loginUser(data);
    } else if (login.formMethod === UPDATE_METHOD) {
      await update(data);
    }
  }

  async function loginUser(data) {
    try {
      let user = await JoblyApi.login(data);
      setCurrentUser(user);
      localStorage.setItem("token", JoblyApi.token);
      // history.push("/companies");
    } catch (err) {
      console.log("THIS IS AN ERROR", err);
      setError(err);
    }
    // setIsLoading(() => false);
  }
  async function signup(data) {
    try{
      let user = await JoblyApi.register(data);
      setCurrentUser(user);
    } catch(err) {
      setError(err);
    }
    // setIsLoading(false);
  }

  async function update(data) {
    try{
      let username = await JoblyApi(JoblyApi.token)
      let user = await JoblyApi.update(data, username);
      setCurrentUser(user);
    } catch(err) {
      setError(err);
    }
    // setIsLoading(false);
  }

  // useEffect(function handleForms() {
  //   async function signup() {
  //     let user = await JoblyApi.register(formInfo);
  //     setCurrentUser(user);
  //   }
    // async function loginUser(data) {
    //   try {
    //     let user = await JoblyApi.login(data);
    //     setCurrentUser(user);
    //     localStorage.setItem("token", JoblyApi.token);
    //     history.push("/companies");
    //   } catch (err) {
    //     console.log("THIS IS AN ERROR", err);
    //     setError(err);
    //   }
    //   setIsLoading(false);

    // }
  //   async function update(data) {
  //     let username = await JoblyApi(JoblyApi.token)
  //     let user = await JoblyApi.update(data, username);
  //     setCurrentUser(user);
  //   }
  //   if (login.formMethod === SIGNUP_METHOD) {
  //     signup();
  //   } else if (login.formMethod === LOGIN_METHOD) {
  //     loginUser(formInfo);
  //   } else if (login.formMethod === UPDATE_METHOD) {
  //     update();
  //   }

  // }, [login, formInfo]);

  useEffect(function loading(){
    setIsLoading(false);
    console.log("check loading", isLoading);
  },[currentUser])

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
      <BrowserRouter>
        <UserContext.Provider value={currentUser}>
          <Navbar currentUser={currentUser} token={JoblyApi.token} logout={logout} />
          <Routes handleSave={save} token={JoblyApi.token} error={error} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;


