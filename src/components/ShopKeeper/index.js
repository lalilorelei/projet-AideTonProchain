import React from 'react';

import Header from 'components/Header';
import { Link } from 'react-router-dom';
import './shopkeeper.scss';
import { FaCoffee } from 'react-icons/fa';

const ShopKeeper = () => {
  return (
    <>
      <Header title="Commerces à proximité" />
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col col-lg-8 text-center">
            <form>
              <div className="d-flex justify-content-between">
                <div className="form-check">
                  <h4>Distance</h4>
                  <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Distance</option>
                    <option value="1">1km</option>
                    <option value="2">3km</option>
                    <option value="2">5km</option>
                  </select>
                </div>
                <div className="form-check">
                  <h4>Produits</h4>
                  <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Produits</option>
                    <option value="1">Café</option>
                    <option value="2">Sandwich</option>
                  </select>
                </div>
              </div>
            </form>
            <table className="table text-left">
              <tbody>
                <tr>
                  <td>
                    <FaCoffee />
                  </td>
                  <td>
                    <div>
                      <Link exact key="123" to="/profil">
                        <h3>Café des amis</h3>
                        <p>Café - 1.2km</p>
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FaCoffee />
                  </td>
                  <td>
                    <div>
                      <Link exact key="345" to="/profil">
                        <h3>Le Balto</h3>
                        <p>Café/restaurant - 2km</p>
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FaCoffee />
                  </td>
                  <td>
                    <div>
                      <Link exact key="567" to="/profil">
                        <h3>Café du commerce</h3>
                        <p>Café/restaurant - 3.4km</p>
                      </Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FaCoffee />
                  </td>
                  <td>
                    <div>
                      <Link exact key="789" to="/profil">
                        <h3>Le barrack</h3>
                        <p>Café/restaurant - 4km</p>
                      </Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopKeeper;
