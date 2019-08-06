import React from 'react';

import Input from 'components/Input';

const RegisterBeneficiary = ({ addressError }) => (
  <>
    <h3 className="topSectionH3 mt-5">Votre adresse</h3>
    {addressError && (
      <div className="alert alert-danger">
        L'adresse saisie n'a pas pu être reconnue, veuillez réessayer.
      </div>
    )}
    <Input
      type="text"
      label="Numéro et rue"
      name="streetAddress"
      id="streetAddress"
      placeholder="ex: 15 rue des Lilas"
      required={false}
    />
    <Input
      type="text"
      label="Code postal"
      name="postCode"
      id="postCode"
      placeholder="75008"
      required={false}
    />
    <Input type="text" label="Ville" name="city" id="city" placeholder="Paris" required={false} />
  </>
);

export default RegisterBeneficiary;
