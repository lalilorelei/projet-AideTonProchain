import { connect } from 'react-redux';

import ShopProductsSelector from '../../components/Profil';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  submitProductSelector: data => {},
});

const ShopProductsSelectorContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopProductsSelector);

export default ShopProductsSelectorContainer;
