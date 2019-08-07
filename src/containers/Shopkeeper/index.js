import { connect } from 'react-redux';

import Shopkeeper from 'components/Shopkeeper';
import { decodedToken } from 'utils';

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  role: decodedToken(state.user.currentUser.token).role,
});

const mapDispatchToProps = {};

const ShopkeeperContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Shopkeeper);

export default ShopkeeperContainer;
