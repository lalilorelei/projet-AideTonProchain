import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import './donations.scss';
import backgroundDonations from 'assets/img/donations.jpg';

const Donations = ({ role, donations }) => {
  console.log(role);
  role = 'shopkeeper';
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
            {role}
            <div className="card my-5 donation">
              <div className="card-header d-flex justify-content-between align-items-baseline">
                <div>
                  <h5 className="mb-1">
                    Donation <b>(donation._id)</b>
                  </h5>
                  <div className="text-muted">
                    <table className="text-small">
                      <tbody>
                        <tr>
                          <td>Effectuée : </td>
                          <td className="text-right"> (donation.created_at)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <span className="text-success">Disponible</span>
              </div>
              <div className="card-body">
                <div className="d-md-flex align-items-baseline">
                  <div className="donation-metas">
                    <p className="mb-0">
                      {role == 'donor' && <>Pour (beneficiary.username)</>}
                      {role == 'beneficiary' && <>De la part de (donor.username)</>}
                      {role == 'shopkeeper' && <>De (donor.username) à (beneficiary.username)</>}
                    </p>
                    <a href="#">(shop.name)</a> - (shop.distance) km
                  </div>
                </div>
                <p className="card-text mt-3 mb-0">
                  <b>Récapitulatif :</b>
                </p>
                <table className="recap">
                  <tbody>
                    <tr>
                      <td className="product-item">1 café</td>
                      <td>{role !== 'beneficiary' && <span>1€50</span>}</td>
                    </tr>
                    <tr>
                      <td className="product-item">1 très long café</td>
                      <td>{role !== 'beneficiary' && <span>1€50</span>}</td>
                    </tr>
                  </tbody>
                  {role !== 'beneficiary' && (
                    <tfoot>
                      <th>
                        <td>
                          <b>Total</b>
                        </td>
                      </th>
                      <th>
                        <td>(total)</td>
                      </th>
                    </tfoot>
                  )}
                </table>
                <p className="card-text mt-3">Référence : (donation._id)</p>
              </div>
              {role === 'shopkeeper' && (
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    Valider la transaction
                  </a>
                </div>
              )}
            </div>{' '}
            {/* -- end .card */}
            <div className="card my-5 donation">
              <div className="card-header d-flex justify-content-between align-items-baseline">
                <div>
                  <h5 className="mb-1">
                    Donation <b>(donation._id)</b>
                  </h5>
                  <div className="text-muted">
                    <table className="text-small">
                      <tbody>
                        <tr>
                          <td>Effectuée : </td>
                          <td className="text-right">(donation.created_at)</td>
                        </tr>
                        <tr>
                          <td>Validée : </td>
                          <td className="text-right">(donation.validated_at)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <span className="text-info">Utilisée</span>
              </div>
              <div className="card-body">
                <div className="d-md-flex align-items-baseline">
                  <div className="donation-metas">
                    <p className="mb-0">
                      {role == 'donor' && <>Pour (beneficiary.username)</>}
                      {role == 'beneficiary' && <>De la part de (donor.username)</>}
                      {role == 'shopkeeper' && <>De (donor.username) à (beneficiary.username)</>}
                    </p>
                    <a href="#">(shop.name)</a> - (shop.distance) km
                  </div>
                </div>
                <p className="card-text mt-3 mb-0">
                  <b>Récapitulatif :</b>
                </p>
                <table className="recap">
                  <tbody>
                    <tr>
                      <td className="product-item">1 café</td>
                      <td>{role !== 'beneficiary' && <span>1€50</span>}</td>
                    </tr>
                    <tr>
                      <td className="product-item">1 très long café</td>
                      <td>{role !== 'beneficiary' && <span>1€50</span>}</td>
                    </tr>
                  </tbody>
                  {role !== 'beneficiary' && (
                    <tfoot>
                      <th>
                        <td>
                          <b>Total</b>
                        </td>
                      </th>
                      <th>
                        <td>(total)</td>
                      </th>
                    </tfoot>
                  )}
                </table>
                <p className="card-text mt-3">Référence : (donation._id)</p>
              </div>
              {role === 'shopkeeper' && (
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    Valider la transaction
                  </a>
                </div>
              )}
            </div>{' '}
            {/* -- end .card */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Donations;
