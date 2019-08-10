import axios from 'axios';
import * as geolib from 'geolib';

export const initGeolocation = self => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      position => {
        self.setState({
          ...self.state,
          location: {
            lat: position.coords.latitude,
            long: position.coords.longitude,
          },
        });
      },
      err => {
        console.log('Erreur lors de la récupération de la position');
        self.setState({
          ...self.state,
          isGeoLocAccessible: false,
        });
      },
    );
  } else {
    console.log('position indisponible');
    self.setState({
      ...self.state,
      isGeoLocAccessible: false,
    });
  }
};

export const geoCode = (self, value) => {
  axios
    .get(`https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=${value}&limit=1`)
    .then(response => {
      const { lat, lon } = response.data[0];
      self.setState({
        ...self.state,
        location: {
          lat: lat,
          long: lon,
        },
        isGeoLocAccessible: true,
      });
    })
    .catch(e => {
      self.setState({
        ...self.state,
        isGeoLocAccessible: false,
      });
    });
};

export const addDistanceProperty = (items, location) => {
  const itemsWithDistance = items.map(item => {
    item.distance = calculateDistance(
      {
        latitude: location.lat,
        longitude: location.long,
      },
      {
        latitude: item.localisation.lat,
        longitude: item.localisation.lon,
      },
    );
    return item;
  });
  return itemsWithDistance;
};

export const calculateDistance = (from, to) => {
  const distance = geolib.getDistance(
    { latitude: from.latitude, longitude: from.longitude },
    { latitude: to.latitude, longitude: to.longitude },
  );
  return Number((distance / 1000).toFixed(1));
};

export const orderByDistance = (startingPoint, array) => {
  return geolib.orderByDistance(startingPoint, [...array]);
};
