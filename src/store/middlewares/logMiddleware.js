import { SUBMIT_LOGIN, SUBMIT_REGISTER, DECONNEXION } from 'store/actionMiddleware';
import { recieveCurrentUser, confirmRegister } from 'store/reducers/user';
//import { decodedToken } from 'utils';

import axios from 'axios';

const logMiddleware = store => next => action => {
  switch (action.type) {
    case SUBMIT_REGISTER:
      console.log('data', action.data);
      axios
        .post(`http://95.142.175.77:3000/api/${action.role}/register`, action.data)
        .then(response => {
          store.dispatch(confirmRegister());
          //window.location = '/login';
        })
        .catch(e => {
          store.dispatch(confirmRegister({ succes: '', error: "Erreur lors de l'enregistrement" }));
          console.log(e.message);
        });
      break;
    case SUBMIT_LOGIN:
      axios
        .post('http://95.142.175.77:3000/api/connexion', action.data)
        .then(response => {
          store.dispatch(recieveCurrentUser(response.data));
        })
        .then(response => {
          window.location = '/profil';
        })
        .catch(e => {
          console.log(e.message);
        });

      break;
    case DECONNEXION:
      console.log(action.role, action.token);
      axios
        .post(
          `http://95.142.175.77:3000/api/${action.role}/logout`,
          {},
          {
            headers: { Authorization: `Bearer ${action.token}` },
          },
        )
        .then(response => {
          store.dispatch(recieveCurrentUser({}));
        })
        .catch(e => {
          console.log(e.message);
        });
      break;
    default:
      next(action);
  }
};

export default logMiddleware;

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
