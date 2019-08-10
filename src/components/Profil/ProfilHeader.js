import React from 'react';
import { Link } from 'react-router-dom';

import Nav from 'containers/Nav';

const ProfilHeader = ({ title, user }) => {
  console.log(user.user);

  return (
    <header>
      <Nav theme="light" />
      <div className="profile-header container mt-4 py-5">
        <div className="row">
          <div className="col-sm-12 col-md-4 d-flex justify-content-center profile-avatar">
            <img
              src={`http://aider-son-prochain.fr/projet-AideTonProchain-back/${user.user.avatar}`}
              alt={title}
            />
          </div>
          <div className="col-sm-12 col-md-8 d-flex flex-column profile-bio justify-content-start">
            <div className="d-flex align-items-center">
              <h1 className="d-inline mb-0 mr-3">{title}</h1>
              <Link exact="true" to="/profil-update" className="btn btn-sm btn-primary">
                Editer mon profil
              </Link>
            </div>
            <p className="bio mt-3">
              {user.role === 'beneficiary' || user.role === 'donor' ? (
                <>{user.about}</>
              ) : user.role === 'shopkeeper' ? (
                <>{user.shop.about}</>
              ) : null}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfilHeader;
