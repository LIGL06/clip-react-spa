import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import session from './actions/Session';
import customers from './actions/Customers';
import payments from './actions/Payments';
import balance from './actions/Balance';

export default (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  session,
  customers,
  payments,
  balance
});