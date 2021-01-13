// Deps
import axios from 'axios';
// Constants
const url = `${process.env.REACT_APP_API_URL}/session`;
// Types
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_FAILED = 'LOGIN_FAILED';
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
  await axios.post(url, action).then(res => {
    if (res.data.token && res.data.session) {
      const { token, session } = res.data;
      dispatch(loginFulfilled(session));
      localStorage.token = token;
      localStorage.session = JSON.stringify(session);
      axios.defaults.headers.common['X-Jwt-Token'] = token;
    }
  });
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
export default function (state = { session: {}, message: null }, action) {
  switch (action.type) {
    case LOGIN_FULFILLED:
      return {
        ...state,
        session: action.session
      };
    case LOGIN_START:
      return {
        ...state
      };
    case LOGIN_FAILED:
      return {
        ...state,
        message: action.message
      };
    default:
      return state;
  }
};