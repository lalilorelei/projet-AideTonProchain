import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import './donations.scss';
import backgroundDonations from 'assets/img/donations.jpg';
import { sumOfProducts } from 'utils';

const Donations = ({ role, donations }) => {
  console.log(donations);
  //role = 'shopkeeper';
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
            {donations.map(donation => {
              return (
                <div className="card my-5 donation">
                  <div className="card-header d-flex justify-content-between align-items-baseline">
                    <div>
                      <h5 className="mb-1">
                        Donation <b>{donation.donation._id}</b>
                      </h5>
                      <div className="text-muted">
                        <table className="text-small">
                          <tbody>
                            <tr>
                              <td>Effectuée : </td>
                              <td className="text-right"> {donation.donation.created_at}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {donation.donation.use_at === undefined ? (
                      <span className="text-success">Disponible</span>
                    ) : (
                      <span className="text-info">Consommée</span>
                    )}
                  </div>
                  <div className="card-body">
                    <div className="d-md-flex align-items-baseline">
                      <div className="donation-metas">
                        <p className="mb-0">
                          {role === 'donor' && <>Pour {donation.beneficiary.username}</>}
                          {role === 'beneficiary' && (
                            <>De la part de {donation.donation.donor.username}</>
                          )}
                          {role === 'shopkeeper' && (
                            <>
                              De {donation.donation.donor.username} à{' '}
                              {donation.beneficiary.username}
                            </>
                          )}
                        </p>
                        Chez <a href="#">{donation.donation.shopkeeper.shopkeeper_name}</a>
                      </div>
                    </div>
                    <p className="card-text mt-3 mb-0">
                      <b>Récapitulatif :</b>
                    </p>
                    <table className="recap">
                      <tbody>
                        {donation.donation.products.map(product => {
                          return (
                            <tr>
                              <td className="product-item">1 {product.name}</td>
                              <td>{role !== 'beneficiary' && <span>{product.price}€</span>}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                      {role !== 'beneficiary' && (
                        <tfoot>
                          <th>
                            <td>
                              <b>Total</b>
                            </td>
                          </th>
                          <th>
                            <td>{sumOfProducts(donation.donation.products)}€</td>
                          </th>
                        </tfoot>
                      )}
                    </table>
                    <p className="card-text mt-3">Référence : {donation.donation._id}</p>
                  </div>
                  {role === 'shopkeeper' && (
                    <div className="card-footer">
                      <a href="#" className="btn btn-primary">
                        Valider la transaction
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Donations;
