import React from 'react';

import Header from 'components/Header';
import backgroundDonations from 'assets/img/donations.jpg';
import './donations.scss';

const DetailDonation = ({ role }) => {
  let title = '';
  role = 'shopkeeper';
  switch (role) {
    case 'beneficiary':
      title = "Détails d'une donation envoyée";
      break;
    case 'donor':
      title = "Détails d'une donation reçue";
      break;
    case 'shopkeeper':
      title = "Détails d'une transaction";
      break;
    default:
      title = 'Liste des dons';
  }
  return (
    <>
      <Header title={title} backgroundImage={backgroundDonations} />
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col col-lg-8">
            <p>{role} :</p>
            <div className="card my-5 donation">
              <div className="card-header">
                Donation <b>(donation._id)</b>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-baseline">
                  <div className="donation-metas">
                    <p className="mb-0">
                      {role == 'donor' && <>Pour (beneficiary.username)</>}
                      {role == 'beneficiary' && <>De la part de (donor.username)</>}
                      {role == 'shopkeeper' && <>De (donor.username) à (beneficiary.username)</>}
                    </p>
                    <a href="#">(shop.name)</a> - (shop.distance) km
                  </div>
                  <span className="text-center text-danger">Expirée</span>
                </div>
                <p className="card-text mt-3">
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
export default DetailDonation;
