// Deps
import React from 'react';
import { Link } from 'react-router-dom';
// Actions
import { SessionActions } from "../actions/Session";

const Header = ({ user }) => (
  <nav className="navbar sticky-top flex-md-nowrap p-0 shadow " style={{ background: 'rgb(252, 76, 2)' }}>
    <Link to="/" className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" style={{ color: '#fff' }}>
      <i className="far fa-user" />
      <span>&nbsp;{user.name}</span>
    </Link>
    <ul className="navbar-nav px-3s">
      <li className="nav-item text-nowrap">
        <Link to="/logout" className="navbar-nav px-3" style={{ color: '#fff' }}>
          <span onClick={SessionActions.logout}><i className="fas fa-sign-out-alt" />&nbsp;Cerrar Sesión</span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;