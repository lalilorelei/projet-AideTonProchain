import { connect } from 'react-redux';
import { getDonations, validateDonation } from 'store/actionMiddleware';

import Donation from 'components/Donation';

import { decodedToken } from 'utils';

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  donations: state.donation.donations,
  token: state.user.currentUser.token,
  beneficiary: state.donation.beneficiary,
  role: decodedToken(state.user.currentUser.token).role,
});

const mapDispatchToProps = dispatch => ({
  getDonations: (role, token) => {
    dispatch(getDonations(role, token));
  },
  validateDonation: (role, token, donationId) => {
    dispatch(validateDonation(role, token, donationId));
  },
});

const DonationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Donation);

export default DonationContainer;
