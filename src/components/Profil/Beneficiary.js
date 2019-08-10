import React from 'react';
import { Link } from 'react-router-dom';

const Beneficiary = ({ currentUser }) => {
  return (
    <>
      {console.log(currentUser)}
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
            <h2 className="font-weight-bold">Où me trouver</h2>
            <h4>(Mon quartier/arrondissement)</h4>
            <h4>(Quartier de St-Michel / 6ème arrondissement)</h4>
            <br />
            <h2 className="font-weight-bold mb-0">Mes besoins</h2>
            {currentUser.user.descritpion !== '' && (
              <p className="my-2">currentUser.user.descritpion</p>
            )}
            <Link className="d-block mt-4 btn btn-primary" to="/donations">
              Voir les dons
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beneficiary;
