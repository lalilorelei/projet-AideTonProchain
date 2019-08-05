import { connect } from 'react-redux';

import Shopkeeper from 'components/Shopkeeper';
import { updateUserLocation, sendManualLocation } from 'store/reducers/user';

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  shops: state.shopkeeper.shopkeepers,
  getLocationErrorMessage: state.user.getLocationErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  sendManualLocation: address => {
    dispatch(sendManualLocation(address));
  },
  updateUserLocation: (lat, long) => {
    dispatch(updateUserLocation(lat, long));
  },
});

const ShopkeeperContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Shopkeeper);

export default ShopkeeperContainer;
