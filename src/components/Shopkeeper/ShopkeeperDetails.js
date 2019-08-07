import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'components/Header';
import ProductSelector from './ProductSelector';
import BlocCoordonneesHoraires from './BlocCoordonneesHoraires';
import './shopkeeper.scss';
import shopKeeperBackgroundImage from 'assets/img/background-shopkeepers.jpg';
import { getTempProducts, getTempShopDetails } from 'utils/shopkeeperUtils';

class ShopkeeperDetails extends Component {
  state = {
    selectedProductsTotal: 0,
    donation: {
      shopkeeper: this.props.match.params.id,
      beneficiary: 1110264,
      donor: this.props.currentUser.user._id,
      products: [],
    },
  };
  componentDidMount() {
    const { role } = this.props;
    const { currentUser } = this.props;
    const shopkeeperId = this.props.match.params.id;
    getTempShopDetails(this, role, currentUser, shopkeeperId);
    getTempProducts(this, shopkeeperId);
  }

  changeDonationTotal = evt => {
    if (evt.target.value !== '0') {
      const tempTotal = this.state.selectedProductsTotal + parseFloat(evt.target.dataset.price);
      this.setState({
        selectedProductsTotal: Math.round(tempTotal * 100) / 100,
        donation: {
          ...this.state.donation,
          products: [...this.state.donation.products, evt.target.dataset.id],
        },
      });
    } else {
      const tempTotal = this.state.selectedProductsTotal - parseFloat(evt.target.dataset.price);
      const tempProducts = this.state.donation.products;
      var index = tempProducts.indexOf(evt.target.dataset.id);
      if (index > -1) {
        tempProducts.splice(index, 1);
      }
      this.setState({
        selectedProductsTotal: Math.round(tempTotal * 100) / 100,
        donation: {
          ...this.state.donation,
          products: tempProducts,
        },
      });
    }
  };

  render() {
    console.log(this.state);
    const { role } = this.props;
    let { products, shop } = '';
    if (this.state && this.state.products && this.state.shop) {
      products = this.state.products;
      shop = this.state.shop;
    }

    return (
      <>
        {shop && (
          <Header
            title={shop.shopkeeper_name}
            backgroundImage={shopKeeperBackgroundImage}
            theme="dark"
          />
        )}
        <div className="container mt-4 py-5">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-8">
              {products &&
                shop &&
                (role === 'beneficiary' || role === 'shopkeeper' || role === 'donor') && (
                  <ProductSelector
                    products={products}
                    changeDonationTotal={this.changeDonationTotal}
                    //submitProductSelector={submitProductSelector}
                    role={role}
                    total={this.state.selectedProductsTotal}
                  />
                )}
            </div>
            <div className="col-md-12 col-lg-4">
              {shop && <BlocCoordonneesHoraires shop={shop} />}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ShopkeeperDetails);
