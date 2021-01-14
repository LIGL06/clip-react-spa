// Deps
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import { getPayments } from '../../actions/Payments';
// Components
import Payment from '../../components/Payments/Payment';
import Loader from "../../components/Loader";

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
            {
              payments.length ? (
                <>
                  {
                    payments.map(payment => <Payment payment={payment} key={payment.id} />)
                  }
                </>
              ) : <tr>
                <td colSpan="6">No hay pagos...</td>
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
  ...state.payments
});

export default connect(mapStateToProps, { getPayments })(Payments);