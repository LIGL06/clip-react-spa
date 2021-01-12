// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Components
import Loader from "../components/Loader";
// Actions
import { putCustomer, getCustomer } from '../actions/Customers';

class EditCustomer extends Component {
  static propTypes = {
    getCustomer: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      message: '',
      loading: true
    }
  }

  componentDidMount() {
    const { match } = this.props;
    this.props.getCustomer(match.params.id).then(() => {
      this.setState({ loading: false });
      console.log(this.props);
    });
  }

  changeView = () => {
  };

  handleSubmit = (values) => {
    const { match } = this.props;
    this.props.putCustomer({
      
    }, match.params.id);
  };

  handleMomentSubmit = (event) => {
    event.preventDefault();
    const { match } = this.props;
    this.props.putCustomer({
      
    }, match.params.id);
  };

  render() {
    const {customer} = this.props;
    const { momentStyle, loading } = this.state;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="titlebar">
            <h1>Editar Cliente</h1>
            {loading ? <Loader /> : (
              <span className="text-muted"><i className="fas fa-user"/>&nbsp;{customer.name}</span>
            )}
          </div>
          {
            momentStyle ? (
              <form onSubmit={ this.handleMomentSubmit } className="container page">
                <div className="row">
                  <div className="col-xs-12 col-md-4">
                    <label htmlFor="day">Fecha y Hora</label>
                    <input name="day" type="data" disabled/>
                  </div>
                </div>
                <div className="row">
                  <button type="submit" className="primary col-md-offset-9">Crear Check-Out</button>
                </div>
              </form>
            ) : null
          }
          <div className="row">
            <button className="neutral" onClick={ this.changeView }>{
              momentStyle ? 'Usar otra fecha y hora' : 'Usar actual'
            }</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ( {
  session: state.session,
  customer: state.customers.customer,
} );

export default connect(mapStateToProps, { getCustomer, putCustomer })(EditCustomer);