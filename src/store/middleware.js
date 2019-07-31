import { SUBMIT_LOGIN } from './reducers/sharedReducer';
import { SUBMIT_REGISTER } from './reducers/sharedReducer';

const Middleware = store => next => action => {
  switch (action.type) {
    case SUBMIT_REGISTER:
      console.log("tentative d'inscription pour ", action.role, 'avec ', action.data);
      break;
    case SUBMIT_LOGIN:
      console.log('prêt à envoyer !', action.data);
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

export default Middleware;
