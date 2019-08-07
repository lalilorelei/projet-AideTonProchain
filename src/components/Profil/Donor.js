import React from 'react';

import { Link } from 'react-router-dom';

const Donor = ({ currentUser }) => {
  return (
    <>
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <div className="card-header text-center">Mes coordonnées</div>
              <div className="card-body">
                <p className="font-weight-bold mb-0">Mon adresse</p>
                <span>
                  15 Rue de l'exemple
                  <br />
                  75011 - Paris
                </span>
                <a href="mailto:contact@aidetonprochain.com" className="d-block mt-3">
                  mon-email@mail.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <Link className="mt-4 btn btn-custom-accent btn-block" to="/profil-update">
              Editer profil
            </Link>
            <Link className="mt-4 btn btn-custom-accent btn-block" to="/donations">
              Voir les dons
            </Link>
            <Link className="mt-4 btn btn-custom-accent btn-block" to="/add-product">
              Ajouter un produit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donor;