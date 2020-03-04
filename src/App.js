import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from './LoginPage/LoginPage';
import Hello from './list';

function AboutLogin() {
  return <LoginPage/>;
}

function AboutHello() {
  return <h1><Hello/></h1>;
}

export default function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">AboutLogin</Link>
          </li>
          <li>
            <Link to="/about">AboutHello</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <AboutHello />
        </Route>
        <Route path="/">
          <AboutLogin />
        </Route>
      </Switch>
    </div>
  </Router>
);
}