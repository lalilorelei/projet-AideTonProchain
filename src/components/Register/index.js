import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'components/Header';
import './register.scss';

class Register extends React.Component {
    state = {
    roleTitle: '',
    role: '',
  }

  componentDidMount = () => {
    console.log('state', this.props.location.state);
    const { roleTitle, role } =  this.props.location.state;
    //console.log(roleTitle, role);
    this.setState({
      roleTitle: roleTitle,
      role: role,
    });
  }

  render() {
    return (
      <>
        <Header title={`Inscription ${this.state.roleTitle}`} />
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <form className="mt-4">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="registerRoleSelector"
                  id="inlineRadio1"
                  value="donor"
                  checked={this.state.role === 'donor' ? 'checked' : ''}
                />
                <label className="form-check-label" for="inlineRadio1">
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
                <label className="form-check-label" for="inlineRadio2">
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
                <label className="form-check-label" for="inlineRadio2">
                  Commerçant
                </label>
              </div>
            </form>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <form className="mt-4">
              <div className="form-group">
                <label for="exampleInputUserName1">Votre nom d'utilisateur</label>
                <input
                  type="userName"
                  className="form-control"
                  id="exampleInputUserName1"
                  placeholder="Entrez votre nom d'utilisateur"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Votre adresse email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Entrez votre adresse e-mail"
                />
              </div>

              <div className="form-group mt-4">
                <div className="d-flex justify-content-between">
                  <label for="exampleInputPassword1">Choisissez un mot de passe</label>
                </div>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Entrez votre mot de passe"
                />
              </div>
              <div className="form-group mt-4">
                <div className="d-flex justify-content-between">
                  <label for="exampleInputPhoneNumber1">Votre numéro de téléphone</label>
                </div>

                <input
                  type="phoneNumber"
                  className="form-control"
                  id="exampleInputPhoneNumber1"
                  placeholder="Entrez votre numéro de téléphone"
                />
              </div>
              <div className="form-group mt-4">
                <div className="d-flex justify-content-between">
                  <label for="exampleInputCity1">Votre ville</label>
                </div>

                <input type="city" className="form-control" id="exampleInputCity1" placeholder="Entrez votre ville" />
              </div>

              <button type="submit" className="mt-4 btn btn-custom-accent btn-block">
                Continuer
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(Register);

