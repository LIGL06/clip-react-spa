import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';
import { createBrowserHistory } from 'history';
//
import confStore from '../store';

const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  return next(action);
};

export const renderWithProvider = (
  ui,
  { initialState, store = confStore(createBrowserHistory(), initialState), ...options } = {},
) => {
  const rendered = render(<Provider store={store}>{ui}</Provider>, options);
  store.dispatch = jest.fn();
  return {
    ...rendered,
    rerender: renderWithProvider,
  };
};

export const renderWithProviderAndRouter = (
  ui,
  {
    initialState,
    store = confStore(createBrowserHistory(), initialState),
    history = createBrowserHistory(),
    ...options
  } = {},
) => {
  store.dispatch = jest.fn();
  const getComponent = (children = ui) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  );

  const renderProps = {
    ...render(getComponent(), options),
  };

  return {
    ...renderProps,
    history,
    rerender: children => renderProps.rerender(getComponent(children)),
  };
};