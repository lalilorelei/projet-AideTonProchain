import React from 'react';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import Input from 'components/Input';
import { serializeFormData } from 'utils';
import './login.scss';
import loginBackgroundImage from 'assets/img/welcome.jpg';

const Login = ({ submitLogin }) => {
  const submitLoginForm = event => {
    event.preventDefault();
    const jsonObject = serializeFormData(event.target);
    submitLogin(jsonObject);
  };

  return (
    <>
      <Header
        title="Heureux de vous revoir !"
        subtitle="Connectez-vous à votre compte"
        theme="dark"
        backgroundImage={loginBackgroundImage}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <form className="mt-4" onSubmit={submitLoginForm}>
              <Input
                label="Adresse email ou nom d'utilisateur"
                type="text"
                className="form-control"
                id="emailOrUserName"
                name="emailOrUserName"
                placeholder="ex: tintin@mail.com"
                required={true}
              />
              <Input
                label="Mot de passe"
                type="password"
                className="form-control"
                id="password"
                name="password"
                required={true}
              />
              <button type="submit" className="mt-4 btn btn-custom-accent btn-block">
                Se connecter
              </button>
            </form>
            <div className="mt-3 text-right">
              <a href="#" className="text-small">
                Mot de passe oublié ?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Login.propTypes = {
  submitLogin: PropTypes.func.isRequired,
};

export default Login;
