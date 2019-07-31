import { connect } from 'react-redux';

import ShopProductsSelector from '../../components/Profil';
import { submitShopProductsSelector } from '../../store/reducers/sharedReducer';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  submitContact: data => {
    dispatch(submitShopProductsSelector(data));
  },
});

const ShopProductsSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopProductsSelector);

export default ShopProductsSelectorContainer;
