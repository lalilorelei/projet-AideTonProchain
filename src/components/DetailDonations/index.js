import React from 'react';

import Header from 'components/Header';
import './detaildonations.scss';

const DetailDonations = () => {
  return (
    <>
      <Header title="Donation ATP2019-41" />
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col col-lg-8 text-center" />

          <h4 className="text-success text-center">En cours</h4>
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
          <div>
            <p className="text-center font-weight-bold">Référence</p>
            <h2 className="text-center font-weight-bold ">ATP2019-41</h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailDonations;
