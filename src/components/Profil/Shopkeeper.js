import React from 'react';

import ProductSelector from 'components/Shopkeeper/ProductSelector';
import { getProducts, getShopDetails, deleteProduct } from 'utils/shopkeeperUtils';

class Shopkeeper extends React.Component {
  componentDidMount() {
    const shopkeeperId = this.props.currentUser.user._id;
    getShopDetails(this, this.props.currentUser);
    getProducts(this, shopkeeperId);
  }

  clickDeleteProduct = evt => {
    const confirmDelete = window.confirm('Voulez-vous vraiement supprimer ce produit ?');
    if (confirmDelete) {
      const { currentUser } = this.props;
      const productId = evt.target.dataset.id;
      deleteProduct(this, currentUser, productId);
    }
  };

  render() {
    const { role } = this.props;
    let { products, shop } = '';

    if (this.state && this.state.products && this.state.shop) {
      products = this.state.products;
      shop = this.state.shop;
    }
    const date = new Date();
    // ggglyke-shopkeeper23 shop id : 5d4995862b16280cfc317f90

    return (
      <>
        <div className="container mt-4 py-5">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-8">
              {products && shop && (role === 'shopkeeper' || role === 'donor') && (
                <>
                  <ProductSelector
                    products={products}
                    role={role}
                    clickDeleteProduct={this.clickDeleteProduct}
                  />
                </>
              )}
            </div>
            <div className="col-md-12 col-lg-4">
              {shop && (
                <div className="card">
                  <div className="card-body">
                    <p className="text-small">
                      <span className="font-weight-bold">Adresse : </span>
                      <br />
                      <span>{shop.localisation.address}</span>
                      <br />
                      <a
                        href={`https://maps.google.com/?q=${shop.localisation.lat},${
                          shop.localisation.lon
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Voir sur la carte
                      </a>
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

export default Shopkeeper;
