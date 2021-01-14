import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => (
  <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" style={{ height: '100vh' }}>
    <div className="sidebar-sticky pt-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            <p className="font-weight-bold text-muted"><i className="fas fa-money-bill-wave" />
              &nbsp;Clip 'N Pay</p>
          </Link>
        </li>
        <li>
          <NavLink className="nav-link" to="/customers">
            <i className="fas fa-users" />
            &nbsp;Mis Clientes
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/payments">
            <i className="fas fa-piggy-bank" />
            &nbsp;Mis Pagos
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/new/customer">
            <i className="fas fa-user-alt" />&nbsp;Nuevo Cliente
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/new/payment">
            <i className="fas fa-money-bill-alt" />&nbsp;Nuevo Pago
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/balance">
            <i className="fas fa-university" />&nbsp;Detalle de cuenta
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Sidebar;