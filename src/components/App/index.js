import React from 'react';
import {
  Route, Switch,
  Redirect, withRouter,
} from 'react-router-dom'

import './App.scss';

/* Pages */
import Home from 'components/Home';
import Contact from 'components/Contact';
import Login from 'containers/Login';

const App = () => (
  <>
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
            <Contact />
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
