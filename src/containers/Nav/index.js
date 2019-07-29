import { connect } from 'react-redux';

import Nav from 'components/Nav';

const mapStateToProps = state => ({
  user: state.sharedReducer.user,
});

const mapDispatchToProps = dispatch => ({});

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

export default NavContainer;
