import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user }) => (
  <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow ">
    <Link to="/profile" className="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
      <i className="fas fa-user-alt"/>
      <span>&nbsp;{ user.legalName }</span>
    </Link>
    <ul className="navbar-nav px-3s">
      <li className="nav-item text-nowrap">
        <Link className="navbar-nav px-3" style={{color: '#fff'}} to="/logout">
          <span><i className="fas fa-sign-out-alt"/>&nbsp;Cerrar Sesión</span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Header;