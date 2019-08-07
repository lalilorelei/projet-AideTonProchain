import React from 'react';
import PropTypes from 'prop-types';
import ProfilHeader from './ProfilHeader';
import Donor from './Donor';
import Beneficiary from './Beneficiary';
import Shopkeeper from './Shopkeeper';
import Error403 from 'components/Error403';
import './profil.scss';

const Profil = ({ currentUser, role }) => {
  if (currentUser.user !== undefined) {
    return (
      <div>
        <ProfilHeader title={`${currentUser.user.username} (${role})`} user={currentUser} />
        {role === 'beneficiary' && <Beneficiary currentUser={currentUser} />}
        {role === 'shopkeeper' && <Shopkeeper currentUser={currentUser} />}
        {role === 'donor' && <Donor currentUser={currentUser} />}
      </div>
    );
  } else {
    return <Error403 message="Vous ne pouvez pas accéder à cette page, vous n'êtes pas connectés" />;
  }
};

Profil.propTypes = {
  currentUser: PropTypes.func.isRequired,
  role: PropTypes.func.isRequired,
};

export default Profil;
