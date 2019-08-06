import { connect } from 'react-redux';

import Nav from 'components/Nav';

import { deconnexion } from 'store/actionMiddleware';

import { decodedToken } from 'utils';

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  role: decodedToken(state.user.currentUser.token),
});

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
