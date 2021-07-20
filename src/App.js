import logo from './logo.svg';
import './App.css';

import { useAuth, AdminPortal } from '@frontegg/react'

function App() {
  const { user, isAuthenticated } = useAuth();
  const handleClick = () => {
    AdminPortal.show();
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
    </div>
  );
}

export default App;
