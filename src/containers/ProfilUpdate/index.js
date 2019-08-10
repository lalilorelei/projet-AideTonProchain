import { connect } from 'react-redux';

import ProfilUpdate from 'components/ProfilUpdate';

import { decodedToken } from 'utils';
import { updateProfil } from 'store/actionMiddleware';

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  role: decodedToken(state.user.currentUser.token).role,
  token: state.user.currentUser.token,
});

const mapDispatchToProps = dispatch => ({
  updateProfil: (data, role, token) => {
    dispatch(updateProfil(data, role, token));
  },
});

const ProfilUpdateContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilUpdate);

export default ProfilUpdateContainer;
