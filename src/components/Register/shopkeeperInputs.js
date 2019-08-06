import React from 'react';

import Input from 'components/Input';

const RegisterShopkeeper = ({ addressError }) => (
  <>
    <h3 className="topSectionH3 mt-5">Votre commerce</h3>
    <Input
      type="text"
      label="Nom de votre commerce"
      name="shopkeeper_name"
      id="shopkeeper_name"
      placeholder="ex: Café de la gare"
      required={true}
    />
    {addressError && (
      <div className="alert alert-danger">
        L'adresse saisie n'a pas pu être reconnue, veuillez réessayer.
      </div>
    )}
    <Input
      type="text"
      label="Numéro et rue de votre commerce"
      name="streetAddress"
      id="streetAddress"
      placeholder="ex: 15 rue des Lilas"
      required={true}
    />
    <Input
      type="text"
      label="Code postal"
      name="postCode"
      id="postCode"
      placeholder="75008"
      required={true}
    />
    <Input type="text" label="Ville" name="city" id="city" placeholder="Paris" required={true} />
    <div className="form-group">
      <label>Catégories de l'établissement</label>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Restauration"
          id="restauration"
          name="categories"
        />
        <label className="form-check-label" htmlFor="restauration">
          Restauration
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="categories"
          value="Habillement"
          id="habillement"
        />
        <label className="form-check-label" htmlFor="habillement">
          Habillement
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="categories"
          value="Hôtellerie"
          id="hotellerie"
        />
        <label className="form-check-label" htmlFor="hotellerie">
          Hôtellerie
        </label>
      </div>
    </div>
  </>
);

export default RegisterShopkeeper;
