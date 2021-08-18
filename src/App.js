import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Navbar';
import JoblyApi from "./api";
import UserContext from "./userContext";
import './App.css';
import "bootswatch/dist/flatly/bootstrap.min.css";

/** App
 * 
 * state:
 * - currentUser: object
 * - token: jwt token from backend
 * - login: object like {isLogged: boolean, method: string}
 * 
 * context:
 * - currentUser: context provider
 */
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(JoblyApi.token);
  const [login, setLogin] = useState({isLogged: false, method: ""});

  function logout() {
    setCurrentUser(null)
  }

  //need docstring cause no idea what method is
  //make consts for signin, login, update
  //so no typo and have wrong thing and help with self documenting TODO:
  function save(data, method){
    setCurrentUser(data);
    setLogin({
      isLogged: true,
      method: method
    });
  }

  //if currentuser change but not changes login --> not actually log in
  //need in dependency list but missing something help prevent infinite loop
  //better as separate methods = clearer way express what doing
  //3 diff actions
  //be consistent with css className
  //TODO: make it a named function
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


