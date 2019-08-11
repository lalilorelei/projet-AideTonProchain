import React from 'react';
import PropTypes from 'prop-types';

import Donor from './Donor';
import Beneficiary from './Beneficiary';
import Shopkeeper from 'containers/Profil/shopkeeperDetails';
import Error403 from 'components/Error403';
import ProfilHeaderCss from 'components/Profil/ProfilHeaderCss';
import Nav from 'containers/Nav';

import './profil.scss';

const Profil = ({ currentUser, role }) => {
  if (currentUser.user !== undefined) {
    return (
      <>
        <Nav theme="light" />
        <div className="container mt-5 edit-profile-container profile-view-container">
          <div className="row">
            <div className="col col-md-10 col-lg-8 mx-auto bg-white py-medium">
              <div className="row">
                <div className="col px-md-large">
                  <ProfilHeaderCss
                    title={`${currentUser.user.username} (${role})`}
                    user={currentUser}
                    role={role}
                  />
                  {role === 'beneficiary' && <Beneficiary currentUser={currentUser} role={role} />}
                  {role === 'shopkeeper' && <Shopkeeper currentUser={currentUser} role={role} />}
                  {role === 'donor' && <Donor currentUser={currentUser} role={role} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <Error403 message="Vous ne pouvez pas accéder à cette page, vous n'êtes pas connectés" />
    );
  }
};

Profil.propTypes = {
  currentUser: PropTypes.object.isRequired,
  role: PropTypes.string.isRequired,
};

export default Profil;
