// Deps
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
// Components
import PaymentForm from '../../components/Payments/PaymentForm';
// Actions
import { postPayment } from "../../actions/Payments";
import { getCustomers } from "../../actions/Customers";

class NewPayment extends React.Component {
  static propTypes = {
    getCustomers: PropTypes.func.isRequired,
    postPayment: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.getCustomers().then(() => {
      this.setState({ loading: false });
    });
  }

  handleSubmit = (values) => {
    this.props.postPayment(values).then(() => {
      this.setState({ loading: false });
    });
  };

  render() {
    const { customers } = this.props;
    const { loading } = this.state;
    return (
      <>
        <hr className="mb-4" />
        <h2>Nuevo Pago</h2>
        <PaymentForm onSubmit={this.handleSubmit} customers={customers} loading={loading} />
      </>
    );
  }

}

const mapStateToProps = state => ({
  ...state.payment,
  ...state.customers
});

export default connect(mapStateToProps, { getCustomers, postPayment })(NewPayment);