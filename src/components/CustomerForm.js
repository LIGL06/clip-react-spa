import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} className="form-control" />
      <div className="invalid-feedback">
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  </div>
);

class CustomerForm extends Component {
  render() {
    const { error, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <Field name="firstName" component={renderField} type="text" label="Nombre(s):"
                   placeholder="Ej. Paco Pedro" />
          </div>
          <div className="col-md-6 mb-3">
            <Field name="lastName" component={renderField} type="text" label="Apellido(s):"
                   placeholder="Ej. De la Mar" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <Field name="email" component={renderField} type="email" label="E-mail:" placeholder="Ej. paco@dela.mar" />
          </div>
          <div className="col-md-6 mb-3">
            <Field name="phone" component={renderField} type="number" label="Teléfono:" placeholder="Ej. 8331234567" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Field name="address" component={renderField} type="text" label="Dirección:"
                   placeholder="Ej. En una piña debajo del mar" />
          </div>
        </div>

        <hr className="mb-4" />
        <div className="row mt-5">
          <button type="submit" className="btn btn-md btn-primary offset-md-10">Guardar Cliente</button>
          {error && <strong>{error}</strong>}
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'CustomerForm'
})(CustomerForm)