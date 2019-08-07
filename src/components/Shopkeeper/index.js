import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Media from 'react-media';
import shopKeepersBackgroundImage from 'assets/img/background-shopkeepers.jpg';

import Header from 'components/Header';
import Input from 'components/Input';
import { initGeolocalisation, geoCode, itemsDistance } from 'utils';
import { getAllShops } from 'utils/shopkeeperUtils';

class Shopkeeper extends React.Component {
  state = {
    lat: '',
    long: '',
    isGeoLocAccessible: true,
    itemsOrderedByDistance: [],
    getLocationErrorMessage: false,
    shops: [],
  };
  // Avant d'afficher le composant on récupère la localisation via le navigateur
  componentDidMount() {
    const { lat, long, isGeoLocAccessible } = this.state;
    initGeolocalisation(this, lat, long, this.itemsDistance, isGeoLocAccessible);
  }

  itemsDistance = () => {
    console.log('props : ', this.props);
    const { lat, long, itemsOrderedByDistance } = this.state;
    const { role, currentUser } = this.props;
    const shops = getAllShops(this, currentUser, role);
    itemsDistance(this, 9999, shops, lat, long, itemsOrderedByDistance);
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
      this.shopsDistance,
      getLocationErrorMessage,
    );
  };

  onChangeSelect = evt => {
    const { value } = evt.target;
    const { lat, long, shopsOrderedByDistance } = this.state;
    const { shops } = this.props;
    itemsDistance(this, value, shops, lat, long, shopsOrderedByDistance);
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Header
          title="Commerces à proximité"
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
          <div className="container py-5 shopkeeper-list">
            {this.state.lat !== '' && this.state.long !== '' && (
              <form className="form-inline d-flex justify-content-between">
                <div className="row my-3">
                  <div className="col-md-4">
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
                  <div className="col-md-8">
                    <div className="form-group">
                      <span className="inline-form-label">Produits :</span>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">
                          menus
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="option2"
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox2">
                          restauration rapide
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox3"
                          value="option3"
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox3">
                          café
                        </label>
                      </div>
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
                    <p className="text-muted">Aucun commerçant trouvé dans la zone selectionnée</p>
                  </div>
                </div>
              )}
            <div className="row">
              {this.state.itemsOrderedByDistance.map(shop => {
                return (
                  <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4" key={shop.user._id}>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={`https://picsum.photos/300/200?var=${shop.user.shopkeeper_name}`}
                        alt={shop.user.shopkeeper_name}
                      />
                      <div className="card-body">
                        <h3 className="card-title f2nt-3eight-bold">{shop.user.shopkeeper_name}</h3>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {/* {shop.category} - {shop.distance} km */}
                          category - {shop.distance} km
                        </h6>
                      </div>
                      <Link to={`/shopkeeper/${shop.user._id}`} className="stretched-link" />
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

Shopkeeper.propTypes = {
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
  isGeoLocAccessible: PropTypes.bool.isRequired,
  itemsOrderedByDistance: PropTypes.func.isRequired,
  getLocationErrorMessage: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  shops: PropTypes.string.isRequired,
};

export default Shopkeeper;
