/* React */
import React from 'react';

/* Packages */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

/* Local Components */
import Header from 'components/Header';
import Footer from 'components/Footer';
import Input from 'components/Input';
import EmptyState from 'components/UtilsComponents/EmptyState';
import Error403 from 'components/Error403';

/* utils & data */
import { initGeolocation, geoCode } from 'utils/geolocationUtils';
import profileSubtitles from 'data/profileSubtitles';

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
    document.title = `Personnes à proximité - Aide ton prochain`;
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

    if (beneficiaries === undefined && location) {
      getBeneficiaries(role, token, location, 9999);
    }
  }

  render() {
    const { beneficiaries } = this.props;
    const { currentUser, role } = this.props;

    if (currentUser.user !== undefined && role !== 'shopkeeper') {
      return (
        <>
          <Header
            title="Bénéficiaires à proximité"
            backgroundImage={shopKeepersBackgroundImage}
            theme="dark"
          />
          {!this.state.isGeoLocAccessible && (
            <div className="container py-5 beneficiary-list">
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
          )}
          {beneficiaries !== undefined ? (
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
                </div>
              </form>
              <div className="row">
                {beneficiaries !== false
                  ? beneficiaries.map(beneficiary => {
                      return (
                        <div
                          className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4"
                          key={beneficiary._id}
                        >
                          <div className="card">
                            <img
                              className="card-img-top"
                              src={`http://aider-son-prochain.fr/projet-AideTonProchain-back/${
                                beneficiary.avatar
                              }`}
                              alt={beneficiary.username}
                            />
                            <div className="card-body">
                              <h4 className="card-title mb-0">{beneficiary.username}</h4>
                              {profileSubtitles.length > 0 && (
                                <span className="text-muted d-block">
                                  {
                                    profileSubtitles[
                                      Math.floor(Math.random() * profileSubtitles.length)
                                    ]
                                  }
                                </span>
                              )}

                              {beneficiary.distance || beneficiary.distance === 0 ? (
                                <div className="distance card-subtitle mt-3 text-muted text-small d-inline-flex align-items-center">
                                  <FaMapMarkerAlt size=".75rem" color="#bbb" />
                                  <span className="ml-1">{beneficiary.distance} km</span>
                                </div>
                              ) : (
                                <div
                                  className={
                                    `distance card-subtitle mt-3 text-muted text-small d-inline-flex align-items-center` +
                                      !beneficiary.distance &&
                                    ' distance card-subtitle mt-3 text-muted text-small d-inline-flex align-items-center border-none'
                                  }
                                >
                                  <FaMapMarkerAlt size=".75rem" color="#bbb" />
                                  <span className="ml-1">Non renseigné</span>
                                </div>
                              )}
                            </div>
                            <Link
                              to={`/beneficiary/${beneficiary._id}`}
                              className="stretched-link"
                            />
                          </div>
                        </div>
                      );
                    })
                  : beneficiaries === false && (
                      <div className="col">
                        <EmptyState
                          className="mt-5"
                          message="Oops, aucun bénéficiaire n'a été trouvé dans la zone selectionnée"
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

export default Beneficiary;
