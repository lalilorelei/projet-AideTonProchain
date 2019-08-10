/* React */
import React from 'react';

/* Packages */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

/* Local Components */
import Header from 'components/Header';
import Input from 'components/Input';
import EmptyState from 'components/UtilsComponents/EmptyState';
import Error403 from 'components/Error403';

/* utils */
import { initGeolocation, geoCode } from 'utils/geolocationUtils';

/* medias */
import shopKeepersBackgroundImage from 'assets/img/background-shopkeepers.jpg';

class Shopkeeper extends React.Component {
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

  // Soumission du formulaire avec adresse manuell
  submitAskLocation = evt => {
    evt.preventDefault();
    geoCode(this, evt.target.locationAddress.value);
  };

  onChangeSelect = evt => {
    const maxDist = evt.target.value;
    const { location } = this.state;
    const { getShops, role, token } = this.props;
    getShops(role, token, location, maxDist);
  };

  componentDidUpdate() {
    const { shops, getShops, role, token } = this.props;
    const { location } = this.state;

    if (shops === undefined) {
      console.log('go get shops !');
      getShops(role, token, location, 9999);
    }
  }

  render() {
    const { shops } = this.props;
    console.log('render shops', shops);
    const { currentUser, role } = this.props;
    if (currentUser.user !== undefined && role !== 'shopkeeper') {
      return (
        <>
          <Header
            title="Commerces à proximité"
            backgroundImage={shopKeepersBackgroundImage}
            theme="dark"
          />
          {!this.state.isGeoLocAccessible && (
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
          )}
          {shops !== undefined ? (
            <div className="container py-5 shopkeeper-list">
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
                        defaultValue={9999}
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
              <div className="row">
                {shops !== false
                  ? shops.map(shop => {
                      return (
                        <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4" key={shop._id}>
                          <div className="card">
                            <img
                              className="card-img-top"
                              src={`https://picsum.photos/300/200?var=${shop.shopkeeper_name}`}
                              alt={shop.shopkeeper_name}
                            />
                            <div className="card-body">
                              <h4 className="card-title f2nt-3eight-bold">
                                {shop.shopkeeper_name}
                              </h4>
                              {shop.distance || shop.distance === 0 ? (
                                <div className="distance card-subtitle mt-3 text-muted text-small d-inline-flex align-items-center">
                                  <FaMapMarkerAlt size=".75rem" color="#bbb" />
                                  <span className="ml-1">{shop.distance} km</span>
                                </div>
                              ) : (
                                <div
                                  className={
                                    `distance card-subtitle mt-3 text-muted text-small d-inline-flex align-items-center` +
                                      !shop.distance &&
                                    ' distance card-subtitle mt-3 text-muted text-small d-inline-flex align-items-center border-none'
                                  }
                                >
                                  <FaMapMarkerAlt size=".75rem" color="#bbb" />
                                  <span className="ml-1">Non renseigné</span>
                                </div>
                              )}
                            </div>
                            <Link to={`/shopkeeper/${shop._id}`} className="stretched-link" />
                          </div>
                        </div>
                      );
                    })
                  : shops === false && (
                      <div className="col">
                        <EmptyState
                          className="mt-5"
                          message="Oops, aucun commerçant n'a été trouvé dans la zone selectionnée"
                        />
                      </div>
                    )}
              </div>
            </div>
          ) : null}
        </>
      );
    } else {
      return (
        <Error403 message="Vous ne pouvez pas accéder à cette page, vous n'êtes pas connectés" />
      );
    }
  }
}

/*Shopkeeper.propTypes = {
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
  isGeoLocAccessible: PropTypes.bool.isRequired,
  itemsOrderedByDistance: PropTypes.array.isRequired,
  getLocationErrorMessage: PropTypes.func.isRequired,
  //value: PropTypes.string.isRequired,
  shops: PropTypes.array.isRequired,
};*/

export default Shopkeeper;
