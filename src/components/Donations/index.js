import React from 'react';

import Header from 'components/Header';
import './donations.scss';

class Donations extends React.Component {
  render() {
    return (
      <>
        <Header title="Liste des dons" />
        <div className="container mt-4 py-5">
          <div className="row justify-content-center">
            <div className="col col-lg-8 text-center">
              <h2>En cours</h2>
              <table class="table text-left">
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <p>Pour Toto le 30/07/2019</p>
                        <h3>1 café</h3>
                        <p>Café des amis</p>
                        <p>Ref: ATP-2019-41</p>
                      </div>
                    </td>
                    <td>2€</td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <p>Pour Kylian le 01/08/2019</p>
                        <h3>1 sandwich</h3>
                        <p>Café de la gare</p>
                        <p>Ref: ATP-2019-4112</p>
                      </div>
                    </td>
                    <td>5€</td>
                  </tr>
                </tbody>
              </table>
              <h2>Consommées</h2>
              <table class="table text-left">
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <p>Pour Patoche le 20/07/2019</p>
                        <h3>1 café</h3>
                        <p>Bar des amis</p>
                        <p>Ref: ATP-2019-101</p>
                      </div>
                    </td>
                    <td>2€</td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <p>Pour michel le 05/08/2019</p>
                        <h3>1 sandwich</h3>
                        <p>Café du commerce</p>
                        <p>Ref: ATP-2019-412</p>
                      </div>
                    </td>
                    <td>5€</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Donations;
