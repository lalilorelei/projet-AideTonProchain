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

  let beneficiariesToSend = '';
  let beneficiariesFilteredByDistance = '';
  let beneficiariesWithDistance = '';

  if ([...beneficiariesWithLocation, ...beneficiariesWithoutLocation].length > 0) {
    if (state.beneficiary.location !== undefined) {
      beneficiariesWithDistance = addDistanceProperty(
        beneficiariesWithLocation,
        state.beneficiary.location,
      );
    }

    if (state.beneficiary.maxDist !== undefined) {
      beneficiariesFilteredByDistance = beneficiariesWithDistance
        .sort(compare)
        .filter(item => item.distance <= state.beneficiary.maxDist);
    }

    console.log(beneficiariesFilteredByDistance);

    beneficiariesToSend =
      [...beneficiariesFilteredByDistance, ...beneficiariesWithoutLocation].length > 0
        ? [...beneficiariesFilteredByDistance, ...beneficiariesWithoutLocation]
        : false;
  } else {
    beneficiariesToSend = undefined;
  }

  console.log('sending', beneficiariesToSend);

  return {
    currentUser: state.user.currentUser,
    role: decodedToken(state.user.currentUser.token).role,
    token: state.user.currentUser.token,
    beneficiaries: beneficiariesToSend,
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
