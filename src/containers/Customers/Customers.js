// Deps
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import { getCustomers } from '../../actions/Customers';
// Components
import Customer from '../../components/Customers/Customer';
import Loader from "../../components/Loader";

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
            </tr>
            </thead>
            <tbody>
            {
              customers.length ? (
                <>
                  {
                    customers.map(customer => <Customer customer={customer} key={customer.id} />)
                  }
                </>
              ) : <tr>
                <td colSpan="5">No hay clientes...</td>
              </tr>
            }
            </tbody>
          </table>
          <div className="row">
            <div className="col-md-4 offset-md-5">
              {loading ? <Loader /> : null}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state.customers
});

export default connect(mapStateToProps, { getCustomers })(Customers);