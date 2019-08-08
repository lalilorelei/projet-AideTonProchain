import React from 'react';

import Input from 'components/Input';

const BeneficiaryProfilUpdate = ({ currentUser }) => {
  return (
    <>
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
            <form className="mb-4">
              
                <label className="form-group-label" htmlFor="Votre pénom">
                  Votre pénom
                </label>
                <Input
                  type="text"
                  name="firstname"
                  placeholder="votre prénom"
                  className="form-control"
                  value={currentUser.user.firstname}
                />
           
                <label className="form-group-label" htmlFor="votre nom">
                  Votre nom
                </label>
                <Input
                  type="text"
                  name="lastname"
                  className="form-control"
                  placeholder="votre nom"
                  value={currentUser.user.lastname}
                />
              </div>
              <div className="form-group">
                <label className="form-group-label" htmlFor="Votre mot de passe">
                  Votre mot de passe
                </label>
                <Input type="password" name="password" className="form-control" placeholder="Nouveau mot de passe" />
              </div>
              <div className="form-group">
                <label className="form-group-label" htmlFor="Confirmer le nouveau mot de passe">
                  Confirmer le nouveau mot de passe
                </label>
                <Input
                  type="password"
                  name="password_confirm"
                  className="form-control"
                  id="password"
                  placeholder="Confirmer le nouveau mot de passe"
                />
              </div>
              <div className="form-group">
                <label className="form-group-label" htmlFor="Quartier/arrondissement">
                  Quartier/arrondissement
                </label>
                <Input type="text" className="form-control " id="neighbourhood" placeholder="Quartier/Arrondissement" />
              </div>
              <div className="form-group">
                <label className="form-group-label" htmlFor="Votre ville">
                  Ville
                </label>
                <Input type="text" className="form-control" id="city" placeholder="Ville" />
              </div>

              <div className="form-group">
                <label className="form-group-label" htmlFor="Ma biographie">
                  Ma biographie
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="bio"
                  aria-label="With textarea"
                  rows="5"
                  placeholder="Modifier ma biographie"
                />
              </div>
              <div className="form-group">
                <label className="form-group-label" htmlFor="Mes besions">
                  Mes besoins
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="need"
                  aria-label="With textarea"
                  rows="5"
                  placeholder="Modifer mes besoins"
                />
              </div>
              <div className="form-group">
                <label className="form-group-label" htmlFor="Modifier où me rencontrer">
                  Modifier où me rencontrer
                </label>
                <Input type="text" className="form-control" id="editmyplace" placeholder="Modifier où me rencontrer" />
              </div>
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
