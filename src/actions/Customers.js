// Deps
import axios from 'axios';
import { push } from 'connected-react-router';
// Types
const GET_CUSTOMERS = 'GET_CUSTOMERS';
const GET_CUSTOMER = 'GET_CUSTOMER';
const PUT_CUSTOMER = 'PUT_CUSTOMERS';
const GET_CUSTOMERS_FULFILLED = 'GET_CUSTOMERS_FULFILLED';
const GET_CUSTOMER_FULFILLED = 'GET_CUSTOMER_FULFILLED';
const PUT_CUSTOMER_FULFILLED = 'PUT_CUSTOMER__FULFILLED';
// Actions
export const fetchCustomers = () => ({
  type: GET_CUSTOMERS
});

export const fetchCustomer = (id) => {
  return {
    type: GET_CUSTOMER,
    id
  }
};

export const updateCustomer = () => {
  return {
    type: PUT_CUSTOMER
  }
};

export const fetchCustomerFulfilled = customer => {
  return {
    type: GET_CUSTOMER_FULFILLED,
    customer
  }
};

export const updateCustomerFulfilled = customer => {
  return {
    type: PUT_CUSTOMER_FULFILLED,
    customer
  }
};

export const fetchCustomersFulfilled = customers => ({
  type: GET_CUSTOMERS_FULFILLED,
  customers
});

export const getCustomers = () => async (dispatch) => {
  dispatch(fetchCustomers());
  await axios.get('/api/customers/list').then(res => {
    const customers = res.data;
    dispatch(fetchCustomersFulfilled(customers));
  }).catch(error => alert('Error al obtener clientes'));
};

export const getCustomer = (id) => async (dispatch) => {
  dispatch(fetchCustomer(id));
  await axios.get(`/api/customers/get/${id}`).then(res => {
    const customer = res.data;
    dispatch(fetchCustomerFulfilled(customer));
  }).catch(error => alert('Error al obtener cliente'));
};

// Duck Update User
export const putUpdate = (action, userId) => async (dispatch) => {
  dispatch(updateCustomer());
  return axios.put(`/api/customers/update/${userId}`, action).then(res => {
    dispatch(updateCustomerFulfilled(res.data));
    dispatch(push('/customers'));
  }).catch(error => alert('Error al actualizar cliente'));
};

export default function (state = { loading: true, customers: [], Customer: {} }, action) {
  switch (action.type) {
    case GET_CUSTOMERS_FULFILLED:
      return {
        ...state,
        customers: action.customers,
        loading: false
      };
    case GET_CUSTOMERS:
      return {
        ...state,
        loading: false
      };
    case GET_CUSTOMER_FULFILLED:
      return {
        ...state,
        customer: { ...action.customer },
        loading: false
      };
    case GET_CUSTOMER:
      return {
        ...state,
        loading: false
      };
    case PUT_CUSTOMER_FULFILLED:
      return {
        ...state,
        customer: { ...action.customer },
        loading: false
      };
    case PUT_CUSTOMER:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};