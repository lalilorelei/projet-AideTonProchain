import jwt from 'jsonwebtoken';
import * as geolib from 'geolib';
import axios from 'axios';
import * as serialize from 'form-serialize';

export const serializeFormData = form => {
  return serialize(form, { hash: true });
};

export const decodedToken = token => {
  let id = 'null';
  let role = 'null';
  if (!token) {
    return { id, role };
  }

  jwt.verify(token, 'aidetonprochain', (err, decoded) => {
    if (err) {
      if (err.message) {
        console.log(err.message);
      }
    }
    if (decoded !== undefined) {
      id = decoded._id;
      role = decoded.role;
    }
  });
  return { id, role };
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

export const compare = (a, b) => {
  let comparison = 0;
  if (a.distance > b.distance) {
    comparison = 1;
  } else if (a.distance < b.distance) {
    comparison = -1;
  }
  return comparison;
};

export const initGeolocalisation = (self, lat, long, itemsDistance, isGeoLocAccessible) => {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      position => {
        self.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
        itemsDistance();
      },
      err => {
        self.setState({
          isGeoLocAccessible: false,
        });
      },
    );
  } else {
    self.setState({
      isGeoLocAccessible: false,
    });
  }
};

export const initGeolocalisation2 = () => {
  let location = {
    lat: '',
    long: '',
  };
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      position => {
        location.lat = position.coords.latitude;
        location.long = position.coords.longitude;
      },
      err => {},
    );
    return { location };
  } else {
    return { location };
  }
};

export const geoCode = (
  self,
  value,
  lat,
  long,
  isGeoLocAccessible,
  itemsDistance,
  getLocationErrorMessage,
) => {
  axios
    .get(`https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=${value}&limit=1`)
    .then(response => {
      const { lat, lon } = response.data[0];
      self.setState({
        lat,
        long: lon,
        isGeoLocAccessible: true,
      });
      return itemsDistance();
    })
    .catch(e => {
      self.setState({
        getLocationErrorMessage: true,
      });
    });
};

export const itemsDistance = (self, km, items, lat, long, itemsOrderedByDistance) => {
  const itemsWithDistance = items.map(item => {
    // calcul de la distance du shop par rapport au currentUser
    item.distance = calculateDistance(
      {
        latitude: lat,
        longitude: long,
      },
      {
        latitude: item.localisation.lat,
        longitude: item.localisation.lon,
      },
    );
    return item;
  });

  const itemsFilter = itemsWithDistance.sort(compare).filter(item => item.distance <= km);
  self.setState({
    itemsOrderedByDistance: itemsFilter,
  });
};

export const itemsDistance2 = (km = 9999, items, lat, long) => {
  const itemsWithDistance = items.map(item => {
    // calcul de la distance du shop par rapport au currentUser
    item.distance = calculateDistance(
      {
        latitude: lat,
        longitude: long,
      },
      {
        latitude: item.localisation.lat,
        longitude: item.localisation.lon,
      },
    );
    return item;
  });

  const itemsFilter = itemsWithDistance.sort(compare).filter(item => item.distance <= km);
  return itemsFilter;
};
