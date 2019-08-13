import React from 'react';

const Beneficiary = ({ currentUser, role, publicProfile }) => {
  console.log(role);
  const beneficiary = currentUser.user;
  return (
    <>
      {!publicProfile && (
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
        </>
      )}

      <div className="profile-group mb-3">
        <p className="mb-1 font-weight-bold">Mon quartier</p>
        <span>
          {beneficiary.localisation &&
          beneficiary.localisation.address !== '' &&
          beneficiary.localisation.address !== undefined
            ? beneficiary.localisation.address
            : 'Aucune adresse enregistrée'}
        </span>
      </div>

      <div className="profile-group mb-3">
        <p className="mb-1 font-weight-bold">Description</p>
        <span>
          {beneficiary.description !== '' && beneficiary.description !== undefined
            ? beneficiary.description
            : 'Aucune description enregistrée'}
        </span>
      </div>
    </>
  );
};

export default Beneficiary;
