// Deps
import React from 'react';
// Components
// import PaymentForm from '../components/PaymentForm';
// Mock Models
// import MockPayment from '../models/Charge';

class NewCustomer extends React.Component {
  render() {
    return (
      <>
        <hr className="mb-4"/>
        <h2>Nuevo Cliente</h2>
        <form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label for="firstName">Nombre(s)</label>
              <input type="text" className="form-control" id="firstName" placeholder="" value=""
                     required=""/>
              <div className="invalid-feedback">s
                Valid first name is required.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label for="lastName">Apellido(s)</label>
              <input type="text" className="form-control" id="lastName" placeholder="" value=""
                     required=""/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label for="email">Email <span className="text-muted">(Optional)</span></label>
            <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="mb-3">
            <label for="address">Dirección</label>
            <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                   required=""/>
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label for="zip">Telefono</label>
              <input type="text" className="form-control" id="zip" placeholder="" required=""/>
              <div className="invalid-feedback">
                Telefono required.
              </div>
            </div>
          </div>
          <button className="btn btn-primary btn-lg btn-block" type="submit">Guardar Cliente</button>
        </form>
      </>
    );
  }
}

export default NewCustomer;