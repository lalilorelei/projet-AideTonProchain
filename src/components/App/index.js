import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

/* Pages */
/* Components */
import Home from 'components/Home';
import ProfilUpdate from 'components/ProfilUpdate';
import Localisation from 'components/Localisation';
import Payment from 'components/Payment';
import Error404 from 'components/Error404';

/* Containers */
import Contact from 'containers/Contact';
import Login from 'containers/Login';
import Register from 'containers/Register';
import AddProduct from 'containers/Shopkeeper/addProduct';
import Profil from 'containers/Profil';
import Beneficiary from 'containers/Beneficiary';
import Shopkeeper from 'containers/Shopkeeper';
import ShopkeeperDetails from 'containers/ShopkeeperDetails';
import Donations from 'containers/Donation';

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
      <Route exact key="/register" path="/register/:role(donor|beneficiary|shopkeeper)" component={Register} />
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
          return <Shopkeeper />;
        }}
      />
      <Route
        exact
        key="/beneficiary"
        path="/beneficiary"
        render={() => {
          return <Beneficiary />;
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
        key="/shopkeeper/:id"
        path="/shopkeeper/:id"
        render={() => {
          return <ShopkeeperDetails />;
        }}
      />
      <Route
        exact
        key="/add-product"
        path="/add-product"
        render={() => {
          return <AddProduct />;
        }}
      />
      <Route
        render={() => {
          return <Error404 />;
        }}
        status={404}
      />
    </Switch>
  </>
);

export default App;
