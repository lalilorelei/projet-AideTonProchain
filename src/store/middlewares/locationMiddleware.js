import axios from 'axios';
import { updateUserLocation, getLocationErrorMessage } from 'store/reducers/user';

const locationMiddleware = store => next => action => {
  switch (action.type) {
    // case SEND_MANUAL_LOCATION:
    //   axios
    //     .get(
    //       `https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=${
    //         action.address
    //       }&limit=1`,
    //     )
    //     .then(response => {
    //       if (response.data[0] !== undefined) {
    //         const { lat, lon } = response.data[0];
    //         store.dispatch(updateUserLocation(lat, lon));
    //       } else {
    //         store.dispatch(
    //           getLocationErrorMessage("L'adresse renseignée n'est pas valide, veuillez réessayer"),
    //         );
    //       }
    //     });

    //break;
    default:
      next(action);
  }
};

export default locationMiddleware;
