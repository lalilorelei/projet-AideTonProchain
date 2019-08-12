import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import ProfilHeader from 'components/Profil/ProfilHeader';
import BeneficiaryProfilUpdate from './BeneficiaryProfilUpdate';
import DonorProfilUpdate from './DonorProfilUpdate';
import ShopkeeperProfilUpdate from './ShopkeeperProfilUpdate';
import Error403 from 'components/Error403';
import Nav from 'containers/Nav';

import './profilUpdate.scss';
import '../Profil/profil.scss';

const ProfilUpdate = ({
  currentUser,
  role,
  updateProfile,
  token,
  profileUpdated,
  initProfileUpdate,
}) => {
  document.title = `Editer mon profil - Aide ton prochain`;
  initProfileUpdate();
  console.log('cpu', profileUpdated);
  if (currentUser.user !== undefined) {
    return (
      <>
        {profileUpdated && (
          <Redirect
            to={{
              pathname: '/profil',
              state: {
                profileUpdatedConfirmMessage: {
                  type: 'success',
                  message: 'Profil mis à jour !',
                },
              },
            }}
          />
        )}
        <Nav theme="light" />
        <div className="container mt-5 edit-profile-container profile-update-container">
          <div className="row">
            <div className="col col-md-10 col-lg-8 mx-auto bg-white py-md-medium">
              <div className="row">
                <div className="col px-md-large">
                  <ProfilHeader role={role} user={currentUser} update={true} />
                  {role === 'beneficiary' && (
                    <BeneficiaryProfilUpdate
                      currentUser={currentUser}
                      role={role}
                      updateProfile={updateProfile}
                      token={token}
                    />
                  )}
                  {role === 'shopkeeper' && (
                    <ShopkeeperProfilUpdate
                      currentUser={currentUser}
                      role={role}
                      updateProfile={updateProfile}
                      token={token}
                    />
                  )}
                  {role === 'donor' && (
                    <DonorProfilUpdate
                      currentUser={currentUser}
                      role={role}
                      updateProfile={updateProfile}
                      token={token}
                    />
                  )}
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

ProfilUpdate.propTypes = {
  currentUser: PropTypes.object.isRequired,
  role: PropTypes.string.isRequired,
};

export default ProfilUpdate;
