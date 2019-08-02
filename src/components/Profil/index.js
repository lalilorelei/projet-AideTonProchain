import React from 'react';

import ProfilHeader from './ProfilHeader';
import Beneficiary from './Beneficiary';
import Shopkeeper from './Shopkeeper';
import './profil.scss';

const Profil = ({ currentUser, role }) => {
  console.log(role);
  if (role !== 'null') {
    return (
      <div>
        <ProfilHeader title={`${currentUser.user.username} (${role})`} user={currentUser} />
        {role === 'beneficiary' && <Beneficiary currentUser={currentUser} />}
        {role === 'shopkeeper' && <Shopkeeper currentUser={currentUser} />}
      </div>
    );
  } else {
    return <div>ERROR</div>;
  }
};

export default Profil;
