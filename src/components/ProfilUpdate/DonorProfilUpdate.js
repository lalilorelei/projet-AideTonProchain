import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
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
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
            <form className="mb-4" onSubmit={onUpdate}>
              <Input
                type="text"
                name="firstname"
                placeholder={currentUser.user.firstname}
                className="form-control"
                label="Votre prénom"
              />
              <Input
                type="text"
                name="lastname"
                className="form-control"
                placeholder={currentUser.user.lastname}
                label="Votre nom"
              />
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
              <button type="submit" className="mt-4 btn btn-primary btn-block">
                Confirmer
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

DonorProfilUpdate.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default DonorProfilUpdate;
