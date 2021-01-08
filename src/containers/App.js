import React from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/App.css';
import Dashboard from './Dashboard';

function App() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
    </Switch>
  );
}

export default App;
