import { connect } from 'react-redux';

import ProfilUpdate from 'components/ProfilUpdate';

import { decodedToken } from 'utils';
import { updateProfile, initProfileUpdate } from 'store/actionMiddleware';

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  role: decodedToken(state.user.currentUser.token).role,
  token: state.user.currentUser.token,
  profileUpdated: state.user.profileUpdated,
});

const mapDispatchToProps = dispatch => ({
  initProfileUpdate: () => {
    dispatch(initProfileUpdate());
  },
  updateProfile: (data, img, role, token) => {
    dispatch(updateProfile(data, img, role, token));
  },
});

const ProfilUpdateContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilUpdate);

export default ProfilUpdateContainer;
