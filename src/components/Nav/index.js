import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './nav.scss';
import logo_dark from '../../assets/img/logo-atp-blanc.png';
import logo_light from '../../assets/img/logo-atp-black.png';

class Nav extends React.Component {
  render() {

    const { theme, user } = this.props;
    console.log(user);

    return(
      <nav className={`navbar navbar-expand-lg navbar-${theme}`}>
        <Link key="/logo" className="navbar-brand" to="/">
          {
            theme === 'dark' 
            ? <img src={logo_dark} alt="logo-atp" />
            : <img src={logo_light} alt="logo-atp" />  
          }
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                key="/"
                className="nav-link"
                activeClassName="active"
              >
              Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000#qui-sommes-nous">Qui sommes-nous</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000#comment-ca-marche">Comment ça marche</a>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                key="/contact"
                className="nav-link"
                activeClassName="active"
              >
              Contact
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {
              user !== ''?
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {user.username} ({user.role})
                  </a>
                  {
                    user.role === 'donor' ?
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="nav-link" href="#">Personnes&nbsp;à&nbsp;proximité</a>
                        <a className="nav-link" href="#">Commerces&nbsp;à&nbsp;proximité</a>
                        <a className="nav-link" href="#">Mes&nbsp;dons</a>
                        <div className="dropdown-divider"></div>
                        <a className="nav-link" href="#">Mon&nbsp;profil</a>
                        <a className="nav-link text-danger" href="#">Déconnexion</a>
                      </div>
                    : user.role === 'shopkeeper' ?
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="nav-link" href="#">Gérer&nbsp;mes&nbsp;produits</a>
                        <a className="nav-link" href="#">Suivi&nbsp;des&nbsp;transactions</a>
                        <div className="dropdown-divider"></div>
                        <a className="nav-link" href="#">Mon&nbsp;profil</a>
                        <a className="nav-link text-danger" href="#">Déconnexion</a>
                      </div>
                    : user.role === 'beneficiary' ?
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="nav-link" href="#">Commerces&nbsp;à&nbsp;proximité</a>
                        <a className="nav-link" href="#">Mes&nbsp;dons</a>
                        <div className="dropdown-divider"></div>
                        <a className="nav-link" href="#">Mon&nbsp;profil</a>
                        <a className="nav-link text-danger" href="#">Déconnexion</a>
                      </div>
                    : <p>Humm...</p>
                  }
                </li>
              : 
                <>
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/register"
                      key="/register"
                      className="nav-link"
                    >
                    Inscription
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/login"
                      key="/login"
                      className="nav-link"
                    >
                    Connexion
                    </NavLink>
                  </li>
                </>
            }
          </ul>
        </div>
      </nav>
    );
  }
};

export default Nav;
