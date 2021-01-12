// Deps
import React from 'react';
import { connect } from 'react-redux';
// Components
import PaymentForm from '../../components/Payments/PaymentForm';
// Actions
import { postPayment } from "../../actions/Payments";
import { getCustomers } from "../../actions/Customers";

class NewPayment extends React.Component {
  state = {
    message: '',
    loading: false
  };

  componentDidMount() {
    getCustomers()
    const { dispatch } = this.props;
    dispatch(
      getCustomers()
    );
  }

  handleSubmit = (values) => {
    const { dispatch } = this.props;
    dispatch(
      postPayment(values)
    );
  };

  render() {
    console.log(this.props);
    const { customers } = this.props;
    return (
      <>
        <hr className="mb-4" />
        <h2>Nuevo Pago</h2>
        <PaymentForm onSubmit={this.handleSubmit} customers={customers} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  payment: state.payment
});

export default connect(mapStateToProps)(NewPayment);