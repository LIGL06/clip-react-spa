import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ user }) => (
  <div className="home">
    <h1>¡Hola, { user && user.legalName ? user.legalName.split(' ')[0] : '' }!</h1>
    <h2>¿Qué deseas hacer?</h2>
    <span className="spacer"/>
    <div className="shortcuts">
      <Link to={ "/customers"} className="shortcut">
          <i className="fas fa-user-clock fa-2x"/>
          &nbsp;Mis Clientes
      </Link>
      <Link to={ "/payments"} className="shortcut">
        <i className="fas fa-user-clock fa-2x"/>
        &nbsp;Mis Pagos
      </Link>
    </div>
  </div>
);

export default Home;