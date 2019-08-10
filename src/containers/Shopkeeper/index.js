import { connect } from 'react-redux';

import Shopkeeper from 'components/Shopkeeper';
import { decodedToken } from 'utils';
import { getShops } from 'store/actionMiddleware';
import { addDistanceProperty } from 'utils/geolocationUtils';
import { compare } from 'utils';

const mapStateToProps = state => {
  const shops = state.shopkeeper.shopkeepers;
  let shopsToSend = '';
  if (shops.length > 0) {
    let shopsWithDistance = '';
    if (state.shopkeeper.location !== undefined) {
      shopsWithDistance = addDistanceProperty(shops, state.shopkeeper.location);
    }

    let shopsFilteredByDistance = '';
    if (state.shopkeeper.maxDist !== undefined) {
      shopsFilteredByDistance = shopsWithDistance
        .sort(compare)
        .filter(item => item.distance <= state.shopkeeper.maxDist);
    }
    shopsToSend = shopsFilteredByDistance.length > 0 ? shopsFilteredByDistance : false;
  } else {
    shopsToSend = undefined;
  }

  return {
    currentUser: state.user.currentUser,
    role: decodedToken(state.user.currentUser.token).role,
    token: state.user.currentUser.token,
    shops: shopsToSend,
  };
};

const mapDispatchToProps = dispatch => ({
  getShops: (role, token, location, maxDist) => {
    dispatch(getShops(role, token, location, maxDist));
  },
});

const ShopkeeperContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Shopkeeper);

export default ShopkeeperContainer;
