// Deps
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/App.css';
// Containers
import Dashboard from './Dashboard';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Dashboard} />
      </Switch>
    );
  }
}

export default App;
