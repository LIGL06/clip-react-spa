import React from 'react';
import { render } from '@testing-library/react';
import App from '../containers/App';

test('renders Clip OpenPay App text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Clip OpenPay App/i);
  expect(linkElement).toBeInTheDocument();
});
