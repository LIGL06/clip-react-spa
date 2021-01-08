// Deps
import React from 'react';
// Components
// import PaymentForm from '../components/PaymentForm';
// Mock Models
// import MockPayment from '../models/Charge';

class NewPayment extends React.Component {
  render() {
    return (
      <>
        <hr className="mb-4"/>
        <h2>Nuevo Pago</h2>
        <form>
          <div className="d-block my-3">
            <div className="custom-control custom-radio">
              <input id="credit" name="paymentMethod" type="radio" className="custom-control-input"
                     required=""/>
              <label className="custom-control-label" for="credit">Credit card</label>
            </div>
            <div className="custom-control custom-radio">
              <input id="debit" name="paymentMethod" type="radio" className="custom-control-input"
                     required=""/>
              <label className="custom-control-label" for="debit">Debit card</label>
            </div>
            <div className="custom-control custom-radio">
              <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input"
                     required=""/>
              <label className="custom-control-label" for="paypal">PayPal</label>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label for="cc-name">Name on card</label>
              <input type="text" className="form-control" id="cc-name" placeholder="" required=""/>
              <small className="text-muted">Full name as displayed on card</small>
              <div className="invalid-feedback">
                Name on card is required
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label for="cc-number">Credit card number</label>
              <input type="text" className="form-control" id="cc-number" placeholder="" required=""/>
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-3">
              <label for="cc-expiration">Expiration</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder="" required=""/>
              <div className="invalid-feedback">
                Expiration date required
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <label for="cc-cvv">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="" required=""/>
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>
          <hr className="mb-4"/>
          <button className="btn btn-primary btn-lg btn-block" type="submit">Guardar Pago</button>
        </form>
      </>
    );
  }
}

export default NewPayment;