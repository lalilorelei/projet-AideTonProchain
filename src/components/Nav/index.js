import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './nav.scss';
import logo_dark from '../../assets/img/logo-atp-blanc.png';
import logo_light from '../../assets/img/logo-atp-black.png';

const Nav = ({ theme }) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${theme}`}>
      <Link key="/logo" className="navbar-brand" to="/">
        {theme === 'dark' ? <img src={logo_dark} alt="logo-atp" /> : <img src={logo_light} alt="logo-atp" />}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to="/" key="/" className="nav-link" activeClassName="active">
              Accueil
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/qui-sommes-nous" key="/qui-sommes-nous" className="nav-link" activeClassName="active">
              Qui sommes-nous ?
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/comment-ca-marche"
              key="/comment-ca-marche"
              className="nav-link"
              activeClassName="active"
            >
              Comment ça marche
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/contact" key="/contact" className="nav-link" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink exact to="/register" key="/register" className="nav-link">
              Inscription
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/login" key="/login" className="nav-link">
              Connexion
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
