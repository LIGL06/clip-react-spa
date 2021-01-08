// Deps
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import { getPayments } from '../actions/Payments';
// Components
import Payment from '../components/Payment';
import Loader from "../components/Loader";
// Mock Models
import MockPayment from '../models/Charge';

class Payments extends React.Component {
  static propTypes = {
    getPayments: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.getPayments().then(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { payments } = this.props;
    const { loading } = this.state;
    return (
      <>
        <hr className="mb-4" />
        <h2>Mis Pagos</h2>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
            <tr>
              <th>#</th>
              <th>Metodo</th>
              <th>Cantidad</th>
              <th>Descripción</th>
              <th>Orden</th>
              <th>Tajeta</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1001</td>
              <td>Tarjeta</td>
              <td>1234</td>
              <td>Comprando pizzas</td>
              <td>1234-f</td>
              <td>Simón</td>
            </tr>
            <Payment payment={MockPayment} />
            {
              payments.length ? (
                <>
                  {
                    loading ? (
                      <Loader />
                    ) : (
                      payments.map(customer => <Payment customer={customer} />)
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
  ...state.payments
});

export default connect(mapStateToProps, { getPayments })(Payments);