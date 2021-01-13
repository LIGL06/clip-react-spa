import React from 'react';
import { Link } from 'react-router-dom';

const Payment = ({ customer }) => (
  <tr>
    <td>{customer.id}</td>
    <td>{customer.name}</td>
    <td>{customer.last_name}</td>
    <td>{customer.email}</td>
    <td>{customer.phone_number}</td>
    <td>
      <Link to={`/customers/${customer.id}`}>Editar</Link>
    </td>
  </tr>
);

export default Payment;