import React from 'react';

import './header.scss';
import Nav from 'containers/Nav';

class Header extends React.Component {
  render() {
    const { page, title } = this.props;
    return (
      <>
        {page === 'home' ? (
          <header className="home-header">
            <Nav theme="dark" />
            <div className="container mt-4 text-white py-5">
              <div className="row justify-content-center">
                <div className="col col-lg-8 text-center">
                  <h1>Lien social et dons aux personnes dans le besoin</h1>
                  <p className="mt-5">
                    I think we need to start from scratch. I'll pay you in a week we don't need to
                    pay upfront i hope you understand we are a startup, nor we don't need a
                    contract, do we or can you please change the color theme of the website
                  </p>
                  <a
                    href="http://localhost:3000#comment-ca-marche"
                    className="btn btn-lg btn-custom-accent font-weight-bold mt-5 mb-4"
                  >
                    Découvrir comment ça marche
                  </a>
                </div>
              </div>
            </div>
          </header>
        ) : (
          <header>
            <Nav theme="light" />
            <div className="container mt-4 py-5">
              <div className="row justify-content-center">
                <div className="col col-lg-8 text-center">
                  <h1>{title}</h1>
                </div>
              </div>
            </div>
          </header>
        )}
      </>
    );
  }
}

export default Header;
