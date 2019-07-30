import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import './App.scss';

/* Pages */
import Home from 'components/Home';
import Contact from 'components/Contact';
import Login from 'containers/Login';
import Profil from 'components/Profil';
import Register from 'components/Register';
import ProfilUpdate from 'components/ProfilUpdate';
import Donations from 'components/Donations';
import ShopKeeper from 'components/ShopKeeper';
import DetailDonations from 'components/DetailDonations';
<<<<<<< HEAD
import Products from 'components/Products';
=======
import Localisation from 'components/Localisation';
>>>>>>> fd2b1f4a4222311221a892d3d207535b0949d67d

const App = () => (
  <>
    <Switch>
      <Route
        exact
        key="/"
        path="/"
        render={() => {
          return <Home />;
        }}
      />
      <Route
        exact
        key="/contact"
        path="/contact"
        render={() => {
          return <Contact />;
        }}
      />
      <Route
        exact
        key="/login"
        path="/login"
        render={() => {
          return <Login />;
        }}
      />
      <Route
        exact
        key="/register"
        path="/register"
        render={() => {
          return <Register />;
        }}
      />
      <Route
        exact
        key="/profil"
        path="/profil"
        render={() => {
          return <Profil />;
        }}
      />
      <Route
        exact
        key="/profil-update"
        path="/profil-update"
        render={() => {
          return <ProfilUpdate />;
        }}
      />
      <Route
        exact
        key="/donations"
        path="/donations"
        render={() => {
          return <Donations />;
        }}
      />
      <Route
        exact
        key="/shopkeeper"
        path="/shopkeeper"
        render={() => {
          return <ShopKeeper />;
        }}
      />
      <Route
        exact
        key="/donations/[id]"
        path="/donations/[id]"
        render={() => {
          return <DetailDonations />;
        }}
      />
      <Route
        exact
<<<<<<< HEAD
        key="/products"
        path="/products"
        render={() => {
          return <Products />;
=======
        key="/localisation"
        path="/localisation"
        render={() => {
          return <Localisation />;
>>>>>>> fd2b1f4a4222311221a892d3d207535b0949d67d
        }}
      />
    </Switch>
  </>
);

export default App;
