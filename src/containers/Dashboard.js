// Deps
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router';
// Containers
import NewPayment from './NewPayment';
import NewCustomer from './NewCustomer';
import Payments from './Payments';
import Customers from './Customers';
// Components
import Home from '../components/Home';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import EditCustomer from './EditCustomer';

class Dashboard extends React.Component {
  render() {
    const { session } = this.props;
    if (!session) return <Redirect to="/login" />;
    const { user } = session;
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
                {/* <Route path="/payments/:id" component={EditPayment} /> */}
                <Route path="/payments" component={Payments} />
                <Route path="/customers/:id" component={EditCustomer} />
                <Route path="/customers" component={Customers} />
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