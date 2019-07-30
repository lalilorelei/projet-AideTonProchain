import React from 'react';

import Header from 'components/Header';
import ProductSelector from 'components/ProductSelector';
import './profil.scss';
import { FaClock } from 'react-icons/fa';

class Profil extends React.Component {
  render() {
    return (
      <>
        <Header title="Profil " />
        <div className="container mt-4 py-5">
          <div className="row justify-content-center">
            <div className="col col-lg-8 text-center">
              <h1>Le café des amis</h1>
              <p>12 rue Paul Gaugin</p>
              <p>75012 Paris</p>
              <p>
                <FaClock />
                Horaires
              </p>
              <p>Lundi au samedi</p>
              <p> 01-xx-xx-xx-xx</p>
              <p> 01-xx-xx-xx-xx</p>
              <a href="#" class="badge badge-primary">
                Voir sur la carte
              </a>
              <ProductSelector />
              <div className="profile-controls">
                <button class="btn btn-primary" type="submit">
                  Modifier mon profil
                </button>
                <br />
                <button class="btn btn-primary" type="submit">
                  Voir mes produits
                </button>
                <br />
                <button class="btn btn-primary" type="submit">
                  Suivre les transactions
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profil;
