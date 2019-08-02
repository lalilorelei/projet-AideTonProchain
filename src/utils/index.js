import jwt from 'jsonwebtoken';
import * as geolib from 'geolib';

export const serializeFormData = form => {
  const dataObject = {};
  const formData = new FormData(form);

  formData.forEach(function(value, key) {
    dataObject[key] = value;
  });

  const jsonObject = JSON.stringify(dataObject);

  return jsonObject;
};

export const decodedToken = token => {
  if (!token) {
    return;
  }
  let role;
  jwt.verify(token, 'aidetonprochain', (err, decoded) => {
    if (err) {
      if (err.message) {
        console.log(err.message);
      }
    }
    if (decoded !== undefined) {
      role = decoded.role;
    } else {
      role = 'null';
    }
  });
  return role;
};

export const calculateDistance = (from, to) => {
  const distance = geolib.getDistance(
    { latitude: from.latitude, longitude: from.longitude },
    { latitude: to.latitude, longitude: to.longitude },
  );
  return Number((distance / 1000).toFixed(1));
};
