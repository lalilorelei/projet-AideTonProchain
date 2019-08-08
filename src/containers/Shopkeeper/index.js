import { connect } from 'react-redux';

import Shopkeeper from 'components/Shopkeeper';
import { decodedToken } from 'utils';
import { getShops } from 'store/actionMiddleware';

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  role: decodedToken(state.user.currentUser.token).role,
  token: state.user.currentUser.token,
  shops: state.shopkeeper.shopkeepers,
});

const mapDispatchToProps = dispatch => ({
  getShops: (role, token) => {
    dispatch(getShops(role, token));
  },
});

const ShopkeeperContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Shopkeeper);

export default ShopkeeperContainer;
