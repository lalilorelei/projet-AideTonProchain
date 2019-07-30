import React from 'react';

import Input from 'components/Forms';

const RegisterShopkeeper = () => (
  <>
    <h3 className="topSectionH3 mt-5">Votre commerce</h3>
    <Input
      type="text"
      label="Nom de votre commerce"
      name="shopName"
      id="shopName"
      placeholder="ex: Café de la gare"
      required={true}
    />
    <div className="form-group">
      <label htmlFor="shopCategory">Catégorie de l'établissement</label>
      <select className="form-control" id="shopCategory" name="shopCategory">
        <option value="cafe">Café</option>
        <option value="restaurant">Restaurant</option>
      </select>
    </div>
    <Input
      type="text"
      label="Adresse votre commerce"
      name="shopAddress"
      id="shopAddress"
      placeholder="ex: 15 rue des Lilas 75018 Paris"
      required={true}
    />
  </>
);

export default RegisterShopkeeper;
