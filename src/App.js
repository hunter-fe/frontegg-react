import logo from "./logo.svg";
import "./App.css";

import { useAuth, AdminPortal, useAuthActions, useTenantsState, useAuthUser } from "@frontegg/react";

import axios from "axios";

import { api } from "@frontegg/rest-api";

function App() {
  const { logout, loadTenants } = useAuthActions();
  const { isAuthenticated } = useAuth();
  const user = useAuthUser()
  const {tenants} = useTenantsState()
  api.teams.updateUser()

  const handleTenant = () => {
    loadTenants({callback: () => console.log(tenants)});
  };


  const handleClick = () => {
    AdminPortal.show();
    handleTenant()
  };
  const getJoke = async () => {
    return axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
  };
  const handleLogout = () => {
    logout(() => {
      getJoke()
      console.log(getJoke());
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {isAuthenticated && (
        <div>
          <img src={user.profilePictureUrl} alt={user.name} />
          <span>{user.name}</span>
        </div>
      )}
      <button onClick={handleClick}>Settings</button>
      <button onClick={() => handleLogout()}>Logout</button>
      <div id="long">Hello</div>
    </div>
  );
}

export default App;
