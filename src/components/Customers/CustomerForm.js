// Deps
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// Components
import { renderedField } from "../renderedField";
import Loader from "../Loader";
// Validations
const required = value => value ? undefined : 'Requerido';
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Email inválido' : undefined;
const minLength = min => value =>
  value && value.length < min ? `Debe tener ${min} caracteres como mínino` : undefined
const minLength4 = minLength(4);
const minLength10 = minLength(10);

class CustomerForm extends Component {
  render() {
    const { error, handleSubmit, pure, dirty, loading } = this.props;
    return (
      <form onSubmit={handleSubmit} className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <Field name="name" component={renderedField} type="text" label="Nombre(s):"
                   placeholder="Ej. Paco Pedro" validate={[required, minLength4]} />
          </div>
          <div className="col-md-6 mb-3">
            <Field name="last_name" component={renderedField} type="text" label="Apellido(s):"
                   placeholder="Ej. De la Mar" validate={[required, minLength4]} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <Field name="email" component={renderedField} type="email" label="E-mail:"
                   placeholder="Ej. paco@dela.mar" validate={[required, email, minLength4]} />
          </div>
          <div className="col-md-6 mb-3">
            <Field name="phone_number" component={renderedField} type="number" label="Teléfono:"
                   placeholder="Ej. 8331234567" validate={[required, minLength10]} />
          </div>
        </div>

        <hr className="mb-4" />
        <div className="row mt-5">
          <Loader />
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