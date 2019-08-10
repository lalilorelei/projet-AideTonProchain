import React from 'react';
import PropTypes from 'prop-types';
import ProfilHeader from 'components/Profil/ProfilHeader';
import BeneficiaryProfilUpdate from './BeneficiaryProfilUpdate';
import DonorProfilUpdate from './DonorProfilUpdate';
import ShopkeeperProfilUpdate from './ShopkeeperProfilUpdate';
import Error403 from 'components/Error403';

import './profilUpdate.scss';

const ProfilUpdate = ({ currentUser, role, updateProfil, token }) => {
  if (currentUser.user !== undefined) {
    return (
      <div>
        <ProfilHeader title={`${currentUser.user.username} (${role})`} user={currentUser} />
        {role === 'beneficiary' && (
          <BeneficiaryProfilUpdate
            currentUser={currentUser}
            role={role}
            updateProfil={updateProfil}
            token={token}
          />
        )}
        {role === 'shopkeeper' && (
          <ShopkeeperProfilUpdate
            currentUser={currentUser}
            role={role}
            updateProfil={updateProfil}
            token={token}
          />
        )}
        {role === 'donor' && (
          <DonorProfilUpdate
            currentUser={currentUser}
            role={role}
            updateProfil={updateProfil}
            token={token}
          />
        )}
      </div>
    );
  } else {
    return (
      <Error403 message="Vous ne pouvez pas accéder à cette page, vous n'êtes pas connectés" />
    );
  }
};

ProfilUpdate.propTypes = {
  currentUser: PropTypes.object.isRequired,
  role: PropTypes.string.isRequired,
};

export default ProfilUpdate;
