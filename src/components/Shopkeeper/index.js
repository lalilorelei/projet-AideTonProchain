import React from 'react';
import { Link } from 'react-router-dom';
// import Media from 'react-media';
import shopKeepersBackgroundImage from 'assets/img/background-shopkeepers.jpg';

import Header from 'components/Header';
import Input from 'components/Input';
import './shopkeeper.scss';
import { calculateDistance, orderByDistance, compare } from 'utils';

class Shopkeeper extends React.Component {
  // Avant d'afficher le composant on récupère la localisation via le navigateur
  componentWillMount() {
    const { updateUserLocation } = this.props;
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        updateUserLocation(lat, long);
      },
      err => console.log(err),
    );
  }

  // Soumission du formulaire avec adresse manuelle
  submitAskLocation = evt => {
    evt.preventDefault();
    const { sendManualLocation } = this.props;
    sendManualLocation(evt.target.locationAddress.value);
  };

  render() {
    const { currentUser, shops, getLocationErrorMessage } = this.props;

    let userLocation = '';
    let shopsOrderedByDistance = '';

    // si le currentUser a une localisation définie
    if (currentUser.user.localisation !== undefined) {
      /*
        1 - on créé un objet simple avec les coordonnées
      */
      userLocation = {
        latitude: currentUser.user.localisation.latitude,
        longitude: currentUser.user.localisation.longitude,
      };

      /*
        2 - On réorganise le tableau de shops en leur mettant lat, long 
        et distance par rapport au current user au 1er niveau 
      */
      const newShops = shops.map(shop => {
        return {
          latitude: shop.user.localisation.latitude,
          longitude: shop.user.localisation.longitude,
          // calcul de la distance du shop par rapport au currentUser
          distance: calculateDistance(userLocation, {
            latitude: shop.user.localisation.latitude,
            longitude: shop.user.localisation.longitude,
          }),
          ...shop,
        };
      });

      /*
        3 - On a maintenant un tableau de shops simplifié avec accès à lat long et distance
        On trie ce tableau par distance grâce à une fonction utils 
      */
      shopsOrderedByDistance = newShops.sort(compare);
    }

    return (
      <>
        <Header
          title="Commerces à proximité"
          backgroundImage={shopKeepersBackgroundImage}
          theme="dark"
        />
        {userLocation.latitude === undefined || userLocation.longitude === undefined ? (
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
                  {getLocationErrorMessage !== undefined && (
                    <p class="text-danger text-small mt-0">{getLocationErrorMessage}</p>
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
            <div className="row my-3">
              <form className="form-inline d-flex justify-content-between">
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="inline-form-label" htmlFor="exampleFormControlSelect1">
                      Distance maxi :
                    </label>
                    <select className="form-control form-control-sm" id="exampleFormControlSelect1">
                      <option value="1">1 km</option>
                      <option value="2">2 km</option>
                      <option value="3">3 km</option>
                      <option value="4">4 km</option>
                      <option value="5">5 km</option>
                      <option value="10">10 km</option>
                      <option value="20">20 km</option>
                      <option value="0">Illimitée</option>
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
              </form>
            </div>
            <div className="row">
              {shopsOrderedByDistance.map(shop => {
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

export default Shopkeeper;
