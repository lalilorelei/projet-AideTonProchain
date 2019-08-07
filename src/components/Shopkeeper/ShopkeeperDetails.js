import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'components/Header';
import ProductSelector from './ProductSelector';
import BlocCoordonneesHoraires from './BlocCoordonneesHoraires';
import './shopkeeper.scss';
import shopKeeperBackgroundImage from 'assets/img/background-shopkeepers.jpg';
import { getTempProducts, getTempShopDetails } from 'utils/shopkeeperUtils';

class ShopkeeperDetails extends Component {
  componentDidMount() {
    const { role } = this.props;
    const { currentUser } = this.props;
    const shopkeeperId = this.props.match.params.id;
    getTempShopDetails(this, role, currentUser, shopkeeperId);
    getTempProducts(this, shopkeeperId);
  }

  render() {
    const { role } = this.props;
    let { products, shop } = '';
    if (this.state && this.state.products && this.state.shop) {
      products = this.state.products;
      shop = this.state.shop;
    }
    return (
      <>
        <Header
          title="Le café des amigos"
          backgroundImage={shopKeeperBackgroundImage}
          theme="dark"
        />
        <div className="container mt-4 py-5">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-8">
              {products &&
                shop &&
                (role === 'beneficiary' || role === 'shopkeeper' || role === 'donor') && (
                  <ProductSelector
                    products={products}
                    //submitProductSelector={submitProductSelector}
                    role={role}
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
