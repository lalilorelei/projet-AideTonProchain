import React from 'react';
import { Link } from 'react-router-dom';

const Beneficiary = ({ currentUser, role }) => {
  console.log(role);
  const beneficiary = currentUser.user;
  return (
    <>
      <h2>Mes informations personnelles</h2>
      <div className="profile-group mb-3">
        <p className="mb-1 font-weight-bold">Nom d'utilisateur</p>
        <span>
          {beneficiary.username && beneficiary.username !== '' && beneficiary.username !== undefined
            ? beneficiary.username
            : 'Non renseigné'}
        </span>
      </div>
      <div className="profile-group mb-3">
        <p className="mb-1 font-weight-bold">Adresse email</p>
        <span>
          {beneficiary.email && beneficiary.email !== '' && beneficiary.email !== undefined
            ? beneficiary.email
            : 'Non renseigné'}
        </span>
        <p className="text-small mt-2 text-muted">Visible uniquement par vous</p>
      </div>

      <h2 className="mt-5">Mes informations de bénéficiaire</h2>

      <div className="profile-group mb-3">
        <p className="mb-1 font-weight-bold">Mon quartier</p>
        <span>
          {beneficiary.localisation &&
          beneficiary.localisation.address !== '' &&
          beneficiary.localisation.address !== undefined
            ? beneficiary.location.adress
            : 'Aucune adresse enregistrée'}
        </span>
      </div>

      <div className="profile-group mb-3">
        <p className="mb-1 font-weight-bold">Mes besoins</p>
        <span>
          {beneficiary.description &&
          beneficiary.description.need !== '' &&
          beneficiary.description.need !== undefined
            ? beneficiary.description.need
            : 'Aucun besoin enregistré'}
        </span>
      </div>

      <div className="profile-group mb-3">
        <p className="mb-1 font-weight-bold">Ma biographie</p>
        <span>
          {beneficiary.description &&
          beneficiary.description.bio !== '' &&
          beneficiary.description.bio !== undefined
            ? beneficiary.description.bio
            : 'Aucune biographie enregistrée'}
        </span>
      </div>

      <div className="profile-group mb-3">
        <p className="mb-1 font-weight-bold">Où me trouver</p>
        <span>
          {beneficiary.description &&
          beneficiary.description.place !== '' &&
          beneficiary.description.place !== undefined
            ? beneficiary.description.place
            : 'Aucun lieu enregistré'}
        </span>
      </div>
    </>
  );
};

export default Beneficiary;
