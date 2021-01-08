// Deps
import axios from 'axios';
import { push } from 'connected-react-router';
// Types
const GET_PAYMENTS = 'GET_PAYMENTS';
const GET_PAYMENT = 'GET_PAYMENT';
const PUT_PAYMENT = 'PUT_PAYMENTS';
const GET_PAYMENTS_FULFILLED = 'GET_PAYMENTS_FULFILLED';
const GET_PAYMENT_FULFILLED = 'GET_PAYMENT_FULFILLED';
const PUT_PAYMENT_FULFILLED = 'PUT_PAYMENT__FULFILLED';
// Actions
export const fetchPayments = () => ({
  type: GET_PAYMENTS
});

export const fetchPayment = (id) => {
  return {
    type: GET_PAYMENT,
    id
  }
};

export const updatePayment = () => {
  return {
    type: PUT_PAYMENT
  }
};

export const fetchPaymentFulfilled = PAYMENT => {
  return {
    type: GET_PAYMENT_FULFILLED,
    PAYMENT
  }
};

export const updatePaymentFulfilled = PAYMENT => {
  return {
    type: PUT_PAYMENT_FULFILLED,
    PAYMENT
  }
};

export const fetchPaymentsFulfilled = PAYMENTs => ({
  type: GET_PAYMENTS_FULFILLED,
  PAYMENTs
});

export const getPayments = () => async (dispatch) => {
  dispatch(fetchPayments());
  await axios.get('/api/payments/list').then(res => {
    const payments = res.data;
    dispatch(fetchPaymentsFulfilled(payments));
  }).catch(error => alert('Error al obtener pagos'));
};

export const getPAYMENT = (id) => async (dispatch) => {
  dispatch(fetchPayment(id));
  await axios.get(`/api/payments/get/${id}`).then(res => {
    const payment = res.data;
    dispatch(fetchPaymentFulfilled(payment));
  }).catch(error => alert('Error al obtener pago'));
};

// Duck Update User
export const putUpdate = (action, userId) => async (dispatch) => {
  dispatch(updatePayment());
  return axios.put(`/api/payments/update/${userId}`, action).then(res => {
    dispatch(updatePaymentFulfilled(res.data));
    dispatch(push('/payments'));
  }).catch(error => alert('Error al actualizar pago'));
};

export default function (state = { loading: true, payments: [], payment: {} }, action) {
  switch (action.type) {
    case GET_PAYMENTS_FULFILLED:
      return {
        ...state,
        payments: action.payments,
        loading: false
      };
    case GET_PAYMENTS:
      return {
        ...state,
        loading: false
      };
    case GET_PAYMENT_FULFILLED:
      return {
        ...state,
        payment: { ...action.payment },
        loading: false
      };
    case GET_PAYMENT:
      return {
        ...state,
        loading: false
      };
    case PUT_PAYMENT_FULFILLED:
      return {
        ...state,
        payment: { ...action.payment },
        loading: false
      };
    case PUT_PAYMENT:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};