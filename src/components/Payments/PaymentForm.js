import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderedField } from "../renderedField";
import Loader from "../Loader";

const required = value => value ? undefined : 'Requerido';
const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters as min` : undefined
const minLength15 = minLength(15)
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength16 = maxLength(16)

class PaymentForm extends Component {
  render() {
    const { error, handleSubmit, customers, loading, pure, dirty } = this.props;
    return (
      <form onSubmit={handleSubmit} className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Cliente:</label>
            {
              loading ? (
                <Loader />
              ) : (
                <Field component="select" name="customer" className="form-control">
                  <option disabled />
                  {
                    customers.length ? (
                      customers.map(customer => <option value={customer.id}
                                                        key={customer.id}>{customer.name} {customer.last_name}</option>)
                    ) : null
                  }
                </Field>
              )
            }
          </div>
          <div className="col-md-6 mb-3">
            <Field name="holder_name" component={renderedField} type="text" label="Nombre del Tarjeta Habiente:"
                   placeholder="Ej. Juan Paco Pedro de la Mar" validate={[required]} />
          </div>
          <div className="col-md-6 mb-3">
            <Field name="card_number" component={renderedField} type="number" label="Número de Tarjeta:"
                   placeholder="Ej. 4111111111111111" validate={[required, minLength15, maxLength16]} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-3">
            <Field name="expiration" component={renderedField} type="text" label="Expiración:"
                   placeholder="Ej. 02/28" validate={[required]} />
          </div>
          <div className="col-md-3 mb-3">
            <Field name="cvv2" component={renderedField} type="number" label="CVV:"
                   placeholder="Ej. 117" validate={[required]} />
          </div>
          <div className="col-md-3 mb-3">
            <Field name="amount" component={renderedField} type="number" label="Cantidad:"
                   placeholder="Ej. 999.99" validate={[required]} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Field name="description" component={renderedField} type="text" label="Concepto:"
                   placeholder="Ej. Turbo Wabster 3000" validate={[required]} />
          </div>
        </div>

        <hr className="mb-4" />
        <div className="row mt-5">
          <button type="submit" className="btn btn-md btn-primary offset-md-10"
                  disabled={loading || (pure && !dirty)}>Guardar Pago
          </button>
          {error && <strong>{error}</strong>}
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'PaymentForm'
})(PaymentForm)