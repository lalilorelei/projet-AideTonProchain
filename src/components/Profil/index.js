import React from 'react';

import ProfilHeader from './ProfilHeader';
import Beneficiary from './Beneficiary';
import Shopkeeper from './Shopkeeper';
import './profil.scss';

const Profil = ({ currentUser, role }) => (
  <>
    <ProfilHeader title={`${currentUser.user.username} (${role})`} user={currentUser} />
    {role === 'beneficiary' && <Beneficiary currentUser={currentUser.user} />}
    {role === 'shopkeeper' && <Shopkeeper currentUser={currentUser.user} />}
  </>
);

export default Profil;
