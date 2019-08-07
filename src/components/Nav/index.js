import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import CurrentUser from './currentUser';

import './nav.scss';
import logo_dark from '../../assets/img/logo-atp-blanc.png';
import logo_light from '../../assets/img/logo-atp-black.png';

const Nav = ({ currentUser, role, theme, deconnexion }) => (
  <nav className={`navbar navbar-expand-lg navbar-${theme}`}>
    <Link key="/logo" className="navbar-brand" to="/">
      {theme === 'dark' ? (
        <img src={logo_dark} alt="logo-atp" />
      ) : (
        <img src={logo_light} alt="logo-atp" />
      )}
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
          <a className="nav-link" href="http://localhost:3000#qui-sommes-nous">
            Qui sommes-nous
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://localhost:3000#comment-ca-marche">
            Comment ça marche
          </a>
        </li>
        <li className="nav-item">
          <NavLink exact to="/contact" key="/contact" className="nav-link" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        {currentUser.user === undefined && (
          <>
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
          </>
        )}
        {currentUser.user !== undefined && (
          <CurrentUser currentUser={currentUser} role={role} deconnexion={deconnexion} />
        )}
      </ul>
    </div>
  </nav>
);

Nav.propTypes = {
  currentUser: PropTypes.func.isRequired,
  role: PropTypes.func.isRequired,
  deconnexion: PropTypes.func.isRequired
};

export default Nav;
