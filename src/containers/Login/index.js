import { connect } from 'react-redux';

import Form from '../../components/Login';
import { submitLogin, changeInput } from '../../store/reducers/sharedReducer';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  submitLogin: data => {
    dispatch(submitLogin(data));
  },
  changeInput: (target, value) => {
    dispatch(changeInput(target, value));
  },
});

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default FormContainer;
