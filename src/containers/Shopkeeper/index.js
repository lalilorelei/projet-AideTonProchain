import { connect } from 'react-redux';

import Shopkeeper from 'components/Shopkeeper';

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  shops: state.shopkeeper.shopkeepers,
});

const mapDispatchToProps = {};

const ShopkeeperContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Shopkeeper);

export default ShopkeeperContainer;
