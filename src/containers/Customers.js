// Deps
import React from 'react';
// Components
import Customer from '../components/Customer';
// Mock Models
import MockCustomer from '../models/Customer';

class Customers extends React.Component {
  render() {
    return (
      <>
        <hr className="mb-4" />
        <h2>Mis Clientes</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Dirección</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1001</td>
              <td>Lorem</td>
              <td>Ipsum</td>
              <td>dolor</td>
              <td>sit</td>
              <td>eves</td>
            </tr>
            <Customer customer={MockCustomer} />
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Customers;