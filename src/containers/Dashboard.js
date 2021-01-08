// Deps
import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
// Containers
// import NewPayment from './NewPayment';
// import PaymentPreview from './PaymentPreview';
// import Payments from './Payments';
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
        <Sidebar user={user} />
        <Header user={user}/>
        <div className="dashboard">
          <div className="container">
            <Switch>
              {/* <Route path="/new" component={ NewPayment }/> */}
              {/* <Route path="/payments/:id" component={ PaymentPreview }/> */}
              {/* <Route path="/payments" component={ Payments }/> */}
              <Route path="/" component={ () => <Home user={user}/> }/>
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;