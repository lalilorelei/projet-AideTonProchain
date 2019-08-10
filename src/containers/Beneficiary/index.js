import { connect } from 'react-redux';

import Beneficiary from 'components/Beneficiary';
import { decodedToken } from 'utils';
import { getBeneficiaries } from 'store/actionMiddleware';
import { addDistanceProperty } from 'utils/geolocationUtils';
import { compare } from 'utils';

const mapStateToProps = state => {
  const beneficiariesWithLocation = state.beneficiary.beneficiaries.filter(
    beneficiary =>
      beneficiary.localisation.latitude !== 0 &&
      beneficiary.localisation.address !== '' &&
      beneficiary.localisation.longitude !== 0,
  );

  const beneficiariesWithoutLocation = state.beneficiary.beneficiaries.filter(
    beneficiary =>
      beneficiary.localisation.latitude === 0 &&
      beneficiary.localisation.address === '' &&
      beneficiary.localisation.longitude === 0,
  );
  let beneficiariesWithDistance = '';
  if (state.beneficiary.location !== undefined) {
    beneficiariesWithDistance = addDistanceProperty(
      beneficiariesWithLocation,
      state.beneficiary.location,
    );
  }

  let beneficiariesFilteredByDistance = '';
  if (state.beneficiary.maxDist !== undefined) {
    beneficiariesFilteredByDistance = beneficiariesWithDistance
      .sort(compare)
      .filter(item => item.distance <= state.beneficiary.maxDist);
  }

  return {
    currentUser: state.user.currentUser,
    role: decodedToken(state.user.currentUser.token).role,
    token: state.user.currentUser.token,
    beneficiaries: [...beneficiariesFilteredByDistance, ...beneficiariesWithoutLocation],
  };
};

const mapDispatchToProps = dispatch => ({
  getBeneficiaries: (role, token, location, maxDist) => {
    dispatch(getBeneficiaries(role, token, location, maxDist));
  },
});

const BeneficiaryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Beneficiary);

export default BeneficiaryContainer;
