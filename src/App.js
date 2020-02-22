import React from 'react';
import { Router, Route, Switch, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import history from "./history"
import Login from "./containers/Login";
import Home from "./containers/Home";
function App() {
  return (
<Router history={history}>
	<Switch>
        	<Route path="/" exact>

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
		        <Link to="/login">  Learn React</Link>
		        </a>i
	  <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/login");
                }}
              >
                First login
              </button>
		      </header>
		    </div>
		 </Route>
            <Route path="/home">
             <Home />
         </Route>
	  <Route path="/login">
		  <Login />
	  </Route>
	</Switch>
</Router>

  );
}

export default App;
