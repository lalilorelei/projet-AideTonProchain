import React from 'react';

import { Link } from 'react-router-dom';

const Donor = ({ currentUser }) => {
  return (
    <>
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-4">
            <p>Mes coordonnées</p>
            <p className="font-weight-bold mb-0">Mon adresse</p>
            <span>
              15 Rue de l'exemple
              <br />
              75011 - Paris
            </span>
            <a href="mailto:contact@aidetonprochain.com" className="d-block mt-3">
              mon-email@mail.com
            </a>
            <Link className="mt-4 btn btn-primary btn-block" to="/profil-update">
              Editer profil
            </Link>
            <Link className="mt-4 btn btn-primary btn-block" to="/donations">
              Voir les dons
            </Link>
            <Link className="mt-4 btn btn-primary btn-block" to="/add-product">
              Ajouter un produit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donor;
