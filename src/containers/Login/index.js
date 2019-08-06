import { connect } from 'react-redux';

import Form from '../../components/Login';

import { submitLogin } from 'store/actionMiddleware';

const mapStateToProps = state => ({
  message: state.user.message,
});

const mapDispatchToProps = dispatch => ({
  submitLogin: data => {
    dispatch(submitLogin(data));
  },
});

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default FormContainer;
