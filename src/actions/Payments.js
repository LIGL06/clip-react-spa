// Deps
import axios from 'axios';
import { push } from 'connected-react-router';
// Constants
const url = 'http://localhost:5001/payments';
// Types
const GET_PAYMENTS = 'GET_PAYMENTS';
const GET_PAYMENT = 'GET_PAYMENT';
const POST_PAYMENT = 'POST_PAYMENT';
const PUT_PAYMENT = 'PUT_PAYMENT';
const GET_PAYMENTS_FULFILLED = 'GET_PAYMENTS_FULFILLED';
const GET_PAYMENT_FULFILLED = 'GET_PAYMENT_FULFILLED';
const POST_PAYMENT_FULFILLED = 'POST_PAYMENT_FULFILLED';
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

export const createPayment = () => ({
  type: POST_PAYMENT
});

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

export const createPaymentFulfilled = payment => {
  return {
    type: POST_PAYMENT_FULFILLED,
    payment
  }
};

export const updatePaymentFulfilled = payment => {
  return {
    type: PUT_PAYMENT_FULFILLED,
    payment
  }
};

export const fetchPaymentsFulfilled = payments => ({
  type: GET_PAYMENTS_FULFILLED,
  payments
});

export const getPayments = () => async (dispatch) => {
  dispatch(fetchPayments());
  await axios.get(url).then(res => {
    const payments = res.data;
    dispatch(fetchPaymentsFulfilled(payments));
  }).catch(error => alert('Error al obtener pagos'));
};

export const getPAYMENT = (id) => async (dispatch) => {
  dispatch(fetchPayment(id));
  await axios.get(`${url}/${id}`).then(res => {
    const payment = res.data;
    dispatch(fetchPaymentFulfilled(payment));
  }).catch(error => alert('Error al obtener pago'));
};

export const postPayment = (payment) => async (dispatch) => {
  payment.device_session_id = localStorage.deviceSessionId;
  console.log(payment);
  dispatch(createPayment(payment));
  await axios.post(url).then(res => {
    const payment = res.data;
    dispatch(createPaymentFulfilled(payment));
  }).catch(error => alert('Error al crear pago'));
};

// Duck Update User
export const putUpdate = (action, userId) => async (dispatch) => {
  dispatch(updatePayment());
  return axios.put(`${url}/${userId}`, action).then(res => {
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