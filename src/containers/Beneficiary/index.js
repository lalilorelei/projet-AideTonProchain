import { connect } from 'react-redux';

import Beneficiary from 'components/Beneficiary';

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  beneficiaries: state.beneficiary.beneficiaries,
});

const mapDispatchToProps = {};

const BeneficiaryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Beneficiary);

export default BeneficiaryContainer;
