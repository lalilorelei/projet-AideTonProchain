import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Input from 'components/Input';
import { serializeFormData } from 'utils';
import './login.scss';
import loginBackgroundImage from 'assets/img/welcome.jpg';

class Login extends React.Component {
  componentDidMount() {}

  submitLoginForm = event => {
    const { submitLogin } = this.props;
    event.preventDefault();
    const jsonObject = serializeFormData(event.target);
    submitLogin(jsonObject);
  };

  render() {
    let registerConfirmMessage = undefined;
    if (this.props.location.state) {
      registerConfirmMessage = this.props.location.state.registerConfirmMessage;
    }

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
              {registerConfirmMessage && (
                <div className={`alert alert-${registerConfirmMessage.type}`}>
                  {registerConfirmMessage.message}
                  {registerConfirmMessage.link && (
                    <a href={registerConfirmMessage.link.url} className="alert-link">
                      {' ' + registerConfirmMessage.link.label}
                    </a>
                  )}
                </div>
              )}
              <form className="mt-4" onSubmit={this.submitLoginForm}>
                <Input
                  label="Adresse email ou nom d'utilisateur"
                  type="text"
                  className="form-control"
                  id="login"
                  name="login"
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
                <button type="submit" className="mt-4 btn btn-primary btn-block">
                  Se connecter
                </button>
              </form>
              {/*<div className="mt-3 d-flex justify-content-between">
              <a href="#" className="text-small">
                Mot de passe oublié ?
              </a>
              <a href="#" className="text-small">
                Inscription
              </a>
            </div>*/}
            </div>
          </div>
        </div>
        <br/>
        <Footer />
      </>
    );
  }
}

Login.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired,
};

export default withRouter(Login);
