import React from 'react';
import {
  Route, Switch,
  Redirect, withRouter,
} from 'react-router-dom'

import './App.scss';
import Header from '../Home/Header';
import Nav from '../Nav';
import Home from '../Home';
import Login from '../../containers/Login';

const App = () => (
  <>
    
    { /* Header & Nav */ }
    <Switch>
      {/* specific display on homepage (header 'dark') */ }
      <Route
        exact
        path="/"
        render={() => {
          return(
            <Header theme="dark"/>
          );
        }}
      />
      {/* if not homepage, display nav in light theme */ }
      <Route render={() => {
        return(
          <Nav theme="light" />
        );
      }}/>
    </Switch>



    <Switch>
      <Route
        exact
        key="/"
        path="/"
        render={() => {
          return(
           <Home />
          );
        }}
      />
      <Route
        exact
        key="/contact"
        path="/contact"
        render={() => {
          return(
            <h1>Contact</h1>
          );
        }}
      />
      <Route
        exact
        key="/login"
        path="/login"
        render={() => {
          return(
            <Login />
          );
        }}
      />
      <Route
        exact
        key="/register"
        path="/register"
        render={() => {
          return(
            <h1>Register</h1>
          );
        }}
      />
    </Switch>
  </>
);

export default App;
