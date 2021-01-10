import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import axios from 'axios';
import './styles/index.css';
import confStore, { history } from './store';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

let store = confStore();

if (localStorage.session) {
  const session = JSON.parse(localStorage.session);
  store = confStore({ session });
}

if (localStorage.token) {
  axios.defaults.headers.common['X-Jwt-Token'] = localStorage.token;
}

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
