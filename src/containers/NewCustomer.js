// Deps
import React from 'react';
import { connect } from 'react-redux';
// Components
import CustomerForm from "../components/CustomerForm";
// Actions
import { postCustomer } from '../actions/Customers';

class NewCustomer extends React.Component {
  state = {
    message: '',
    loading: false
  };

  handleSubmit = (values) => {
    const { dispatch } = this.props;
    dispatch(
      postCustomer(values)
    );
  };

  render() {
    return (
      <>
        <hr className="mb-4" />
        <h2>Nuevo Cliente</h2>
        <CustomerForm onSubmit={this.handleSubmit} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  customer: state.customer
});

export default connect(mapStateToProps)(NewCustomer);