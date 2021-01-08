// Deps
import React from 'react';
import { connect } from 'react-redux';
// Components
import PaymentForm from '../components/PaymentForm';
// Actions
import { postPayment } from "../actions/Payments";

class NewPayment extends React.Component {
  state = {
    message: '',
    loading: false
  };

  handleSubmit = (values) => {
    const { dispatch } = this.props;
    dispatch(
      postPayment(values)
    );
  };

  render() {
    return (
      <>
        <hr className="mb-4" />
        <h2>Nuevo Pago</h2>
        <PaymentForm onSubmit={this.handleSubmit} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  payment: state.payment
});

export default connect(mapStateToProps)(NewPayment);