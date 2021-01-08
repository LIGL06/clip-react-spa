import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = ({user}) => (
  <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div className="sidebar-sticky pt-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link active" to="/">
            <i className="fas fa-money-bill-wave fa-2x"/>
            &nbsp;Clip 'N Pay
          </Link>
        </li>
        <li>
          <NavLink className="nav-link" to={"/customers"}>
            <i className="fas fa-user-clock" />
            &nbsp;Mis Clientes
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to={"/payments"}>
            <i className="fas fa-piggy-bank" />
            &nbsp;Mis Pagos
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/new/payment">
              <i className="fas fa-money-bill-alt" />&nbsp;Nuevo Pago
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/new/customer">
            <i className="fas fa-user-alt" />&nbsp;Nuevo Cliente
          </NavLink>
        </li>
      </ul>
      </div>
  </nav>
);

export default Sidebar;