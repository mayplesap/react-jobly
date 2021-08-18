import React, { useState, useContext } from "react";
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
  //TODO: eventually have authentication in here

  function login(data) {
    let user = JoblyApi.login(data);
    setToken(JoblyApi.token);
    setCurrentUser(user)
  }

  function logout() {
    setCurrentUser(null)
  }

  function signup(data) {
    let user = JoblyApi.register(data);
    setToken(JoblyApi.token);
    setCurrentUser(user);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar currentUser={currentUser}/>
        <Routes login={login} signup={signup}/>
      </BrowserRouter>
    </div>
  );
}

export default App;


