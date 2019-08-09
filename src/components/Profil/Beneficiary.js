import React from 'react';
import { Link } from 'react-router-dom';

const Beneficiary = ({ currentUser }) => {
  return (
    <>
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
            <h2 className="font-weight-bold">Où me trouver</h2>
            <h3>Mon quartier/arrondissement</h3>
            <h3>Quartier de St-Michel / 6ème arrondissement</h3>
            <br />
            <h2 className="font-weight-bold mb-0">Mes besoins</h2>
            <h3>J'aurais besoin d'une couverture pour l'hiver, ainsi que des croquettes pour mon chien.</h3>
            <Link className="d-block mt-4 btn btn-custom-accent" to="/donations">
              Voir les dons
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beneficiary;
