import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderedField } from "./renderedField";

class PaymentForm extends Component {
  render() {
    const { error, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <Field name="name" component={renderedField} type="text" label="Nombre(s) del Tarjeta Habiente:"
                   placeholder="Ej. John Doe" />
          </div>
          <div className="col-md-6 mb-3">
            <Field name="card" component={renderedField} type="text" label="Número de Tarjeta:"
                   placeholder="Ej. 4111111111111111" />s
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-3">
            <Field name="expiration" component={renderedField} type="text" label="Expiración:"
                   placeholder="Ej. 02/28" />
          </div>
          <div className="col-md-3 mb-3">
            <Field name="cvv" component={renderedField} type="number" label="CVV:"
                   placeholder="Ej. 117" />
          </div>
          <div className="col-md-3 mb-3">
            <Field name="amount" component={renderedField} type="number" label="Cantidad:"
                   placeholder="Ej. 999.99" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Field name="description" component={renderedField} type="text" label="Concepto:"
                   placeholder="Ej. Turbo Wabster 3000" />
          </div>
        </div>

        <hr className="mb-4" />
        <div className="row mt-5">
          <button type="submit" className="btn btn-md btn-primary offset-md-10">Guardar Pago</button>
          {error && <strong>{error}</strong>}
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'PaymentForm'
})(PaymentForm)