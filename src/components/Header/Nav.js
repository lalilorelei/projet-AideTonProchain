import React from 'react';
import logo_blanc from '../../assets/img/logo-atp-blanc.png';

const Nav = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">
                <img src={logo_blanc} alt="logo-atp" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Accueil <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Qui sommes-nous</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Comment ça marche</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <div className="btn btn-outline-light">Inscription</div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Connexion</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;