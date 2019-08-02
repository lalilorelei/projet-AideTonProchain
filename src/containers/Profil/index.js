import { connect } from 'react-redux';

import Profil from 'components/Profil';

import { decodedToken } from 'utils';

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  role: decodedToken(state.user.currentUser.token),
});

const mapDispatchToProps = dispatch => ({});

const ProfilContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profil);

export default ProfilContainer;
