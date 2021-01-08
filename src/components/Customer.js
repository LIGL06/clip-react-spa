import React from 'react';

const Payment = ({customer}) => (
  <tr>
    <td>{customer.id}</td>
    <td>{customer.name}</td>
    <td>{customer.last_name}</td>
    <td>{customer.email}</td>
    <td>{customer.phone_number}</td>
    <td>{JSON.stringify(customer.address)}</td>
    <td>{customer.h5}</td>
  </tr>
);

export default Payment;