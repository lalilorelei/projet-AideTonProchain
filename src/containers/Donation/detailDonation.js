import { connect } from 'react-redux';

import DetailDonation from 'components/Donation/DetailDonation';

import { decodedToken } from 'utils';

const mapStateToProps = state => ({
  //donations: state.donation.donations,
  role: decodedToken(state.user.currentUser.token),
});

const mapDispatchToProps = dispatch => ({});

const DetailDonationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailDonation);

export default DetailDonationContainer;
