import React, { useEffect, Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'components/Header';
import ProductSelector from './ProductSelector';
import './shopkeeper.scss';
import shopKeeperBackgroundImage from 'assets/img/background-shopkeepers.jpg';
import { FaClock, FaPhone, FaGlobeEurope } from 'react-icons/fa';

class ShopkeeperDetails extends Component {
  componentDidMount() {
    this.props.getProducts(this.props.match.params.id);
  }

  render() {
    const { products, match, getProducts, shop, currentUser, role } = this.props;
    const date = new Date();
    return (
      <>
        <Header title="Le café des amis" backgroundImage={shopKeeperBackgroundImage} theme="dark" />
        <div className="container mt-4 py-5">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-8">
              {role === 'shopkeeper' || role === 'donor' ? (
                <ProductSelector
                  products={products}
                  //submitProductSelector={submitProductSelector}
                  role={role}
                />
              ) : null}
            </div>
            <div className="col-md-12 col-lg-4">
              {shop && (
                <div className="card">
                  <div className="card-body">
                    <p className="text-small">
                      <span className="font-weight-bold">Adresse : </span>
                      <br />
                      <span>
                        {shop.localisation.address} streetNumber {shop.localisation.address} street{' '}
                        {shop.localisation.address} postCode - {shop.localisation.address} city
                      </span>
                      <br />
                      <a href="#">Voir sur la carte</a>
                    </p>

                    <span className="font-weight-bold text-small d-block mb-2">Horaires : </span>

                    <table className="mb-3 text-small">
                      <tbody>
                        <tr className={date.getDay() === 1 ? 'font-weight-bold' : null}>
                          <td>Lundi</td>
                          <td className="px-2">10:00 - 17:00</td>
                          <td>19:00 - 23:00</td>
                        </tr>
                        <tr className={date.getDay() === 2 ? 'font-weight-bold' : null}>
                          <td>Mardi</td>
                          <td className="px-2">10:00 - 17:00</td>
                          <td>19:00 - 23:00</td>
                        </tr>
                        <tr className={date.getDay() === 3 ? 'font-weight-bold' : null}>
                          <td>Mercredi</td>
                          <td className="px-2">10:00 - 17:00</td>
                          <td>19:00 - 23:00</td>
                        </tr>
                        <tr className={date.getDay() === 4 ? 'font-weight-bold' : null}>
                          <td>Jeudi</td>
                          <td className="px-2">10:00 - 17:00</td>
                          <td>19:00 - 23:00</td>
                        </tr>
                        <tr className={date.getDay() === 5 ? 'font-weight-bold' : null}>
                          <td>Vendredi</td>
                          <td className="px-2">10:00 - 17:00</td>
                          <td>19:00 - 23:00</td>
                        </tr>
                        <tr className={date.getDay() === 6 ? 'font-weight-bold' : null}>
                          <td>Samedi</td>
                          <td className="px-2">10:00 - 23:00</td>
                        </tr>
                        <tr className={date.getDay() === 7 ? 'current-day' : null}>
                          <td>Dimanche</td>
                          <td className="px-2">Fermé</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-small">
                      <span className="font-weight-bold">Téléphone : </span>
                      <br />
                      <span>shop.telephone</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ShopkeeperDetails);
