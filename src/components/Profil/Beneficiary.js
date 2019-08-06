import React from 'react';

const Beneficiary = ({ currentUser }) => {
  return (
    <>
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <div className="card-header">Où me trouver</div>
              <div className="card-body">
                <p className="font-weight-bold mb-0">Mon quartier/arrondissement</p>
                <span>Quartier de St-Michel / 6ème arrondissement</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <div className="card-header">Mes besoins</div>
              <div className="card-body">
                <p className="font-weight-bold mb-0">Ce dont j'ai besoin</p>
                <span>
                  J'aurais besoin d'une couverture pour l'hiver, ainsi que des croquettes pour mon
                  chien.
                </span>
              </div>
            </div>
          </div>

          {/* Manque le bouton  */}
          <div className="d-flex col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
            <button type="submit" className="d-block mt-4 btn btn-custom-accent">
              Voir les dons
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beneficiary;
