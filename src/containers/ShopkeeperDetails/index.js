import { connect } from 'react-redux';

import ShopkeeperDetails from 'components/Shopkeeper/ShopkeeperDetails';
import { getProducts } from 'store/reducers/product';
import { decodedToken } from 'utils';

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    role: decodedToken(state.user.currentUser.token).role,
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
