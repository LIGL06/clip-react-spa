// Deps
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import { getBalance } from '../actions/Balance';
// Components
import Loader from "../components/Loader";

class Balance extends React.Component {
  static propTypes = {
    getBalance: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.getBalance().then(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { balance } = this.props;
    const { loading } = this.state;
    return (
      <>
        <hr className="mb-4" />
        <h2>Detalle de cuenta</h2>
        <div className="row">
          <div className="col-md-12">
            {loading ? <Loader /> : (
              <>
                <ul>
                  <li>Nombre: {balance.name}</li>
                  <li>E-mail: {balance.email}</li>
                  <li>Phone: {balance.phone}</li>
                  <li>Status: {balance.status}</li>
                  <li>Balance: ${balance.balance}</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state.balance
});

export default connect(mapStateToProps, { getBalance })(Balance);