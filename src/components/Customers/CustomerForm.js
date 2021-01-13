import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderedField } from "../renderedField";

const required = value => value ? undefined : 'Requerido';

class CustomerForm extends Component {
  render() {
    const { error, handleSubmit, pure, dirty, loading } = this.props;
    return (
      <form onSubmit={handleSubmit} className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <Field name="name" component={renderedField} type="text" label="Nombre(s):"
                   placeholder="Ej. Paco Pedro" validate={[required]} />
          </div>
          <div className="col-md-6 mb-3">
            <Field name="last_name" component={renderedField} type="text" label="Apellido(s):"
                   placeholder="Ej. De la Mar" validate={[required]} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <Field name="email" component={renderedField} type="email" label="E-mail:"
                   placeholder="Ej. paco@dela.mar" validate={[required]} />
          </div>
          <div className="col-md-6 mb-3">
            <Field name="phone_number" component={renderedField} type="number" label="Teléfono:"
                   placeholder="Ej. 8331234567" validate={[required]} />
          </div>
        </div>

        <hr className="mb-4" />
        <div className="row mt-5">
          <button type="submit" className="btn btn-md btn-primary offset-md-10"
                  disabled={loading || (pure && !dirty)}>Guardar Cliente
          </button>
          {error && <strong>{error}</strong>}
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'CustomerForm'
})(CustomerForm)