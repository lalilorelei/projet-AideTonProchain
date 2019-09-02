import { connect } from 'react-redux';

import Nav from 'components/Nav';

import { deconnexion } from 'store/actionMiddleware';

import { decodedToken } from 'utils';

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    role: decodedToken(state.user.currentUser.token).role,
  };
};

const mapDispatchToProps = dispatch => ({
  deconnexion: (token, role) => {
    dispatch(deconnexion(token, role));
  },
});

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

export default NavContainer;
