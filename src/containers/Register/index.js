import { connect } from 'react-redux';

import Register from 'components/Register';

import { submitRegister, initRegister } from 'store/actionMiddleware';

const mapStateToProps = state => ({
  addressError: state.user.addressError,
  isRegistered: state.user.isRegistered,
  alert: state.utils.alert,
});

const mapDispatchToProps = dispatch => ({
  submitRegister: (data, role) => {
    dispatch(submitRegister(data, role));
  },
  initRegister: () => {
    dispatch(initRegister());
  },
});

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);

export default RegisterContainer;
