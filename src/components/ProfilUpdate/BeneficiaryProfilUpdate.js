import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';

const BeneficiaryProfilUpdate = ({ currentUser, updateProfil, role, token }) => {
  const [img, setImg] = useState({});

  const handleFile = e => {
    console.log(e.target.files[0]);
    setImg(e.target.files[0]);
  };

  const onUpdate = e => {
    e.preventDefault();
    const data = {};
    Array.from(e.target).forEach(el => {
      if (el.value !== '') {
        data[el.name] = el.value;
      }
    });
    delete data.avatar;

    let formData = null;
    if (e.target.avatar.value !== '') {
      formData = new FormData();
      formData.append('avatar', img);
      formData.append('name', 'avatar');
    }
    updateProfil(data, formData, role, token);
  };

  return (
    <>
      <form className="mb-4" onSubmit={onUpdate}>
        <h2>Mes informations personnelles</h2>
        <Input
          type="text"
          label="Adresse email"
          name="email"
          id="email"
          placeholder={currentUser.user.email}
          disabled={true}
        />
        <Input
          type="text"
          label="Nom d'utilisateur"
          name="username"
          id="username"
          placeholder={currentUser.user.username}
          disabled={true}
          fieldHelp={"Votre nom d'utilisateur et votre email ne peuvent pas être modifiés."}
        />
        <Input
          type="text"
          name="firstname"
          placeholder={currentUser.user.firstname}
          className="form-control"
          label="Prénom"
        />
        <Input
          type="text"
          name="lastname"
          className="form-control"
          placeholder={currentUser.user.lastname}
          label="Nom"
        />
        <h2 className="mt-5">Mon mot de passe</h2>
        <Input
          type="password"
          name="password"
          className="form-control"
          label="Nouveau mot de passe"
          placeholder="Nouveau mot de passe"
        />
        <h2 className="mt-5">Mes informations de bénéficiaire</h2>
        <Input
          type="text"
          name="localistaion"
          className="form-control"
          label="Quartier/arrondissement"
          placeholder="Mon quartier / où me trouver ?"
        />

        <label className="form-group-label" htmlFor="bio">
          Ma biographie
        </label>
        <textarea
          className="form-control mt-3"
          name="message"
          id="bio"
          aria-label="With textarea"
          rows="5"
          placeholder="Modifier ma biographie"
        />
        <label className="form-group-label mt-3" htmlFor="need">
          Mes besoins
        </label>
        <textarea
          className="form-control mt-2"
          name="need"
          id="need"
          aria-label="With textarea"
          rows="5"
          placeholder="Modifer mes besoins"
        />
        <br />
        <Input
          type="text"
          className="form-control"
          name="place"
          label="Où me rencontrer"
          id="editmyplace"
          placeholder="Où me rencontrer"
        />
        <div class="form-group">
          <label for="avatar">Votre avatar</label>
          <input
            type="file"
            class="form-control-file"
            id="avatar"
            name="avatar"
            accept="image/*"
            onChange={e => handleFile(e)}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="mt-4 btn btn-primary btn-lg">
            Confirmer
          </button>
        </div>
      </form>
    </>
  );
};

BeneficiaryProfilUpdate.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default BeneficiaryProfilUpdate;
