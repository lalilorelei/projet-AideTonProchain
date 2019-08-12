import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import Footer from 'components/Footer';
import './profilUpdate.scss';

const DonorProfilUpdate = ({ currentUser, updateProfil, role, token }) => {
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
          label="Votre mot de passe"
          placeholder="Nouveau mot de passe"
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

DonorProfilUpdate.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default DonorProfilUpdate;
