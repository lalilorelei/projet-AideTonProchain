import React from 'react';
import { Link } from 'react-router-dom';

const Beneficiary = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <>
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
            <h3 className="font-weight-bold my-2">Nom d'utilisateur</h3>
            {currentUser.user.username}
            <h3 className="font-weight-bold my-2">Mon quartier</h3>
            {currentUser.user.location !== undefined && (
              <p>
                {currentUser.user.location.adress !== '' && <p className="my-2">{currentUser.user.location.adress}</p>}
                {currentUser.user.location.adress === '' && <p className="my-2">Aucune adresse enregistrée</p>}
              </p>
            )}
            {currentUser.user.location === undefined && <p className="my-2">Aucune adresse enregistrée</p>}

            <h3 className="font-weight-bold mb-0">Mes besoins</h3>
            {currentUser.user.description !== undefined && (
              <p>
                {currentUser.user.description.need !== '' && (
                  <p className="my-2">{currentUser.user.description.need}</p>
                )}
                {currentUser.user.description.need === '' && <p className="my-2">Aucun besoin enregistrée</p>}
              </p>
            )}
            {currentUser.user.description === undefined && <p className="my-2">Aucun besoin enregistrée</p>}

            <h3 className="font-weight-bold mb-0">Ma biographie</h3>
            {currentUser.user.description !== undefined && (
              <p>
                {currentUser.user.description.bio !== '' && <p className="my-2">{currentUser.user.description.bio}</p>}
                {currentUser.user.description.bio === '' && <p className="my-2">Aucune biographie enregistrée</p>}
              </p>
            )}
            {currentUser.user.description === undefined && <p className="my-2">Aucune biographie enregistrée</p>}

            <h3 className="font-weight-bold mb-0">Où me trouver</h3>
            {currentUser.user.description !== undefined && (
              <p>
                {currentUser.user.description.place !== '' && (
                  <p className="my-2">{currentUser.user.description.place}</p>
                )}
                {currentUser.user.description.place === '' && <p className="my-2">Aucun lieu enregistré</p>}
              </p>
            )}
            {currentUser.user.description === undefined && <p className="my-2">Aucun lieu enregistré</p>}

            <Link className="d-block mt-4 btn btn-primary" to="/donations">
              Voir les dons
            </Link>
            <Link className="d-block mt-4 btn btn-primary" to="/shopkeeper">
              Trouver un commerce
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beneficiary;
