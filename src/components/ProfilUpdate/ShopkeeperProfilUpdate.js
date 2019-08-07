import React from 'react';

import Input from 'components/Input';
import './profilUpdate.scss';

const ShopkeeperProfilUpdate = () => {
  return (
    <>
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
            <form className="mb-4">
              <Input
                type="username"
                className="form-control"
                id="username"
                label="Nom d'utilisateur"
                placeholder="Nom d'utilisateur"
              />
              <Input
                type="text"
                className="form-control"
                id="shopname"
                label="Nom de l'entreprise"
                placeholder="Nom de l'entreprise"
              />
              <Input
                type="text"
                label="L'adresse de votre commerce"
                className="form-control"
                id="address"
                placeholder="Adresse"
              />
              <Input
                type="number"
                label="Code postal"
                className="form-control"
                id="zipcode"
                placeholder="Code postal"
              />
              <Input type="text" label="Ville" className="form-control" id="city" placeholder="Ville" />
              <Input
                type="openingdays"
                label="Jours d'ouverture de votre commerce"
                className="form-control"
                id="openingdays"
                placeholder="Jours d'ouverture"
              />
              <Input
                type="openinghours"
                label="Horaires d'ouverture de votre commerce"
                className="form-control"
                id="openingHours"
                placeholder="Horaires d'ouverture"
              />
              <Input
                type="number"
                label="Votre numéro de téléphone"
                className="form-control"
                id="phonenumber"
                placeholder="Numéro de téléphone"
              />
              <Input
                type="email"
                label="Adresse email"
                name="email"
                id="email"
                placeholder="ex: jean-dupont@mail.com"
                className="form-control"
              />
              <Input
                type="text"
                label="Site internet"
                className="form-control"
                id="website"
                placeholder="Entrez votre site internet"
              />
              <Input
                type="password"
                label="Nouveau mot de passe"
                className="form-control"
                id="password"
                placeholder="Nouveau mot de passe"
              />
              <Input
                type="password"
                label="Mot de passe"
                className="form-control"
                id="password"
                placeholder="Confirmer le nouveau mot de passe"
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
