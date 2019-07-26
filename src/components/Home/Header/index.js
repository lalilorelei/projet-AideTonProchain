import React from 'react';

import './header.scss';
import Nav from '../../Nav'; 

const Header = ({theme}) => {
    return(
    <>
        <header>
            <Nav theme={theme} />
            <div className="container mt-4 text-white py-5">
                <div className="row justify-content-center">
                    <div className="col col-lg-8 text-center">
                        <h1>Lien social et dons aux personnes dans le besoin</h1>
                        <p className="mt-5">
                            I think we need to start from scratch. I'll pay you in a week we don't need to pay upfront i hope you understand we are a startup, nor we don't need a contract, do we or can you please change the color theme of the website
                        </p>
                        <button className="btn btn-lg btn-custom-orange font-weight-bold mt-5 mb-4">Découvrir comment ça marche</button>
                    </div>
                </div>
            </div>
        </header>
    </>
    );
};

export default Header;