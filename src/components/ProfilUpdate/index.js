import React from 'react';

import Header from 'components/Header';
import './profilUpdate.scss';

const ProfilUpdate = () => {
  return (
    <>
      <Header title="Modifier votre profil " />
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col col-lg-8 text-center" />
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <form className="mt-4">
              <div className="form-group">
                <input
                  type="username"
                  className="form-control"
                  id="exampleInputUserName1"
                  placeholder="Nom d'utilisateur"
                />
              </div>

              <div className="form-group mt-4">
                <div className="d-flex justify-content-between" />

                <input
                  type="shopname"
                  className="form-control"
                  id="exampleInputShopName1"
                  placeholder="Nom de l'entreprise"
                />
              </div>

              <div className="form-group mt-4">
                <div className="d-flex justify-content-between" />

                <input
                  type="address"
                  className="form-control"
                  id="exampleInputAddress1"
                  placeholder="Adresse"
                />
              </div>

              <div className="form-group mt-4">
                <div className="d-flex justify-content-between" />

                <input
                  type="zipcode"
                  className="form-control"
                  id="exampleInputZipCode1"
                  placeholder="Code postal"
                />
              </div>

              <div className="form-group mt-4">
                <div className="d-flex justify-content-between" />

                <input
                  type="city"
                  className="form-control"
                  id="exampleInputCity1"
                  placeholder="Ville"
                />
              </div>

              <div className="form-group mt-4">
                <div className="d-flex justify-content-between" />

                <input
                  type="openingdays"
                  className="form-control"
                  id="exampleInputOpeningDays1"
                  placeholder="Jours d'ouverture"
                />
              </div>

              <div className="form-group mt-4">
                <div className="d-flex justify-content-between" />

                <input
                  type="openinghours"
                  className="form-control"
                  id="exampleInputOpeningHours1"
                  placeholder="Horaires d'ouverture"
                />
              </div>

              <div className="form-group mt-4">
                <div className="d-flex justify-content-between" />

                <input
                  type="phonenumber"
                  className="form-control"
                  id="exampleInputPhoneNumber1"
                  placeholder="Numéro de téléphone"
                />
              </div>

              <div className="form-group mt-4">
                <div className="d-flex justify-content-between" />

                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Adresse e-mail"
                />
              </div>

              <div className="form-group mt-4">
                <div className="d-flex justify-content-between" />

                <input
                  type="website"
                  className="form-control"
                  id="exampleInputWebSite"
                  placeholder="Entrez votre site internet"
                />
              </div>

              <div className="form-group mt-4">
                <div className="d-flex justify-content-between" />

                <input
                  type="password"
                  className="form-control"
                  id="exampleInputNewPassword1"
                  placeholder="Nouveau mot de passe"
                />
              </div>

              <div className="form-group mt-4">
                <div className="d-flex justify-content-between" />

                <input
                  type="password"
                  className="form-control"
                  id="exampleInputConfirmPassword1"
                  placeholder="Confirmer le nouveau mot de passe"
                />
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

export default ProfilUpdate;
