import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from './LoginPage/LoginPage';
import Toolbar from './toolbar/index';

function AboutLogin() {
  return <LoginPage/>;
}

function AboutHello() {
  return <Toolbar/>;
}

export default function App() {
  return (
    <div>
      <Toolbar/>
    </div>
);
}