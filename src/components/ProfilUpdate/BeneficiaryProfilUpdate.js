import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';

const BeneficiaryProfilUpdate = ({ currentUser }) => {
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

              <Input
                type="text"
                name="localistaion"
                className="form-control"
                label="Quartier/arrondissement"
                placeholder="Quartier/Arrondissement"
              />

              <label className="form-group-label" htmlFor="bio">
                Ma biographie
              </label>
              <textarea
                className="form-control mt-3"
                name="message"
                id="bio"
                aria-label="With textarea"
                rows="5"
                placeholder="Modifier ma biographie"
              />
              <label className="form-group-label mt-3" htmlFor="need">
                Mes besoins
              </label>
              <textarea
                className="form-control mt-2"
                name="need"
                id="need"
                aria-label="With textarea"
                rows="5"
                placeholder="Modifer mes besoins"
              />
              <br />
              <Input
                type="text"
                className="form-control"
                name="place"
                label="Où me rencontrer"
                id="editmyplace"
                placeholder="Où me rencontrer"
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

BeneficiaryProfilUpdate.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default BeneficiaryProfilUpdate;
