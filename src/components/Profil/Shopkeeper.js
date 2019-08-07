import React from 'react';
import axios from 'axios';

import ProductSelector from 'components/Shopkeeper/ProductSelector';

class Shopkeeper extends React.Component {
  getProducts = shopkeeperId => {
    axios
      .get(`http://95.142.175.77:3000/api/product/${shopkeeperId}`)
      .then(response => {
        this.setState({
          products: response.data.products,
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  getProfile = currentUser => {
    axios
      .get(`http://95.142.175.77:3000/api/shopkeeper/profil/`, {
        headers: { Authorization: `Bearer ${currentUser.token}` },
      })
      .then(response => {
        this.setState({
          shop: response.data.user,
        });
      })
      .catch(e => {
        console.log('erreur shop', e);
      });
  };

  deleteProduct = (currentUser, productId) => {
    axios
      .delete(`http://95.142.175.77:3000/api/product/delete/${productId}`, {
        headers: { Authorization: `Bearer ${currentUser.token}` },
      })
      .then(response => {
        console.log(response);
        this.getProducts(currentUser.user._id);
      })
      .catch(e => {
        console.log('Impossible de supprimer le produit', e);
        this.getProducts(currentUser._id);
      });
  };

  componentDidMount() {
    const { currentUser } = this.props;
    const shopkeeperId = currentUser.user._id;
    this.getProducts(shopkeeperId);
    this.getProfile(currentUser);
  }
  render() {
    const { currentUser } = this.props;
    let { products, shop } = '';
    const { role } = this.props;

    if (this.state) {
      products = this.state.products;
      shop = this.state.shop;
    }
    const date = new Date();

    const clickDeleteProduct = evt => {
      evt.preventDefault();
      const productId = evt.target.dataset.id;
      console.log(productId);
      this.deleteProduct(currentUser, productId);
    };

    console.log('shop', shop);

    return (
      <>
        <div className="container mt-4 py-5">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-8">
              {products && this.state && (role === 'shopkeeper' || role === 'donor') && (
                <>
                  <ProductSelector
                    products={products}
                    //submitProductSelector={submitProductSelector}
                    role={role}
                    clickDeleteProduct={clickDeleteProduct}
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
