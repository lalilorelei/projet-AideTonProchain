import { connect } from 'react-redux';

import AddProduct from 'components/AddProduct';

import { createProduct } from 'store/actionMiddleware';

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
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
