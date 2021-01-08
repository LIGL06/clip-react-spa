import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import '../styles/App.css';
import Dashboard from './Dashboard';

if (localStorage.token) {
  axios.defaults.headers.common['X-Jwt-Token'] = localStorage.token;
}

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
