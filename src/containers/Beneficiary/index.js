import { connect } from 'react-redux';

import Beneficiary from 'components/Beneficiary';
import { decodedToken } from 'utils';
import { getBeneficiaries } from 'store/actionMiddleware';

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  role: decodedToken(state.user.currentUser.token).role,
  token: state.user.currentUser.token,
  beneficiaries: state.beneficiary.beneficiaries,
});

const mapDispatchToProps = dispatch => ({
  getBeneficiaries: (role, token) => {
    dispatch(getBeneficiaries(role, token));
  },
});

const BeneficiaryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Beneficiary);

export default BeneficiaryContainer;
