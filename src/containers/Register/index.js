import { connect } from 'react-redux';

import Register from 'components/Register';

import { submitRegister } from 'store/reducers/user';

const mapStateToProps = state => ({
  addressError: state.user.addressError,
});

const mapDispatchToProps = dispatch => ({
  submitRegister: (data, role) => {
    dispatch(submitRegister(data, role));
  },
});

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);

export default RegisterContainer;
