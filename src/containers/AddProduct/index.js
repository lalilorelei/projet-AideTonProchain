import { connect } from 'react-redux';

import AddProduct from 'components/AddProduct';

import { createProduct } from 'store/actionMiddleware';

import { decodedToken } from 'utils';

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  role: decodedToken(state.user.currentUser.token).role,
  token: state.user.currentUser.token,
  productAddedConfirmMessage: state.product.productAddedConfirmMessage,
});

const mapDispatchToProps = dispatch => ({
  submitAddProductForm: (data, token) => {
    dispatch(createProduct(data, token));
  },
});

const AddProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProduct);

export default AddProductContainer;
