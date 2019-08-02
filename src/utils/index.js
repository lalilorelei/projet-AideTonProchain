import jwt from 'jsonwebtoken';

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
    console.log(decoded);
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
