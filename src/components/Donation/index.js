import React from 'react';

import Header from 'components/Header';
import './donations.scss';
import backgroundDonations from 'assets/img/donations.jpg';

const Donations = ({ role, donations }) => {
  return (
    <>
      <Header title="Liste des dons" theme="dark" backgroundImage={backgroundDonations} />
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col col-lg-8 text-center">
            <h2 className="text-center">En cours</h2>
            <div className="table-responsive" />
            <table class="table text-left">
              <tbody>
                {donations.map(donation => (
                  <>
                    <tr>
                      <td>Pour Toto le 26/07/2019</td>
                      <td rowspan="4" className="text-center">
                        2€
                      </td>
                    </tr>
                    <tr>
                      <td>1 café</td>
                    </tr>
                    <tr>
                      <td>Café des amis</td>
                    </tr>
                    <tr>
                      <td>Ref: ATP-2019-41</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>

            {/* <h2 className="text-center">Consommées</h2>
            <table class="table text-left">
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
