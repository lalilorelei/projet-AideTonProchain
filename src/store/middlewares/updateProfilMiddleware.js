import axios from 'axios';
import { UPDATE_PROFIL } from 'store/actionMiddleware';
import { recieveCurrentUser } from 'store/reducers/user';

const shopkeeperMiddleware = store => next => action => {
  switch (action.type) {
    case UPDATE_PROFIL:
      console.log(action.data, action.img);
      axios
        .patch(`http://95.142.175.77:3000/api/${action.role}/profil-update`, action.data, {
          headers: {
            Authorization: `Bearer ${action.token}`,
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          const data = { user: { ...response.data.user }, token: action.token };
          store.dispatch(recieveCurrentUser(data));
        })
        .catch(e => {
          console.log('Impossible de mettre à jour le profil', e);
        });
      if (action.img !== null) {
        axios
          .post(`http://95.142.175.77:3000/api/${action.role}/upload`, action.img, {
            headers: {
              Authorization: `Bearer ${action.token}`,
              // 'Content-Type': 'multipart/form-data',
            },
          })
          .then(response => {
            const data = { user: { ...response.data.user }, token: action.token };
            store.dispatch(recieveCurrentUser(data));
          })
          .catch(e => {
            console.log("Impossible d'enregistrer l'image", e);
          });
      }
      break;
    default:
      next(action);
  }
};

export default shopkeeperMiddleware;
