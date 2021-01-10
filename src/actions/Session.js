// Deps
import axios from 'axios';
import { push } from 'connected-react-router';
// Types
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
// Actions
export const login = () => {
  return {
    type: LOGIN_START
  }
};

export const loginFulfilled = session => {
  return {
    type: LOGIN_FULFILLED,
    session
  }
};

// Duck Login
export const postLogin = action => async (dispatch) => {
  dispatch(login());
  await axios.post('/api/session/login', action).then(res => {
    if (res.data.token && res.data.session) {
      const { token, session } = res.data;
      dispatch(loginFulfilled(session, token));
      localStorage.token = token;
      localStorage.session = JSON.stringify(session);
      axios.defaults.headers.common['X-Jwt-Token'] = token;
      dispatch(push('/'));
    }
  }).catch(error => console.error(error.message));
};
// Duck Logout
export const SessionActions = {
  logout() {
    delete localStorage.session;
    delete localStorage.token;
    window.location = '/login';
    return null;
  }
};
// Reducer
export default function (state = { loading: true, session: {}, newEmployee: {}, message: null }, action) {
  switch (action.type) {
    case LOGIN_FULFILLED:
      return {
        ...state,
        session: action.session,
        loading: false,
      };
    case LOGIN_START:
      return {
        ...state,
      };
    default:
      return state;
  }
};