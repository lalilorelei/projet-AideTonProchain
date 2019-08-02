import { connect } from 'react-redux';

import Donation from 'components/Donation';

import { decodedToken } from 'utils';

const mapStateToProps = state => ({
  donations: state.donation.donations,
  role: decodedToken(state.user.currentUser.token),
});

const mapDispatchToProps = dispatch => ({});

const DonationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Donation);

export default DonationContainer;
