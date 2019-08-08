import React from 'react';

import Input from 'components/Input';
import './profilUpdate.scss';

const ShopkeeperProfilUpdate = ({ currentUser }) => {
  return (
    <>
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
            <form className="mb-4">
              <label className="form-group-label" htmlFor="Nom d'utilisateur">
                Votre nom d'utilisateur
              </label>
              <Input
                type="username"
                className="form-control"
                id="username"
                placeholder="Nom d'utilisateur"
                value={currentUser.user.firstname}
              />
              <label className="form-group-label" htmlFor="Nom de l'entreprise">
                Nom de l'entreprise
              </label>
              <Input
                type="text"
                className="form-control"
                id="shopkeepername"
                placeholder="Nom de l'entreprise"
                value={currentUser.user.shopname}
              />
              <label className="form-group-label" htmlFor="Adresse de l'entreprise">
                Adresse de l'entreprise
              </label>
              <Input type="text" className="form-control" id="address" placeholder="Adresse" />

              <label className="form-group-label" htmlFor="Code postal">
                Code postal
              </label>
              <Input type="number" className="form-control" id="zipcode" placeholder="Code postal" />

              <label className="form-group-label" htmlFor="Votre ville">
                Votre ville
              </label>
              <Input type="text" className="form-control" id="city" placeholder="Ville" />

              <table>
                <tr>
                  <td />
                </tr>
              </table>

              {/*<div className="form-group">
                <Input
                  type="openingdays"
                  label="Jours d'ouverture de votre commerce"
                  className="form-control"
                  id="openingdays"
                  placeholder="Jours d'ouverture"
                />
              </div>
              <div className="form-group">
                <Input
                  type="openinghours"
                  label="Horaires d'ouverture de votre commerce"
                  className="form-control"
                  id="openingHours"
                  placeholder="Horaires d'ouverture"
                />
              </div>*/}

              <label className="form-group-label" htmlFor="Numéro de téléphone">
                Numéro de téléphone
              </label>
              <Input type="number" className="form-control" id="phonenumber" placeholder="Numéro de téléphone" />

              <label className="form-group-label" htmlFor="Votre adresse mail">
                Votre adresse mail
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="ex: jean-dupont@mail.com"
                className="form-control"
              />

              <label className="form-group-label" htmlFor="Votre nouveau mot de passe">
                Votre nouveau mot de passe
              </label>
              <Input type="password" className="form-control" id="password" placeholder="Nouveau mot de passe" />

              <label className="form-group-label" htmlFor="Confirmer votre nouveau mot de passe">
                Confirmer votre nouveau mot de passe
              </label>
              <Input
                type="password"
                className="form-control"
                id="password"
                placeholder="Confirmer votre nouveau mot de passe"
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

export default ShopkeeperProfilUpdate;
