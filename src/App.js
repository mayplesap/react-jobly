import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Navbar';
import JoblyApi from "./api";
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import "bootswatch/dist/flatly/bootstrap.min.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(JoblyApi.token);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //TODO: eventually have authentication in here

  async function login(data) {
    let user = await JoblyApi.login(data);
    setToken(JoblyApi.token);
    setCurrentUser(user)
  }

  function logout() {
    setCurrentUser(null)
  }

  function save(data){
    setCurrentUser(data);
    setIsLoggedIn(true);
  }

  useEffect(()=>{
    async function signup() {
      let user = await JoblyApi.register(currentUser);
      setToken(JoblyApi.token);
      setCurrentUser(user);
    }
    signup();

  },[isLoggedIn])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar currentUser={currentUser} logout={logout}/>
        <Routes login={login} signup={save} />
      </BrowserRouter>
    </div>
  );
}

export default App;


