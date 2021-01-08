import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
// import session from './actions/session';
import customers from './actions/Customers';
import payments from './actions/Payments';

export default (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  //session,
  customers,
  payments
});