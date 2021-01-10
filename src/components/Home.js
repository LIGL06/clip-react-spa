import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ user }) => (
  <div className="container text-center mt-5">
    <h2>¡Hola, {user && user.name ? user.name.split(' ')[0] : ''}!</h2>
    <p className="lead text-muted">
      Lorem
    </p>
    <Link className="btn btn-primary btn-lg m-3" to="/customers">
      <i className="fas fa-users" />&nbsp; Mis Clientes
    </Link>
    <Link className="btn btn-primary btn-lg m-3" to="/payments">
      <i className="fas fa-piggy-bank" />&nbsp; Mis Pagos
    </Link>
  </div>
);

export default Home;