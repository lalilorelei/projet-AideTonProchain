import { connect } from 'react-redux';

import Register from 'components/Register';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  submitRegister: (data, role) => {},
});

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);

export default RegisterContainer;
