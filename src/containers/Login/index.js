import { connect } from 'react-redux';

import Login from 'components/Login';

import { submitLogin, initLogin } from 'store/actionMiddleware';

const mapStateToProps = state => {
  return {
    alert: state.utils.alert,
    isLogged: state.user.isLogged,
  };
};

const mapDispatchToProps = dispatch => ({
  submitLogin: data => {
    dispatch(submitLogin(data));
  },
  initLogin: () => {
    dispatch(initLogin());
  },
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginContainer;
