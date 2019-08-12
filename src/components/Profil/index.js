import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Donor from './Donor';
import Beneficiary from './Beneficiary';
import Shopkeeper from 'containers/Profil/shopkeeperDetails';
import Error403 from 'components/Error403';
import ProfilHeader from 'components/Profil/ProfilHeader';
import Nav from 'containers/Nav';

import './profil.scss';

class Profil extends React.Component {
  state = {};
  componentDidMount() {
    document.title = `Mon profil - Aide ton prochain`;
  }

  render() {
    let profileUpdatedConfirmMessage = undefined;
    if (this.props.location.state) {
      profileUpdatedConfirmMessage = this.props.location.state.profileUpdatedConfirmMessage;
    }

    const { currentUser, role } = this.props;
    if (currentUser.user !== undefined) {
      console.log(currentUser);
      return (
        <>
          <Nav theme="light" />
          <div className="container mt-5 edit-profile-container profile-view-container">
            <div className="row">
              <div className="col col-md-10 col-lg-8 mx-auto bg-white py-medium">
                <div className="row">
                  <div className="col px-md-large">
                    <ProfilHeader
                      title={`${currentUser.user.username} (${role})`}
                      user={currentUser}
                      update={false}
                      role={role}
                    />
                    {profileUpdatedConfirmMessage !== undefined && (
                      <div className={`alert alert-${profileUpdatedConfirmMessage.type}`}>
                        {profileUpdatedConfirmMessage.message}
                        {profileUpdatedConfirmMessage.link && (
                          <a href={profileUpdatedConfirmMessage.link.url} className="alert-link">
                            {' ' + profileUpdatedConfirmMessage.link.label}
                          </a>
                        )}
                      </div>
                    )}
                    {role === 'beneficiary' && (
                      <Beneficiary currentUser={currentUser} role={role} />
                    )}
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
  }
}

Profil.propTypes = {
  currentUser: PropTypes.object.isRequired,
  role: PropTypes.string.isRequired,
};

export default withRouter(Profil);
