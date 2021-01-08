// Deps
import React from 'react';
// Components
import Payment from '../components/Payment';
// Mock Models
import MockPayment from '../models/Charge'

class Payments extends React.Component {
  render() {
    return(
      <>
        <h2>Mis Pagos</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Metodo</th>
                <th>Cantidad</th>
                <th>Descripción</th>
                <th>Orden</th>
                <th>Tajeta</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1001</td>
                <td>Tarjeta</td>
                <td>1234</td>
                <td>Comprando pizzas</td>
                <td>1234-f</td>
                <td>Simón</td>
              </tr>
              <Payment payment={MockPayment}/>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Payments;