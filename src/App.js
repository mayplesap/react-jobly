import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Navbar';
import JoblyApi from "./api";
import UserContext from "./userContext";
import './App.css';
import "bootswatch/dist/flatly/bootstrap.min.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(JoblyApi.token);
  const [login, setLogin] = useState({isLogged: false, method: ""});

  function logout() {
    setCurrentUser(null)
  }

  function save(data, method){
    setCurrentUser(data);
    setLogin({
      isLogged: true,
      method: method
    });
  }

  useEffect(()=>{
    async function signup() {
      let user = await JoblyApi.register(currentUser);
      setToken(JoblyApi.token);
      setCurrentUser(user);
    }
    async function login(data) {
      let user = await JoblyApi.login(data);
      setToken(JoblyApi.token);
      setCurrentUser(user);
    }
    async function update(data){
      let user = await JoblyApi.update(data, currentUser.username);
      setCurrentUser(user);
    }

    if(login.method === "signup"){
      signup();
    } else if (login.method === "login") {
      login();
    } else if (login.method === "update") {
      update();
    }

  },[login])

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


