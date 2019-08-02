import axios from 'axios';
import { SEND_MANUAL_LOCATION, updateUserLocation } from 'store/reducers/user';

const locationMiddleware = store => next => action => {
  switch (action.type) {
    case SEND_MANUAL_LOCATION:
      axios
        .get(
          `https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=${
            action.address
          }&limit=1`,
        )
        .then(response => {
          const { lat, lon } = response.data[0];
          store.dispatch(updateUserLocation(lat, lon));
          console.log(response);
        });

      break;
    default:
      next(action);
  }
};

export default locationMiddleware;
