// Deps
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import { getCustomers } from '../actions/Customers';
// Components
import Customer from '../components/Customer';
import Loader from "../components/Loader";
// Mock Models
import MockCustomer from '../models/Customer';

class Customers extends React.Component {
  static propTypes = {
    getCustomers: PropTypes.func.isRequired
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

  render() {
    const { customers } = this.props;
    const { loading } = this.state;
    return (
      <>
        <hr className="mb-4" />
        <h2>Mis Clientes</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Dirección</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>999</td>
              <td>Luis Iván</td>
              <td>García Luna</td>
              <td>luis.garcialuna@outlook.com</td>
              <td>8334114394</td>
              <td>{JSON.stringify(MockCustomer.address)}</td>
            </tr>
            <Customer customer={MockCustomer} />
            {
              customers.length ? (
                <>
                  {
                    loading ? (
                      <Loader />
                    ) : (
                      customers.map(customer => <Customer customer={customer} />)
                    )
                  }
                </>
              ) : null
            }
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state.customers
});

export default connect(mapStateToProps, { getCustomers })(Customers);