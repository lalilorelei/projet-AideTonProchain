import { SUBMIT_LOGIN, SUBMIT_REGISTER } from 'store/actionMiddleware';
import { recieveCurrentUser, registerMessage } from 'store/reducers/user';
import axios from 'axios';
// import { SUBMIT_CONTACT } from './reducers/sharedReducer';

const logMiddleware = store => next => action => {
  switch (action.type) {
    case SUBMIT_REGISTER:
      axios
        .post(`http://95.142.175.77:3000/api/${action.role}/register`, action.data)
        .then(response => {
          store.dispatch(registerMessage({ succes: 'Profil enregistré avec succès', error: '' }));
        })
        .catch(e => {
          store.dispatch(registerMessage({ succes: '', error: 'Profil enregistré avec succès' }));
          console.log(e.message);
        });
      break;
    case SUBMIT_LOGIN:
      axios
        .post('http://95.142.175.77:3000/api/connexion', action.data)
        .then(response => {
          store.dispatch(recieveCurrentUser(response.data));
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
