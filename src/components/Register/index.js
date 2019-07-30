import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'components/Header';
import Input from 'components/Forms';
import RegisterShopkeeper from './shopkeeperInputs';
import './register.scss';

const Register = props => {
  const role = props.match.params.role;
  console.log(props);
  let roleTitle = '';

  role === 'beneficiary'
    ? (roleTitle = 'bénéficiaire')
    : role === 'donor'
    ? (roleTitle = 'donateur')
    : (roleTitle = 'shopkeeper');

  return (
    <>
      <Header title={`Inscription ${roleTitle}`} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-6">
            <form>
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
              {role === 'shopkeeper' ? <RegisterShopkeeper /> : null}

              <button type="submit" className="mt-4 btn btn-custom-accent btn-block">
                Continuer
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Register);