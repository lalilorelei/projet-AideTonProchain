import React from 'react';
import { Link } from 'react-router-dom';
import Footer from 'components/Footer';

const Beneficiary = ({ currentUser, role }) => {
  console.log(role);
  const beneficiary = currentUser.user;
  return (
    <>
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
            <h3 className="font-weight-bold my-2">Nom d'utilisateur</h3>
            {beneficiary.username}
            <h3 className="font-weight-bold my-2">Mon quartier</h3>
            {beneficiary.location !== undefined && (
              <p>
                {beneficiary.location.adress !== '' && (
                  <p className="my-2">{beneficiary.location.adress}</p>
                )}
                {beneficiary.location.adress === '' && (
                  <p className="my-2">Aucune adresse enregistrée</p>
                )}
              </p>
            )}
            {beneficiary.location === undefined && (
              <p className="my-2">Aucune adresse enregistrée</p>
            )}

            <h3 className="font-weight-bold mb-0">Mes besoins</h3>
            {beneficiary.description !== undefined && (
              <p>
                {beneficiary.description.need !== '' && (
                  <p className="my-2">{beneficiary.description.need}</p>
                )}
                {beneficiary.description.need === '' && (
                  <p className="my-2">Aucun besoin enregistrée</p>
                )}
              </p>
            )}
            {beneficiary.description === undefined && (
              <p className="my-2">Aucun besoin enregistrée</p>
            )}

            <h3 className="font-weight-bold mb-0">Ma biographie</h3>
            {beneficiary.description !== undefined && (
              <p>
                {beneficiary.description.bio !== '' && (
                  <p className="my-2">{beneficiary.description.bio}</p>
                )}
                {beneficiary.description.bio === '' && (
                  <p className="my-2">Aucune biographie enregistrée</p>
                )}
              </p>
            )}
            {beneficiary.description === undefined && (
              <p className="my-2">Aucune biographie enregistrée</p>
            )}

            <h3 className="font-weight-bold mb-0">Où me trouver</h3>
            {beneficiary.description !== undefined && (
              <p>
                {beneficiary.description.place !== '' && (
                  <p className="my-2">{beneficiary.description.place}</p>
                )}
                {beneficiary.description.place === '' && (
                  <p className="my-2">Aucun lieu enregistré</p>
                )}
              </p>
            )}
            {beneficiary.description === undefined && <p className="my-2">Aucun lieu enregistré</p>}
            {role === 'beneficiary' && (
              <>
                <Link className="d-block mt-4 btn btn-primary" to="/donations">
                  Voir les dons
                </Link>
                <Link className="d-block mt-4 btn btn-primary" to="/shopkeeper">
                  Trouver un commerce
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Beneficiary;
