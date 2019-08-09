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
import { initGeolocalisation, geoCode, itemsDistance } from 'utils';

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
  // Avant d'afficher le composant on récupère la localisation via le navigateur
  componentDidMount() {
    const { lat, long, isGeoLocAccessible } = this.state;
    const { role, token, getBeneficiaries, beneficiaries } = this.props;
    if (beneficiaries.length <= 0) {
      getBeneficiaries(role, token);
    }

    /*console.log(beneficiaries);
    const beneficiariesWithDistance = beneficiaries.filter(beneficiary => {
      return beneficiary.localisation !== {};
    });
    console.log(beneficiariesWithDistance);
    initGeolocalisation(this, lat, long, this.itemsDistance, isGeoLocAccessible);*/
  }

  componentDidUpdate() {
    const { beneficiaries } = this.props;
    if (beneficiaries.length > 0) {
      const beneficiariesWithDistance = beneficiaries.filter(beneficiary => {
        return beneficiary.localisation.latitude !== 0;
      });
      console.log(beneficiariesWithDistance);
    }
  }

  itemsDistance = () => {
    const { lat, long, itemsOrderedByDistance } = this.state;
    const { beneficiaries } = this.props;
    itemsDistance(this, 9999, beneficiaries, lat, long, itemsOrderedByDistance);
  };

  // Soumission du formulaire avec adresse manuelle
  submitAskLocation = evt => {
    evt.preventDefault();
    const { lat, long, isGeoLocAccessible, getLocationErrorMessage } = this.state;
    geoCode(
      this,
      evt.target.locationAddress.value,
      lat,
      long,
      isGeoLocAccessible,
      this.itemsDistance,
      getLocationErrorMessage,
    );
  };

  onChangeSelect = evt => {
    const { value } = evt.target;
    const { lat, long, beneficiariesOrderedByDistance } = this.state;
    const { beneficiaries } = this.props;
    itemsDistance(this, value, beneficiaries, lat, long, beneficiariesOrderedByDistance);
  };

  render() {
    console.log('render props', this.props);
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
                    className="btn btn-primary"
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
                </div>
              </form>
            )}

            {this.state.lat !== '' &&
              this.state.long !== '' &&
              this.state.itemsOrderedByDistance <= 0 && (
                <EmptyState
                  className="mt-5"
                  message="Oops, aucun bénéficiaire n'a été trouvé dans la zone selectionnée"
                />
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
