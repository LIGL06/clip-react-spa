// Deps
import axios from 'axios';
// Constants
const url = 'http://localhost:5001/payments/balance';
// Types
export const BALANCE_START = 'BALANCE_START';
export const BALANCE_FAILED = 'BALANCE_FAILED';
export const BALANCE_FULFILLED = 'BALANCE_FULFILLED';
// Actions
export const balance = () => {
  return {
    type: BALANCE_START
  }
};

export const balanceFulfilled = balance => {
  return {
    type: BALANCE_FULFILLED,
    balance
  }
};

export const balanceFailed = message => {
  return {
    type: BALANCE_FAILED,
    message
  }
};

export const getBalance = () => async (dispatch) => {
  dispatch(balance());
  await axios.get(url).then(res => {
    const balance = res.data;
    dispatch(balanceFulfilled(balance));
    return balance;
  }).catch(() => {
    dispatch(balanceFailed('Ups! hubo un al obtener balance'));
  });
};
// Reducer
export default function (state = { balance: {}, message: null }, action) {
  switch (action.type) {
    case BALANCE_FULFILLED:
      return {
        ...state,
        balance: action.balance
      };
    case BALANCE_START:
      return {
        ...state
      };
    case BALANCE_FAILED:
      return {
        ...state,
        message: action.message
      };
    default:
      return state;
  }
};