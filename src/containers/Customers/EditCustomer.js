// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Components
import Loader from "../../components/Loader";
// Actions
import { putCustomer, getCustomer } from '../../actions/Customers';

class EditCustomer extends Component {
  static propTypes = {
    getCustomer: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      message: '',
      loading: true,
      customer: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    this.props.getCustomer(match.params.id).then(() => {
      this.setState({ loading: false });
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { customer } = this.props;
    const { name, last_name, email, phone_number } = this.state;
    const request = {
      name: name && customer.name !== name ? name : customer.name,
      last_name: last_name && customer.last_name !== last_name ? last_name : customer.last_name,
      email: email && customer.email !== email ? email : customer.email,
      phone_number: phone_number && customer.phone_number !== phone_number ? phone_number : customer.phone_number,
    }
    const { match, history } = this.props;
    this.setState({ loading: true });
    this.props.putCustomer(request, match.params.id).then(() => {
      this.setState({ loading: false });
      history.push('/customers');
    });
  };

  render() {
    const { customer } = this.props;
    const { loading, message } = this.state;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="titlebar">
            <h1>Editar Cliente</h1>
            {
              loading ? <Loader /> : (
                <form onSubmit={this.handleSubmit} className="container">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label>Nombre(s):</label>
                      <input name="name" type="text" className="form-control"
                             defaultValue={customer.name} onChange={this.handleChange} />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>Apellido(s):</label>
                      <input name="last_name" type="text" className="form-control"
                             defaultValue={customer.last_name} onChange={this.handleChange} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label>Apellido(s):</label>
                      <input name="email" type="email" className="form-control"
                             defaultValue={customer.email} onChange={this.handleChange} />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>Apellido(s):</label>
                      <input name="phone_number" type="number" className="form-control"
                             defaultValue={customer.phone_number} onChange={this.handleChange} />
                    </div>
                  </div>

                  <hr className="mb-4" />
                  <div className="row mt-5">
                    <button type="submit" className="btn btn-md btn-primary offset-md-10" disabled={loading}>Editar
                      Cliente
                    </button>
                    {message && <strong>{message}</strong>}
                  </div>
                </form>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  session: state.session,
  customer: state.customers.customer,
});

export default connect(mapStateToProps, { getCustomer, putCustomer })(EditCustomer);