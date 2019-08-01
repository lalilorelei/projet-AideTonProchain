import { connect } from 'react-redux';

import Form from '../../components/Login';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  submitLogin: data => {},
});

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default FormContainer;
