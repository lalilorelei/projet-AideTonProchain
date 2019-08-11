import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'components/Header';

import BeneficiaryDetails from 'components/Profil/Beneficiary';

import './beneficiary.scss';

import beneficiaryBackgroundImage from 'assets/img/background-beneficiary.jpg';

class ShopkeeperDetails extends Component {
  componentDidMount() {
    const { token, role, getBeneficiary } = this.props;
    const beneficiaryId = this.props.match.params.id;
    getBeneficiary(role, token, beneficiaryId);
  }

  render() {
    const { beneficiary, role } = this.props;
    const currentUser = {
      user: beneficiary,
    };
    console.log(currentUser);
    return (
      <>
        <Header
          title={beneficiary.username}
          backgroundImage={beneficiaryBackgroundImage}
          theme="dark"
        />
        <BeneficiaryDetails currentUser={currentUser} role={role} />
        
      </>
    );
  }
}

export default withRouter(ShopkeeperDetails);
