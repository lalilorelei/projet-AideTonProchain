import { SUBMIT_LOGIN } from './reducers/sharedReducer';

const Middleware = store => next => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
    const state = store.getState();
        console.log('prêt à envoyer !', state.form.loginInput);
        
        break;
    default:
        next(action);
  }
};

export default Middleware;