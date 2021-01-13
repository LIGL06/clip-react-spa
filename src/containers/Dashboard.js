// Deps
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router';
// Containers
import NewPayment from './Payments/NewPayment';
import NewCustomer from './Customers/NewCustomer';
import Payments from './Payments/Payments';
import Customers from './Customers/Customers';
import Balance from "./Balance";
// Components
import Home from '../components/Home';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import EditCustomer from './Customers/EditCustomer';

class Dashboard extends React.Component {
  render() {
    const { session } = this.props;
    const { user } = session;
    if (!user) return <Redirect to="/login" />;
    return (
      <>
        <Header user={user} />
        <div className="container-fluid">
          <div className="row">
            <Sidebar user={user} />
            <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <Switch>
                <Route path="/new/customer" component={NewCustomer} />
                <Route path="/new/payment" component={NewPayment} />
                <Route path="/payments" component={Payments} />
                <Route path="/customers/:id" component={EditCustomer} />
                <Route path="/customers" component={Customers} />
                <Route path="/balance" component={Balance} />
                <Route path="/" component={() => <Home user={user} />} />
              </Switch>
            </main>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.session
});

export default connect(mapStateToProps)(Dashboard);