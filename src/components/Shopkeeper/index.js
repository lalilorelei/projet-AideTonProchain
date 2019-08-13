/* React */
import React from 'react';

/* Packages */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

/* Local Components */
import Header from 'components/Header';
import Input from 'components/Input';
import EmptyState from 'components/UtilsComponents/EmptyState';
import Error403 from 'components/Error403';

/* medias */
import shopKeepersBackgroundImage from 'assets/img/background-shopkeepers.jpg';
import defaultAvatar from 'assets/img/default-avatar.png';

class Shopkeeper extends React.Component {
  state = {
    location: {
      latitude: 0,
      longitude: 0,
    },
    isGeoLocAccessible: true,
    itemsOrderedByDistance: [],
    shops: [],
    getLocationErrorMessage: false,
  };
  // Avant d'afficher le composant on récupère la localisation via le navigateur et l'ensemble des shops
  componentDidMount = () => {
    document.title = `Commerces à proximité - Aide ton prochain`;

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState(
            {
              isGeoLocAccessible: true,
              location: {
                latitude: Number(position.coords.latitude),
                longitude: Number(position.coords.longitude),
              },
            },
            () => {
              const { latitude, longitude } = this.state.location;
              this.getShops(latitude, longitude, 9999);
            },
          );
        },
        err => {
          this.setState({
            isGeoLocAccessible: false,
          });
        },
      );
    } else {
      this.setState({
        isGeoLocAccessible: false,
      });
    }
  };

  /*componentDidUpdate() {
    console.log(this.state.shops);
    if (this.state.shops === undefined || this.state.shops.length <= 0) {
      const { latitude, longitude } = this.state.location;
      this.getShops(latitude, longitude, 9999);
    }
  }*/

  getShops = (latitude, longitude, km) => {
    console.log('get shops');
    axios
      .post(
        `http://95.142.175.77:3000/api/${this.props.role}/shopkeepers-distance`,
        { latitude, longitude, km },
        {
          headers: {
            Authorization: `Bearer ${this.props.token}`,
            'Content-Type': 'application/json',
          },
        },
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          itemsOrderedByDistance: [...response.data.shopkeepers],
          shops: [...response.data.shopkeepers],
        });
      })
      .catch(e => {
        console.log('Impossible de récupérer les shops', e);
      });
  };

  // Soumission du formulaire avec adresse manuell
  submitAskLocation = async evt => {
    evt.preventDefault();
    await axios
      .get(
        `https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=${
          evt.target.locationAddress.value
        }&limit=1`,
      )
      .then(response => {
        const { lat, lon } = response.data[0];
        this.setState({
          ...this.state,
          location: {
            latitude: Number(lat),
            longitude: Number(lon),
          },
          isGeoLocAccessible: true,
        });
      })
      .catch(e => {
        this.setState({
          ...this.state,
          isGeoLocAccessible: false,
          getLocationErrorMessage: true,
        });
      });
    const { latitude, longitude } = this.state.location;
    await this.getShops(latitude, longitude, 9999);
  };

  onChangeSelect = evt => {
    const maxDist = evt.target.value;
    const { latitude, longitude } = this.state.location;
    this.getShops(latitude, longitude, maxDist);
  };

  render() {
    const { shops } = this.state;
    const { currentUser, role } = this.props;
    console.log(shops);
    if (currentUser.user !== undefined && role !== 'shopkeeper') {
      return (
        <>
          <Header
            title="Commerces à proximité"
            backgroundImage={shopKeepersBackgroundImage}
            theme="dark"
          />
          {this.state.isGeoLocAccessible && this.state.location.latitude === 0 ? (
            <EmptyState
              className="mt-5"
              message="Oops, Veuillez nous accorder l'autorisation d'utiliser votre gélocalisation"
            />
          ) : !this.state.isGeoLocAccessible ? (
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
              <div className="row my-3">
                <div className="col-12">
                  <form className="form-inline d-flex justify-content-between">
                    <div className="form-group">
                      <label className="inline-form-label" htmlFor="exampleFormControlSelect1">
                        Distance maxi :
                      </label>
                      <select
                        className="form-control form-control-sm"
                        id="selectDistance"
                        onChange={this.onChangeSelect}
                        defaultValue={10000}
                      >
                        <option value="1">1 km</option>
                        <option value="2">2 km</option>
                        <option value="3">3 km</option>
                        <option value="4">4 km</option>
                        <option value="5">5 km</option>
                        <option value="10">10 km</option>
                        <option value="20">20 km</option>
                        <option value="30">30 km</option>
                        <option value="10000">10 000 km</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              {shops !== undefined && shops.length > 0 ? (
                <div className="row">
                  {shops.map(shop => {
                    return (
                      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4" key={shop._id}>
                        <div className="card">
                          <img
                            className="card-img-top"
                            src={
                              shop.avatar ? `data:image/jpg;base64,${shop.avatar}` : defaultAvatar
                            }
                            alt={shop.shopkeeper_name}
                          />
                          <div className="card-body">
                            <h4 className="card-title f2nt-3eight-bold">{shop.shopkeeper_name}</h4>
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
                  })}
                </div>
              ) : (
                <div className="row">
                  <div className="col">
                    <EmptyState
                      className="mt-5"
                      message="Oops, aucun commerce n'a été trouvé dans la zone selectionnée"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </>
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
