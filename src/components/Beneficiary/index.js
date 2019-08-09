/* React */
import React from 'react';

/* Packages */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* Local Components */
import Header from 'components/Header';
import Input from 'components/Input';
import EmptyState from 'components/UtilsComponents/EmptyState';

/* utils */
import { initGeolocation, geoCode } from 'utils/geolocationUtils';

/* Css */
import './beneficiary.scss';

/* medias */
import shopKeepersBackgroundImage from 'assets/img/background-shopkeepers.jpg';

class Beneficiary extends React.Component {
  state = {
    lat: '',
    long: '',
    isGeoLocAccessible: true,
    itemsOrderedByDistance: [],
    getLocationErrorMessage: false,
  };
  // Avant d'afficher le composant on récupère la localisation via le navigateur et l'ensemble des shops
  componentDidMount = () => {
    initGeolocation(this);
  };

  submitAskLocation = evt => {
    evt.preventDefault();
    geoCode(this, evt.target.locationAddress.value);
  };

  onChangeSelect = evt => {
    const maxDist = evt.target.value;
    const { location } = this.state;
    const { getBeneficiaries, role, token } = this.props;
    getBeneficiaries(role, token, location, maxDist);
  };

  componentDidUpdate() {
    const { beneficiaries, getBeneficiaries, role, token } = this.props;
    const { location } = this.state;

    if (beneficiaries.length <= 0 && location) {
      getBeneficiaries(role, token, location, 9997);
    }
  }

  render() {
    console.log(this.props);
    return (
      <>
        <Header
          title="Bénéficiaires à proximité"
          backgroundImage={shopKeepersBackgroundImage}
          theme="dark"
        />
        {!this.state.isGeoLocAccessible && (
          <div className="container py-5 shopkeeper-list">
            <div className="row">
              <div className="col">
                <p>
                  Votre géolocalisation n'a pas pu être trouvée, veuillez l'autoriser dans votre navigateur ou
                  renseigner une adresse.
                </p>
                <form onSubmit={this.submitAskLocation}>
                  <Input
                    type="text"
                    className="form-control"
                    label="Adresse complète"
                    required={true}
                    name="locationAddress"
                    id="locationAddress"
                  />
                  {this.state.getLocationErrorMessage && (
                    <p className="text-danger text-small mt-0">
                      L'adresse renseignée n'est pas valide, veuillez réessayer
                    </p>
                  )}
                  <input type="submit" value="valider" className="btn btn-primary" name="submitAskLocation" />
                </form>
              </div>
            </div>
          </div>
        )}
        {this.props.beneficiaries.length > 0 ? (
          <div className="container py-5 beneficiary-list">
            <form className="form-inline d-flex justify-content-between">
              <div className="row my-3">
                <div className="col-12">
                  <div className="form-group">
                    <label className="inline-form-label" htmlFor="exampleFormControlSelect1">
                      Distance maxi :
                    </label>
                    <select
                      className="form-control form-control-sm"
                      id="selectDistance"
                      onChange={this.onChangeSelect}
                      defaultValue={10}
                    >
                      <option value="1">1 km</option>
                      <option value="2">2 km</option>
                      <option value="3">3 km</option>
                      <option value="4">4 km</option>
                      <option value="5">5 km</option>
                      <option value="10">10 km</option>
                      <option value="20">20 km</option>
                      <option value="30">30 km</option>
                      <option value="9999">Illimitée</option>
                    </select>
                  </div>
                </div>
<<<<<<< HEAD
              </div>
            </form>
=======
              </form>
            )}

            {this.state.lat !== '' && this.state.long !== '' && this.state.itemsOrderedByDistance <= 0 && (
              <EmptyState
                className="mt-5"
                message="Oops, aucun bénéficiaire n'a été trouvé dans la zone selectionnée"
              />
            )}
>>>>>>> 267414c32da28251c39ec0c260c4b1232e7b764e
            <div className="row">
              {this.props.beneficiaries.map(beneficiary => {
                return (
<<<<<<< HEAD
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4" key={beneficiary._id}>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={`https://picsum.photos/300/200?var=${beneficiary.username}`}
                        alt={beneficiary.username}
=======
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4" key={beneficiary.user._id}>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={`https://picsum.photos/300/200?var=${beneficiary.user.shopkeeper_name}`}
                        alt={beneficiary.user.shopkeeper_name}
>>>>>>> 267414c32da28251c39ec0c260c4b1232e7b764e
                      />
                      <div className="card-body">
                        <h3 className="card-title f2nt-3eight-bold">{beneficiary.username}</h3>
                        {beneficiary.distance && (
                          <h6 className="card-subtitle mb-2 text-muted">
                            {beneficiary.distance} km
                          </h6>
                        )}
                      </div>
<<<<<<< HEAD
                      <Link to={`/beneficiary/${beneficiary._id}`} className="stretched-link" />
=======
                      <Link to={`/beneficiary/${beneficiary.user._id}`} className="stretched-link" />
>>>>>>> 267414c32da28251c39ec0c260c4b1232e7b764e
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <EmptyState
            className="mt-5"
            message="Oops, aucun bénéficiaire n'a été trouvé dans la zone selectionnée"
          />
        )}
      </>
    );
  }
}

export default Beneficiary;
