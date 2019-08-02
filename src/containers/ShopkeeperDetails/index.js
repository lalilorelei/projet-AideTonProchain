import { connect } from 'react-redux';

import ShopkeeperDetails from 'components/Shopkeeper/ShopkeeperDetails';
import { getProducts } from 'store/reducers/product';
import { decodedToken } from 'utils';

const mapStateToProps = state => {
  return {
    products: state.product.products,
    shop: state.product.shop.user,
    currentUser: state.user.currentUser,
    role: decodedToken(state.user.currentUser.token),
  };
};

const mapDispatchToProps = dispatch => ({
  getProducts: id => {
    dispatch(getProducts(id));
  },
});

const ShopkeeperDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopkeeperDetails);

export default ShopkeeperDetailsContainer;
