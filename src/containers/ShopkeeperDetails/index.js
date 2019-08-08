import { connect } from 'react-redux';

import ShopkeeperDetails from 'components/Shopkeeper/ShopkeeperDetails';
import { getShop, getProducts, searchBeneficiary } from 'store/actionMiddleware';
import { decodedToken } from 'utils';

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    role: decodedToken(state.user.currentUser.token).role,
    token: state.user.currentUser.token,
    shop: state.shopkeeper.shopkeeper,
    products: state.product.products,
    beneficiariesSuggests: state.donor,
  };
};

const mapDispatchToProps = dispatch => ({
  getShop: (role, token, shopkeeperId) => {
    dispatch(getShop(role, token, shopkeeperId));
  },
  getProducts: shopkeeperId => {
    dispatch(getProducts(shopkeeperId));
  },
  searchBeneficiary: textValue => {
    dispatch(searchBeneficiary(textValue));
  },
});

const ShopkeeperDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopkeeperDetails);

export default ShopkeeperDetailsContainer;
