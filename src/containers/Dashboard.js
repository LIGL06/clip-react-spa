// Deps
import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
// Containers
import NewPayment from './NewPayment';
import Payments from './Payments';
import Customers from './Customers';
// Components
import Home from '../components/Home';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

class Dashboard extends React.Component {
  render() {
    const session = {
      user: {
        legalName: 'Luis Iván García Luna'
      }
    };
    const { user } = session;
    if (!session) return <Redirect to="/login"/>;
    return (
      <>
        <Header user={user}/>
        <div className="container-fluid">
          <div className="row">
            <Sidebar user={user} />
            <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <Switch>
                <Route path="/new" component={ NewPayment }/>
                <Route path="/payments" component={ Payments }/>
                <Route path="/customers" component={ Customers }/>
                <Route path="/" component={ () => <Home user={user}/> }/>
              </Switch>
            </main>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;