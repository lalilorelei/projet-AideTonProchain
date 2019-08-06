import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import './donations.scss';
import backgroundDonations from 'assets/img/donations.jpg';

const Donations = ({ role, donations }) => {
  console.log(role);
  let title = '';
  switch (role) {
    case 'beneficiary':
      title = 'Liste des dons reçus';
      break;
    case 'donor':
      title = 'Liste des dons envoyés';
      break;
    case 'shopkeeper':
      title = 'Liste des transactions';
      break;
    default:
      title = 'Liste des dons';
  }
  return (
    <>
      <Header title={title} theme="dark" backgroundImage={backgroundDonations} />
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col col-lg-8">
            <h2 className="text-center">En cours</h2>
            <p>Pour le bénéficiaire : </p>
            <div className="card my-5">
              <div className="card-header text-muted">Par (donor.username) le (donation.date)</div>
              <div className="card-body">
                <h4 className="card-title mb-0">1 café et un autre produit</h4>
                <a href="#">(shop.name)</a> - (shop.distance) km
                <p className="card-text mt-3">Référence : (donation._id)</p>
              </div>
              <Link to={`/donations/2121212`} className="stretched-link" />
              <div className="card-footer bg-transparent">
                <Link to={`/donation/2121212`}> Voir les détails... </Link>
              </div>
            </div>
            <p>Pour le doneur : </p>
            <div className="card my-5 donation">
              <div className="card-header text-muted">
                Pour (beneficiary.username) le (donation.date)
              </div>
              <div className="card-body">
                <div className="d-flex align-items-baseline">
                  <div className="donation-metas">
                    <h4 className="card-title mb-0">1 café et un autre produit</h4>
                    <a href="#">(shop.name)</a> - (shop.distance) km
                  </div>
                  <span className="donation-value text-center">3€</span>
                </div>
                <p className="card-text mt-3">Référence : (donation._id)</p>
              </div>
              <div className="card-footer bg-transparent">
                <a href="#">Voir les détails...</a>
              </div>
            </div>
            <p>Pour le commerçant : </p>
            <div className="card my-5 donation">
              <div className="card-header text-muted">
                De (donor.username) à (beneficiary.username)
              </div>
              <div className="card-body">
                <div className="d-flex align-items-baseline">
                  <div className="donation-metas">
                    <h4 className="card-title mb-0">1 café et un autre produit</h4>
                    (shop.name) - le (donation.date)
                  </div>
                  <span className="donation-value text-center">3€</span>
                </div>
                <p className="card-text mt-3">Référence : (donation._id)</p>
              </div>
              <div className="card-footer bg-transparent">
                <a href="#" className="text-success mr-3">
                  Valider
                </a>
                <a href="#">Voir les détails...</a>
              </div>
            </div>
            <h2>Consommées/expirées</h2>
            <div className="card my-5 donation expired">
              <div className="card-header text-muted">
                Pour (beneficiary.username) le (donation.date)
              </div>
              <div className="card-body">
                <div className="d-flex align-items-baseline">
                  <div className="donation-metas">
                    <h4 className="card-title mb-0">1 café et un autre produit</h4>
                    <a href="#">(shop.name)</a> - (shop.distance) km
                  </div>
                  <span className="donation-value text-center">3€</span>
                </div>
                <p className="card-text mt-3">Référence : (donation._id)</p>
              </div>
              <div className="card-footer bg-transparent">
                <a href="#">Voir les détails...</a>
              </div>
            </div>

            {/* <h2 className="text-center">Consommées</h2>
            <table className="table text-left">
              <tbody>
                <tr>
                  <td>Pour Toto le 28/07/2019</td>
                  <td rowspan="4" className="text-center">
                    2€
                  </td>
                </tr>
                <tr>
                  <td>1 sandwich</td>
                </tr>
                <tr>
                  <td>Café des amis</td>
                </tr>
                <tr>
                  <td>Ref: ATP-2019-41</td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Donations;
