import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Media from 'react-media';
import shopKeepersBackgroundImage from 'assets/img/background-shopkeepers.jpg';
import './beneficiary.scss';

import Header from 'components/Header';
import Input from 'components/Input';
import { calculateDistance, compare, initGeolocalisation, geoCode, itemsDistance } from 'utils';

class Beneficiary extends React.Component {
  state = {
    lat: '',
    long: '',
    isGeoLocAccessible: true,
    itemsOrderedByDistance: [],
    getLocationErrorMessage: false,
    beneficiaries: [],
  };
  // Avant d'afficher le composant on récupère la localisation via le navigateur
  componentDidMount() {
    initGeolocalisation(
      this,
      this.state.lat,
      this.state.long,
      this.itemsDistance,
      this.state.isGeoLocAccessible,
    );
  }

  itemsDistance = () => {
    itemsDistance(
      this,
      9999,
      this.props.beneficiaries,
      this.state.lat,
      this.state.long,
      this.state.beneficiariesOrderedByDistance,
    );
  };

  // Soumission du formulaire avec adresse manuelle
  submitAskLocation = evt => {
    evt.preventDefault();
    geoCode(
      this,
      evt.target.locationAddress.value,
      this.state.lat,
      this.state.long,
      this.state.isGeoLocAccessible,
      this.itemsDistance,
      this.state.getLocationErrorMessage,
    );
  };

  onChangeSelect = evt => {
    const { value } = evt.target;
    itemsDistance(
      this,
      value,
      this.props.beneficiaries,
      this.state.lat,
      this.state.long,
      this.state.beneficiariesOrderedByDistance,
    );
  };

  render() {
    return (
      <>
        <Header
          title="Bénéficiaires à proximité"
          backgroundImage={shopKeepersBackgroundImage}
          theme="dark"
        />
        {!this.state.isGeoLocAccessible ? (
          <div className="container py-5 shopkeeper-list">
            <div className="row">
              <div className="col">
                <p>
                  Votre géolocalisation n'a pas pu être trouvée, veuillez l'autoriser dans votre
                  navigateur ou renseigner une adresse.
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
                  <input
                    type="submit"
                    value="valider"
                    className="btn btn-custom-accent"
                    name="submitAskLocation"
                  />
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="container py-5 beneficiary-list">
            {this.state.lat !== '' && this.state.long !== '' && (
              <form className="form-inline d-flex justify-content-between">
                <div className="row my-3">
                  <div className="col-12">
                    <div className="form-group">
                      <label className="inline-form-label" htmlFor="exampleFormControlSelect1">
                        Distance maxi :
                      </label>
                      <select
                        className="form-control form-control-sm"
                        id="exampleFormControlSelect1"
                        onChange={this.onChangeSelect}
                        defaultValue={99999}
                      >
                        <option value="1">1 km</option>
                        <option value="2">2 km</option>
                        <option value="3">3 km</option>
                        <option value="4">4 km</option>
                        <option value="5">5 km</option>
                        <option value="10">10 km</option>
                        <option value="20">20 km</option>
                        <option value="30">30 km</option>
                        <option value="99999">Illimitée</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            )}

            {this.state.lat !== '' &&
              this.state.long !== '' &&
              this.state.itemsOrderedByDistance <= 0 && (
                <div className="row">
                  <div className="col">
                    <p className="text-muted">
                      Aucun bénéficiaire trouvé dans la zone selectionnée
                    </p>
                  </div>
                </div>
              )}
            <div className="row">
              {this.state.itemsOrderedByDistance.map(beneficiary => {
                return (
                  <div
                    className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                    key={beneficiary.user._id}
                  >
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={`https://picsum.photos/300/200?var=${
                          beneficiary.user.shopkeeper_name
                        }`}
                        alt={beneficiary.user.shopkeeper_name}
                      />
                      <div className="card-body">
                        <h3 className="card-title f2nt-3eight-bold">{beneficiary.user.username}</h3>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {/* {shop.category} - {shop.distance} km */}
                          {beneficiary.distance} km
                        </h6>
                      </div>
                      <Link
                        to={`/beneficiary/${beneficiary.user._id}`}
                        className="stretched-link"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Beneficiary;
