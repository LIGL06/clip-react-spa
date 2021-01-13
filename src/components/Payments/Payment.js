import React from 'react';

const Payment = ({ payment }) => (
  <tr>
    <td>{payment.id}</td>
    <td>{payment.method}</td>
    <td>{payment.amount}</td>
    <td>{payment.description}</td>
    <td>{payment.order_id}</td>
    <td>id: {payment.card.holder_name} - {payment.card.card_number} - {payment.card.brand}</td>
  </tr>
);

export default Payment;