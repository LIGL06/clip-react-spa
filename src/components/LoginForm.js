import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderedField } from "./renderedField";

const required = value => value ? undefined : 'Requerido';

class LoginForm extends Component {
  render() {
    const { error, handleSubmit, pure, dirty } = this.props;
    return (
      <form onSubmit={handleSubmit} className="container text-left">
        <div className="row">
          <div className="col-md-12 mb-3">
            <Field name="name" component={renderedField} type="text" label="Nombre(s):"
                   placeholder="Paco Pedro de la Mar" validate={[ required ]} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-3">
            <Field name="email" component={renderedField} type="email" label="E-mail:"
                   placeholder="paco@pedrode.lamar"validate={[ required ]} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-8 offset-2">
            <button type="submit" className="btn btn-block btn-primary" disabled={pure && !dirty}>Login</button>
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