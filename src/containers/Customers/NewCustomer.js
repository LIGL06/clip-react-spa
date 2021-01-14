// Deps
import React from 'react';
import { connect } from 'react-redux';
// Components
import CustomerForm from "../../components/Customers/CustomerForm";
// Actions
import { postCustomer } from '../../actions/Customers';

class NewCustomer extends React.Component {
  state = {
    message: '',
    loading: false
  };

  handleSubmit = (values) => {
    const { postCustomer, history } = this.props;
    this.setState({ loading: true });
    postCustomer(values).then(() => {
      this.setState({ loading: false });
      history.push('/customers');
    }).catch(error => this.setState({ loading: false, message: error.message }));
  };

  render() {
    const { loading, message } = this.state;
    return (
      <>
        <hr className="mb-4" />
        <h2>Nuevo Cliente</h2>
        <CustomerForm onSubmit={this.handleSubmit} loading={loading} message={message} />
      </>
    );
  }

}

const mapStateToProps = (state) => ({
  customer: state.customer
});

export default connect(mapStateToProps, { postCustomer })(NewCustomer);