import React, { useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Input from 'components/Input';
import RegisterShopkeeper from './shopkeeperInputs';
import RegisterBeneficiary from './beneficiaryInputs';
import { serializeFormData } from 'utils';
import './register.scss';
import registerBackgroundImage from 'assets/img/welcome.jpg';

const Register = props => {
  const { initRegister, submitRegister, isRegistered } = props;
  initRegister();
  const role = props.match.params.role;

  let roleTitle = '';

  const [addressError, setAddressError] = useState(false);

  const submitRegisterForm = event => {
    event.preventDefault();

    let localisation = { lat: '', lon: '', address: '' };
    const jsonObject = serializeFormData(event.target);

    const { streetAddress, postCode, city } = event.target;
    if (
      streetAddress &&
      postCode &&
      city &&
      streetAddress.value !== '' &&
      postCode.value !== '' &&
      city.value !== ''
    ) {
      /* 1 - Je récupère les données de l'adresse entrée */
      const stringAddress = streetAddress.value + ' ' + postCode.value + ' ' + city.value;

      // setShopkeeperLocalisation(false);
      /* 2 - Je teste l'adresse en geocoding */
      axios
        .get(
          `https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=${stringAddress}&limit=1`,
        )
        .then(response => {
          if (response.data[0] !== undefined) {
            const { lat, lon } = response.data[0];
            localisation = {
              lat,
              lon,
              address: stringAddress,
            };
            if (typeof jsonObject.categories !== 'object') {
              jsonObject.categories = [jsonObject.categories];
            }
            delete jsonObject.city;
            delete jsonObject.streetAddress;
            delete jsonObject.postCode;
            jsonObject.description = '';
            jsonObject.localisation = localisation;
            submitRegister(jsonObject, role);
          } else {
            console.log("erreur dans l'adresse, à gérer");
            setAddressError(true);
          }
        })
        .catch(e => {
          console.log(e.message);
          setAddressError(true);
        });
    } else {
      submitRegister(jsonObject, role);
    }
  };

  role === 'beneficiary'
    ? (roleTitle = 'bénéficiaire')
    : role === 'donor'
    ? (roleTitle = 'donateur')
    : (roleTitle = 'commerçant');

  document.title = `Inscription ${roleTitle} - Aide ton prochain`;

  return (
    <>
      {isRegistered && (
        <Redirect
          to={{
            pathname: '/login',
            state: {
              registerConfirmMessage: {
                type: 'success',
                message:
                  'Inscription validée, bienvenue parmi nous. Vous pouvez à présent vous connecter.',
              },
            },
          }}
        />
      )}
      <Header
        title="Bienvenue chez vous !"
        subtitle={`Inscription ${roleTitle}`}
        theme="dark"
        backgroundImage={registerBackgroundImage}
      />

      <div className="container register">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-6">
            <form onSubmit={submitRegisterForm}>
              <h3>Vos identifiants</h3>
              <Input
                type="text"
                label="Nom d'utilisateur"
                name="username"
                id="username"
                placeholder="ex: Tintin72"
                required={true}
              />
              <Input
                type="email"
                label="Adresse email"
                name="email"
                id="email"
                placeholder="mon-mail@service.com"
                required={role !== 'beneficiary' ? true : false}
              />
              <Input
                type="password"
                label="Mot de passe"
                name="password"
                id="password"
                required={true}
              />
              <h3 className="topSectionH3 mt-5">Votre profil</h3>
              <Input
                type="text"
                label="Prénom"
                name="firstname"
                id="firstname"
                placeholder="ex: Pierre"
                required={false}
              />
              <Input
                type="text"
                label="Nom"
                name="lastname"
                id="lastname"
                placeholder="ex: Dubois"
                required={false}
              />
              {role === 'shopkeeper' ? <RegisterShopkeeper addressError={addressError} /> : null}
              {role === 'beneficiary' ? <RegisterBeneficiary addressError={addressError} /> : null}

              <button type="submit" className="mt-4 btn btn-primary btn-block">
                Continuer
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

Register.propTypes = {
  submitRegister: PropTypes.func.isRequired,
  message: PropTypes.object,
};

export default withRouter(Register);
