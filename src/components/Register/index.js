import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'components/Header';
import Input from 'components/Forms';
import RegisterShopkeeper from './forms/registerShopkeeper';
import './register.scss';

class Register extends React.Component {
  state = {
    roleTitle: '',
    role: '',
  };

  componentDidMount = () => {
    console.log('state', this.props.location.state);
    const { roleTitle, role } = this.props.location.state;
    //console.log(roleTitle, role);
    this.setState({
      roleTitle: roleTitle,
      role: role,
    });
  };

  render() {
    const role = this.state.role;
    return (
      <>
        <Header title={`Inscription ${this.state.roleTitle}`} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-6">
              <form>
                {// if no role in props, display role selector
                role === 'donor' || role === 'beneficiary' || role === 'shopkeeper' ? (
                  ''
                ) : (
                  <div className="radios">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="registerRoleSelector"
                        id="inlineRadio1"
                        value="donor"
                        checked={this.state.role === 'donor' ? 'checked' : ''}
                      />
                      <label className="form-check-label" htmlFor="inlineRadio1">
                        Donateur
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="registerRoleSelector"
                        id="inlineRadio2"
                        value="beneficiary"
                        checked={this.state.role === 'beneficiary' ? 'checked' : ''}
                      />
                      <label className="form-check-label" htmlFor="inlineRadio2">
                        Bénéficaire
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="registerRoleSelector"
                        id="inlineRadio2"
                        value="shopkeeper"
                        checked={this.state.role === 'shopkeeper' ? 'checked' : ''}
                      />
                      <label className="form-check-label" htmlFor="inlineRadio2">
                        Commerçant
                      </label>
                    </div>
                  </div>
                )}
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
  }
}
export default withRouter(Register);
