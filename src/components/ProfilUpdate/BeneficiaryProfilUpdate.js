import React from 'react';

import Input from 'components/Input';

const BeneficiaryProfilUpdate = ({ currentUser }) => {
  return (
    <>
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
            <form className="mb-4">
              <div className="form-group">
                <input
                  type="text"
                  name="firstname"
                  placeholder="votre prénom"
                  className="form-control"
                  value={currentUser.user.firstname}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastname"
                  className="form-control"
                  placeholder="votre nom"
                  value={currentUser.user.lastname}
                />
              </div>
              <div className="form-group">
                <input type="password" name="password" className="form-control" placeholder="Nouveau mot de passe" />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password_confirm"
                  className="form-control"
                  id="password"
                  placeholder="Confirmer le nouveau mot de passe"
                />
              </div>

              <Input
                type="text"
                label="Quartier/Arrondissement"
                className="form-control"
                id="city"
                placeholder="Quartier/Arrondissement"
              />

              <Input type="text" label="Ville" className="form-control" id="city" placeholder="Ville" />

              <Input
                type="number"
                label="Votre numéro de téléphone"
                className="form-control"
                id="phonenumber"
                placeholder="Numéro de téléphone"
              />
              <Input
                type="text"
                label="Modifier mon histoire"
                className="form-control"
                id="editmystory"
                placeholder="Modifier mon histoire"
              />
              <Input
                type="text"
                className="form-control"
                id="editmyplace"
                label="Modifier où me rencontrer"
                placeholder="Modifier où me rencontrer"
              />
              <Input
                type="text"
                className="form-control"
                id="editneed"
                label="Modifier mes besoins"
                placeholder="Modifier mes besoins"
              />
              <button type="submit" className="mt-4 btn btn-custom-accent btn-block">
                Confirmer
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeneficiaryProfilUpdate;
