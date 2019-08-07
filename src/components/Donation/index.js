import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import './donations.scss';
import backgroundDonations from 'assets/img/donations.jpg';
import { getDonationData } from 'utils/donationUtils';

const Donations = ({ currentUser, role, donations }) => {
  role = 'donor';
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
          <div className="col col-md-6">
            {donations.map(donation => {
              const donationAdditionalData = getDonationData(donation);

              if (true) {
                return (
                  <div className="card mb-4 donation">
                    <div
                      data-toggle="collapse"
                      data-target={`#collapseDonation-${donation.donation._id}`}
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      className="card-header d-flex justify-content-between align-items-baseline"
                    >
                      <div>
                        {role === 'donor' || role === 'beneficiary' ? 'Donation ' : 'Transaction '}
                        {donationAdditionalData.donationDisplayRef}
                        <div className="text-small text-muted">
                          Date : {donationAdditionalData.donationDate}
                        </div>
                      </div>
                      {donationAdditionalData.used === false ? (
                        <span className="text-success">Disponible</span>
                      ) : (
                        <span className="text-info">Consommée</span>
                      )}
                    </div>
                    <div
                      className="card-body text-center collapse"
                      id={`collapseDonation-${donation.donation._id}`}
                    >
                      <div className="d-md-flex align-items-baseline">
                        <div className="donation-metas">
                          <div className="my-3 text-center text-muted">
                            {role === 'donor' && (
                              <>
                                <span>Votre donation pour</span>
                                <h5 className="text-dark">{donation.beneficiary.username}</h5>
                              </>
                            )}
                            {role === 'beneficiary' && (
                              <>
                                De la part de{' '}
                                <h5 className="text-dark">{donation.donation.donor.username}</h5>
                              </>
                            )}
                            {role === 'shopkeeper' && (
                              <>
                                De {donation.donation.donor.username} à{' '}
                                {donation.beneficiary.username}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <table className="recap my-3 text-left">
                        <tbody>
                          {donation.donation.products.map(product => {
                            return (
                              <tr>
                                <td
                                  className="product-item"
                                  className={role === 'beneficiary' ? 'text-center' : ''}
                                >
                                  1 {product.name}
                                </td>
                                <td className="text-right">
                                  {role !== 'beneficiary' && <span>{product.price}€</span>}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                        {role !== 'beneficiary' && (
                          <tfoot>
                            <tr>
                              <td>
                                <b>Total</b>
                              </td>
                              <td className="text-right">
                                {donationAdditionalData.sumOfProducts}€
                              </td>
                            </tr>
                          </tfoot>
                        )}
                      </table>
                      <div>
                        <span className="text-muted text-small">
                          {donationAdditionalData.used === true ? (
                            role === 'beneficiary' || role === 'donor' ? (
                              <>
                                Consommée le 17/07/2019
                                <br /> chez
                                <a href="#"> {donation.donation.shopkeeper.shopkeeper_name}</a>
                              </>
                            ) : role === 'shopkeeper' ? (
                              <>Consommée le 17/08/2019</>
                            ) : null
                          ) : role === 'beneficiary' || role === 'donor' ? (
                            <>
                              Disponible chez <br />
                              <a href="#"> {donation.donation.shopkeeper.shopkeeper_name}</a>
                            </>
                          ) : role === 'shopkeeper' ? (
                            <a href="#" className="btn btn-primary mb-3 text-white">
                              Valider la transaction
                            </a>
                          ) : null}
                        </span>
                      </div>
                      {donationAdditionalData.used === false && role === 'beneficiary' && (
                        <div class="mt-4">
                          <span className="text-muted">Référence à rappeler :</span>
                          <h4>{donationAdditionalData.donationDisplayRef}</h4>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

Donations.propTypes = {
  currentUser: PropTypes.func.isRequired,
  role: PropTypes.func.isRequired,
  donations: PropTypes.string.isRequired
};

export default Donations;
