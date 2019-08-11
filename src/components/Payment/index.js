import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import './payment.scss';
import { FaUserCircle } from 'react-icons/fa';

const Payment = () => {
  return (
    <>
      <Header title="Paiement" />
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col col-lg-8 text-left">
            <p>Etablissement : Café du coin</p>
            <p className="text-left">Informations de paiement</p>
            <p>Numéro de carte</p>
            <input
              type="username"
              className="form-control mb-3"
              id="exampleInputUserName1"
              placeholder="Numéro de carte"
            />
            <p>Date d'expiration</p>
            <input
              type="username"
              className="form-control mb-4"
              id="exampleInputUserName1"
              placeholder="Mois / Année"
            />
            <p>CCV</p>
            <input
              type="username"
              className="form-control"
              id="exampleInputUserName1"
              placeholder="CCV"
            />
            <button type="button" className="btn btn-primary btn-lg btn-block mt-4">
              Payer
            </button>
            <p>Bénéficiaire</p>
            <FaUserCircle /> <p>Marcel H</p>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Récapitulatif</th>
                  <th scope="col text-right">Prix</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1 Café</th>
                  <td>1.50€</td>
                </tr>
                <tr>
                  <th scope="row">1 Sandwich classique</th>
                  <td>3€</td>
                </tr>

                <tr>
                  <th scope="row">Total</th>
                  <td>4.50€</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
