import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderedField } from "./renderedField";

class LoginForm extends Component {
  render() {
    const { error, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="container">
        <div className="row">
          <div className="col-md-8 mb-3">
            <Field name="name" component={renderedField} type="text" label="Nombre(s):"
                   placeholder="Paco Pedro de la Mar" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mb-3">
            <Field name="email" component={renderedField} type="email" label="E-mail:"
                   placeholder="paco@pedrode.lamar" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-8">
            <button type="submit" className="btn btn-block btn-primary">Login</button>
          </div>
        </div>
        {error && <strong>{error}</strong>}
      </form>
    );
  }
}

export default reduxForm({
  form: 'LoginForm'
})(LoginForm)