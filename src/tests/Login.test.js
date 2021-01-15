import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Login from '../containers/Login';
import { renderWithProviderAndRouter } from "./utils";
import { initialState } from "./initialState";
import { session } from "./session";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = {
  session: session,
  customers: [],
  payments: [],
  balance: {}
};

test('renders Clip OpenPay App text', () => {
  const store = mockStore(initialState);
  const { container } = renderWithProviderAndRouter(<Login {...mock} />, { store });
  expect(container).toBeInTheDocument();
});
