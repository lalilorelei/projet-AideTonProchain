import { SUBMIT_LOGIN } from 'store/reducers/user';
import { SUBMIT_REGISTER, getLocationErrorMessage, setAddressError } from 'store/reducers/user';
import axios from 'axios';
// import { SUBMIT_CONTACT } from './reducers/sharedReducer';

const logMiddleware = store => next => action => {
  switch (action.type) {
    case SUBMIT_REGISTER:
      if (action.role === 'shopkeeper') {
        /* 1 - Je récupère les données de l'adresse entrée */
        const { streetAddress, postCode, city } = action.data;
        const stringAddress = streetAddress + ' ' + postCode + ' ' + city;

        /* 2 - Je teste l'adresse en geocoding */
        axios
          .get(
            `https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=${stringAddress}&limit=1`,
          )
          .then(response => {
            if (response.data[0] !== undefined) {
              const { lat, lon } = response.data[0];
              const localisation = {
                lat,
                lon,
                address: stringAddress,
              };
              const registerData = {
                ...action.data,
                localisation,
              };
              store.dispatch(setAddressError(true));
              console.log("tentative d'inscription pour", action.role, 'avec ', registerData);
            } else {
              console.log("erreur dans l'adresse, à gérer");
              store.dispatch(setAddressError(true));
            }
          });
        console.log(stringAddress);
      }

      break;
    // case SUBMIT_CONTACT:
    //   console.log("envoi d'un message avec :", action.data);
    //   break;
    case SUBMIT_LOGIN:
      axios
        .post('http://95.142.175.77:3000/api/connexion', action.data)
        .then(response => {
          console.log(response);
        })
        .catch(e => {
          console.log(e.message);
        });

      //axios.post('aider-son-prochain/api/connexion', data, {headers: {Authorization: `Bearer ${token}`}})
      /*
    const jwtSecret = process.env.JWT_SECRET;

    url=aider-son-prochain/api/

      jwt.verify(token, jwtSecret);

      jwt.verify(token, jwtSecret, (err, decoded) => {
        console.log(decoded);
         { _id: '5d3c60e6c1695050f020f22e',
           role: 'shopkeeper',
           iat: 1564475761,
           exp: 1564562161 }
        if (err) {
          if (err.message) {
            user.tokens.splice(i, 1);
            user.save();
          }

            err = {
              name: 'TokenExpiredError',
              message: 'jwt expired',
              expiredAt: 1408621000
            }

        }
      });
      */
      break;
    default:
      next(action);
  }
};

export default logMiddleware;
