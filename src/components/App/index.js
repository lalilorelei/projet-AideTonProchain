import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import './App.scss';

/* Pages */
import Home from 'components/Home';
import Contact from 'containers/Contact';
import Login from 'containers/Login';
import Profil from 'components/Profil';
import Register from 'containers/Register';
import ProfilUpdate from 'components/ProfilUpdate';
import Donations from 'components/Donations';
import ShopKeeper from 'components/ShopKeeper';
import DetailDonations from 'components/DetailDonations';
import Products from 'components/Products';
import Localisation from 'components/Localisation';
import Payment from 'components/Payment';
import ShopKeeperDetails from 'components/ShopKeeperDetails';

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
        path="/register/:role(donor|beneficiary|shopkeeper)"
        component={Register}
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
        key="/products"
        path="/products"
        render={() => {
          return <Products />;
        }}
      />

      <Route
        exact
        key="/localisation"
        path="/localisation"
        render={() => {
          return <Localisation />;
        }}
      />
      <Route
        exact
        key="/payment"
        path="/payment"
        render={() => {
          return <Payment />;
        }}
      />
      <Route
        exact
        key="/shopkeeper-details"
        path="/shopkeeper-details"
        render={() => {
          return <ShopKeeperDetails />;
        }}
      />
      <Route
        render={() => {
          return <h1>Erreur 404</h1>;
        }}
      />
    </Switch>
  </>
);

export default App;
