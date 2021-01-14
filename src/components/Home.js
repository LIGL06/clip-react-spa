import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ user }) => (
  <div className="container text-center mt-5">
    <h2>¡Hola, {user && user.name ? user.name.split(' ')[0] : ''}!</h2>
    <p className="lead text-muted">
      Éste es un challenge para Clip, una Single Page App en React. <br />
      Que se conecta a una Express API, que a su vez consume una API de OpenPay. <br />
      Pudiendo crear clientes, editarlos y a su vez realizarles cargos.
    </p>
    <h5>¿Qué deseas hacer?</h5>
    <Link className="btn btn-primary btn-lg m-3" to="/customers">
      <i className="fas fa-users" />&nbsp; Mis Clientes
    </Link>
    <Link className="btn btn-primary btn-lg m-3" to="/payments">
      <i className="fas fa-piggy-bank" />&nbsp; Mis Pagos
    </Link>
  </div>
);

export default Home;