import { connect } from 'react-redux';

import Shopkeeper from 'components/Shopkeeper';

const mapStateToProps = state => ({
  shops: state.shopkeeper.shopkeepers,
});

const mapDispatchToProps = dispatch => ({});

const ShopkeeperContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Shopkeeper);

export default ShopkeeperContainer;
