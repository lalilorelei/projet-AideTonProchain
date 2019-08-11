import React from 'react';
import Footer from 'components/Footer';
import { Link } from 'react-router-dom';

const Donor = ({ currentUser }) => {
  return (
    <>
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-4">
            <p className="font-weight-bold my-2">Mes coordonnées</p>
            <span>
              Prénom: {currentUser.user.firstname}
              <br />
              Nom : {currentUser.user.lastname}
            </span>
            <br />
            <span>Email : {currentUser.user.email}</span>
            <Link className="mt-4 btn btn-primary btn-block" to="/donations">
              Voir les dons
            </Link>
            <Link className="mt-4 btn btn-primary btn-block" to="/shopkeeper">
              Trouver un commerce
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Donor;
