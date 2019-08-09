import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import './profilUpdate.scss';

const DonorProfilUpdate = ({ currentUser }) => {
  return (
    <>
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
            <form className="mb-4">
              <Input
                type="text"
                name="firstname"
                placeholder="votre prénom"
                className="form-control"
                value={currentUser.user.firstname}
                label="Votre prénom"
              />
              <Input
                type="text"
                name="lastname"
                className="form-control"
                placeholder="votre nom"
                value={currentUser.user.lastname}
                label="Votre nom"
              />
              <Input
                type="password"
                name="password"
                className="form-control"
                label="Votre mot de passe"
                placeholder="Nouveau mot de passe"
              />
              <button type="submit" className="mt-4 btn btn-primary btn-block">
                Confirmer
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

DonorProfilUpdate.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default DonorProfilUpdate;
