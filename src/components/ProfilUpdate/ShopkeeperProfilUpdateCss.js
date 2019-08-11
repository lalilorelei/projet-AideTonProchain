import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import './profilUpdate.scss';

const ShopkeeperProfilUpdateCss = ({ currentUser, updateProfil, role, token }) => {
  const [img, setImg] = useState({});

  const handleFile = e => {
    console.log(e.target.files[0]);
    setImg(e.target.files[0]);
  };

  const onUpdate = e => {
    e.preventDefault();

    const data = {
      opening_hours: {
        monday: {
          morning_open: Number(e.target.monday__morning_open.value),
          morning_close: Number(e.target.monday__morning_close.value),
          afternoon_open: Number(e.target.monday__afternoon_open.value),
          afternoon_close: Number(e.target.monday__afternoon_close.value),
        },
        tuesday: {
          morning_open: Number(e.target.tuesday__morning_open.value),
          morning_close: Number(e.target.tuesday__morning_close.value),
          afternoon_open: Number(e.target.tuesday__afternoon_open.value),
          afternoon_close: Number(e.target.tuesday__afternoon_close.value),
        },
        thursday: {
          morning_open: Number(e.target.wednesday__morning_open.value),
          morning_close: Number(e.target.wednesday__morning_close.value),
          afternoon_open: Number(e.target.wednesday__afternoon_open.value),
          afternoon_close: Number(e.target.wednesday__afternoon_close.value),
        },
        wednesday: {
          morning_open: Number(e.target.thursday__morning_open.value),
          morning_close: Number(e.target.thursday__morning_close.value),
          afternoon_open: Number(e.target.thursday__afternoon_open.value),
          afternoon_close: Number(e.target.thursday__afternoon_close.value),
        },
        friday: {
          morning_open: Number(e.target.friday__morning_open.value),
          morning_close: Number(e.target.friday__morning_close.value),
          afternoon_open: Number(e.target.friday__afternoon_open.value),
          afternoon_close: Number(e.target.friday__afternoon_close.value),
        },
        saturday: {
          morning_open: Number(e.target.saturday__morning_open.value),
          morning_close: Number(e.target.saturday__morning_close.value),
          afternoon_open: Number(e.target.saturday__afternoon_open.value),
          afternoon_close: Number(e.target.saturday__afternoon_close.value),
        },
        sunday: {
          morning_open: Number(e.target.sunday__morning_open.value),
          morning_close: Number(e.target.sunday__morning_close.value),
          afternoon_open: Number(e.target.sunday__afternoon_open.value),
          afternoon_close: Number(e.target.sunday__afternoon_close.value),
        },
      },
    };

    const days = ['monday', 'tuesday', 'thursday', 'wednesday', 'friday', 'saturday', 'sunday'];
    const half = ['morning', 'afternoon'];
    const time = ['open', 'close'];

    Array.from(e.target).forEach(el => {
      if (el.value !== '' && el.name.length < 15) {
        data[el.name] = el.value;
      }
    });

    delete data.avatar;
    console.log(data);
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
          id="firstname"
          placeholder={currentUser.user.firstname}
          label="Prénom"
        />
        <Input
          type="text"
          name="lastname"
          id="lastname"
          className="form-control"
          placeholder={currentUser.user.lastname}
          label="Nom"
        />
        <h2 className="mt-5">Mon mot de passe</h2>

        <Input
          type="password"
          name="password"
          id="password"
          label="Nouveau mot de passe"
          className="form-control"
          placeholder="Nouveau mot de passe"
        />

        <h2 className="mt-5">Mon commerce</h2>
        <Input
          type="text"
          name="shopkeeper_name"
          id="shopkeeper_name"
          className="form-control"
          placeholder={currentUser.user.shopname}
          label="Nom du commerce"
        />
        <div className="form-group mt-3">
          <label>Catégories de l'établissement</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Restauration"
              id="restauration"
              name="categories"
            />
            <label className="form-check-label" htmlFor="restauration">
              Restauration
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="categories"
              value="Habillement"
              id="habillement"
            />
            <label className="form-check-label" htmlFor="habillement">
              Habillement
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="categories"
              value="Hôtellerie"
              id="hotellerie"
            />
            <label className="form-check-label" htmlFor="hotellerie">
              Hôtellerie
            </label>
          </div>
        </div>

        <Input
          type="text"
          name="localisation"
          id="localisation"
          label="Adresse du commerce"
          className="form-control"
          placeholder="Adresse du commerçant"
        />
        <Input
          type="number"
          className="form-control"
          name="phone"
          id="phone"
          label="Numéro de téléphone"
          placeholder="Numéro de téléphone"
        />
        <div className="form-group">
          <label className="form-group-label mt-3" htmlFor="description">
            Description
          </label>

          <textarea
            className="form-control mt-2"
            name="description"
            aria-label="With textarea"
            rows="5"
            placeholder="Description"
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="avatar">Votre avatar</label>
          <input
            type="file"
            className="form-control-file"
            id="avatar"
            name="avatar"
            accept="image/*"
            onChange={e => handleFile(e)}
          />
        </div>
        <h2 className="mt-5">Horaires de l'établissement</h2>
        <div className="table-container mx-md-n5">
          <table className="table ">
            <thead>
              <tr>
                <th>Jour</th>
                <th colSpan="2" className="text-center">
                  Matin
                </th>
                <th colSpan="2" className="text-center">
                  Après-midi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Lundi</th>
                <td>
                  <select className="custom-select" name="monday__morning_open">
                    <option value="">00h00</option>
                    <option value="08.00">08h00</option>
                    <option value="08.15">08h15</option>
                    <option value="08.30">08h30</option>
                    <option value="08.45">08h45</option>
                    <option value="09.00">09h00</option>
                    <option value="09.15">09h15</option>
                    <option value="09.30">09h30</option>
                    <option value="09.45">09h45</option>
                    <option value="10.00">10h00</option>
                    <option value="10.15">10h15</option>
                    <option value="10.30">10h30</option>
                    <option value="10.45">10h45</option>
                    <option value="11.00">11h00</option>
                    <option value="11.15">11h15</option>
                    <option value="11.30">11h30</option>
                    <option value="11.45">11h45</option>
                    <option value="12.00">12h00</option>
                    <option value="12.15">12h15</option>
                    <option value="12.30">12h30</option>
                    <option value="12.45">12h45</option>
                    <option value="13.00">13h00</option>
                    <option value="13.15">13h15</option>
                    <option value="13.30">13h30</option>
                    <option value="13.45">13h45</option>
                    <option value="14.00">14h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="monday__morning_close">
                    <option value="">00h00</option>
                    <option value="12.00">12h00</option>
                    <option value="12.15">12h15</option>
                    <option value="12.30">12h30</option>
                    <option value="12.45">12h45</option>
                    <option value="13.00">13h00</option>
                    <option value="13.15">13h15</option>
                    <option value="13.30">13h30</option>
                    <option value="13.45">13h45</option>
                    <option value="14.00">14h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="monday__afternoon_open">
                    <option value="">00h00</option>
                    <option value="14.00">14h00</option>
                    <option value="14.15">14h15</option>
                    <option value="14.30">14h30</option>
                    <option value="14.45">14h45</option>
                    <option value="15.00">15h00</option>
                    <option value="15.15">15h15</option>
                    <option value="15.30">15h30</option>
                    <option value="15.45">15h45</option>
                    <option value="16.00">16h00</option>
                    <option value="16.15">16h15</option>
                    <option value="16.30">16h30</option>
                    <option value="16.45">16h45</option>
                    <option value="17.00">17h00</option>
                    <option value="17.15">17h15</option>
                    <option value="17.30">17h30</option>
                    <option value="17.45">17h45</option>
                    <option value="18.00">18h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="monday__afternoon_close">
                    <option value="">00h00</option>
                    <option value="18.00">18h00</option>
                    <option value="18.15">18h15</option>
                    <option value="18.30">18h30</option>
                    <option value="18.45">18h45</option>
                    <option value="19.00">19h00</option>
                    <option value="19.15">19h15</option>
                    <option value="19.30">19h30</option>
                    <option value="19.45">19h45</option>
                    <option value="20.00">20h00</option>
                    <option value="20.15">20h15</option>
                    <option value="20.30">20h30</option>
                    <option value="20.45">20h45</option>
                    <option value="21.00">21h00</option>
                    <option value="21.15">21h15</option>
                    <option value="21.30">21h30</option>
                    <option value="21.45">21h45</option>
                    <option value="22.00">22h00</option>
                    <option value="22.15">22h15</option>
                    <option value="22.30">22h30</option>
                    <option value="22.45">22h45</option>
                    <option value="23.00">23h00</option>
                    <option value="23.15">23h15</option>
                    <option value="23.30">23h30</option>
                    <option value="23.45">23h45</option>
                    <option value="24.00">24h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>Mardi</th>
                <td>
                  <select className="custom-select" name="tuesday__morning_open">
                    <option value="">00h00</option>
                    <option value="08.00">08h00</option>
                    <option value="08.15">08h15</option>
                    <option value="08.30">08h30</option>
                    <option value="08.45">08h45</option>
                    <option value="09.00">09h00</option>
                    <option value="09.15">09h15</option>
                    <option value="09.30">09h30</option>
                    <option value="09.45">09h45</option>
                    <option value="10.00">10h00</option>
                    <option value="10.15">10h15</option>
                    <option value="10.30">10h30</option>
                    <option value="10.45">10h45</option>
                    <option value="11.00">11h00</option>
                    <option value="11.15">11h15</option>
                    <option value="11.30">11h30</option>
                    <option value="11.45">11h45</option>
                    <option value="12.00">12h00</option>
                    <option value="12.15">12h15</option>
                    <option value="12.30">12h30</option>
                    <option value="12.45">12h45</option>
                    <option value="13.00">13h00</option>
                    <option value="13.15">13h15</option>
                    <option value="13.30">13h30</option>
                    <option value="13.45">13h45</option>
                    <option value="14.00">14h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="tuesday__morning_close">
                    <option value="">00h00</option>
                    <option value="12.00">12h00</option>
                    <option value="12.15">12h15</option>
                    <option value="12.30">12h30</option>
                    <option value="12.45">12h45</option>
                    <option value="13.00">13h00</option>
                    <option value="13.15">13h15</option>
                    <option value="13.30">13h30</option>
                    <option value="13.45">13h45</option>
                    <option value="14.00">14h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="tuesday__afternoon_open">
                    <option value="">00h00</option>
                    <option value="14.00">14h00</option>
                    <option value="14.15">14h15</option>
                    <option value="14.30">14h30</option>
                    <option value="14.45">14h45</option>
                    <option value="15.00">15h00</option>
                    <option value="15.15">15h15</option>
                    <option value="15.30">15h30</option>
                    <option value="15.45">15h45</option>
                    <option value="16.00">16h00</option>
                    <option value="16.15">16h15</option>
                    <option value="16.30">16h30</option>
                    <option value="16.45">16h45</option>
                    <option value="17.00">17h00</option>
                    <option value="17.15">17h15</option>
                    <option value="17.30">17h30</option>
                    <option value="17.45">17h45</option>
                    <option value="18.00">18h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="tuesday__afternoon_close">
                    <option value="">00h00</option>
                    <option value="18.00">18h00</option>
                    <option value="18.15">18h15</option>
                    <option value="18.30">18h30</option>
                    <option value="18.45">18h45</option>
                    <option value="19.00">19h00</option>
                    <option value="19.15">19h15</option>
                    <option value="19.30">19h30</option>
                    <option value="19.45">19h45</option>
                    <option value="20.00">20h00</option>
                    <option value="20.15">20h15</option>
                    <option value="20.30">20h30</option>
                    <option value="20.45">20h45</option>
                    <option value="21.00">21h00</option>
                    <option value="21.15">21h15</option>
                    <option value="21.30">21h30</option>
                    <option value="21.45">21h45</option>
                    <option value="22.00">22h00</option>
                    <option value="22.15">22h15</option>
                    <option value="22.30">22h30</option>
                    <option value="22.45">22h45</option>
                    <option value="23.00">23h00</option>
                    <option value="23.15">23h15</option>
                    <option value="23.30">23h30</option>
                    <option value="23.45">23h45</option>
                    <option value="24.00">24h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>Mercredi</th>
                <td>
                  <select className="custom-select" name="thursday__morning_open">
                    <option value="">00h00</option>
                    <option value="08.00">08h00</option>
                    <option value="08.15">08h15</option>
                    <option value="08.30">08h30</option>
                    <option value="08.45">08h45</option>
                    <option value="09.00">09h00</option>
                    <option value="09.15">09h15</option>
                    <option value="09.30">09h30</option>
                    <option value="09.45">09h45</option>
                    <option value="10.00">10h00</option>
                    <option value="10.15">10h15</option>
                    <option value="10.30">10h30</option>
                    <option value="10.45">10h45</option>
                    <option value="11.00">11h00</option>
                    <option value="11.15">11h15</option>
                    <option value="11.30">11h30</option>
                    <option value="11.45">11h45</option>
                    <option value="12.00">12h00</option>
                    <option value="12.15">12h15</option>
                    <option value="12.30">12h30</option>
                    <option value="12.45">12h45</option>
                    <option value="13.00">13h00</option>
                    <option value="13.15">13h15</option>
                    <option value="13.30">13h30</option>
                    <option value="13.45">13h45</option>
                    <option value="14.00">14h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="thursday__morning_close">
                    <option value="">00h00</option>
                    <option value="12.00">12h00</option>
                    <option value="12.15">12h15</option>
                    <option value="12.30">12h30</option>
                    <option value="12.45">12h45</option>
                    <option value="13.00">13h00</option>
                    <option value="13.15">13h15</option>
                    <option value="13.30">13h30</option>
                    <option value="13.45">13h45</option>
                    <option value="14.00">14h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="thursday__afternoon_open">
                    <option value="">00h00</option>
                    <option value="14.00">14h00</option>
                    <option value="14.15">14h15</option>
                    <option value="14.30">14h30</option>
                    <option value="14.45">14h45</option>
                    <option value="15.00">15h00</option>
                    <option value="15.15">15h15</option>
                    <option value="15.30">15h30</option>
                    <option value="15.45">15h45</option>
                    <option value="16.00">16h00</option>
                    <option value="16.15">16h15</option>
                    <option value="16.30">16h30</option>
                    <option value="16.45">16h45</option>
                    <option value="17.00">17h00</option>
                    <option value="17.15">17h15</option>
                    <option value="17.30">17h30</option>
                    <option value="17.45">17h45</option>
                    <option value="18.00">18h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="thursday__afternoon_close">
                    <option value="">00h00</option>
                    <option value="18.00">18h00</option>
                    <option value="18.15">18h15</option>
                    <option value="18.30">18h30</option>
                    <option value="18.45">18h45</option>
                    <option value="19.00">19h00</option>
                    <option value="19.15">19h15</option>
                    <option value="19.30">19h30</option>
                    <option value="19.45">19h45</option>
                    <option value="20.00">20h00</option>
                    <option value="20.15">20h15</option>
                    <option value="20.30">20h30</option>
                    <option value="20.45">20h45</option>
                    <option value="21.00">21h00</option>
                    <option value="21.15">21h15</option>
                    <option value="21.30">21h30</option>
                    <option value="21.45">21h45</option>
                    <option value="22.00">22h00</option>
                    <option value="22.15">22h15</option>
                    <option value="22.30">22h30</option>
                    <option value="22.45">22h45</option>
                    <option value="23.00">23h00</option>
                    <option value="23.15">23h15</option>
                    <option value="23.30">23h30</option>
                    <option value="23.45">23h45</option>
                    <option value="24.00">24h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>Jeudi</th>
                <td>
                  <select className="custom-select" name="wednesday__morning_open">
                    <option value="">00h00</option>
                    <option value="08.00">08h00</option>
                    <option value="08.15">08h15</option>
                    <option value="08.30">08h30</option>
                    <option value="08.45">08h45</option>
                    <option value="09.00">09h00</option>
                    <option value="09.15">09h15</option>
                    <option value="09.30">09h30</option>
                    <option value="09.45">09h45</option>
                    <option value="10.00">10h00</option>
                    <option value="10.15">10h15</option>
                    <option value="10.30">10h30</option>
                    <option value="10.45">10h45</option>
                    <option value="11.00">11h00</option>
                    <option value="11.15">11h15</option>
                    <option value="11.30">11h30</option>
                    <option value="11.45">11h45</option>
                    <option value="12.00">12h00</option>
                    <option value="12.15">12h15</option>
                    <option value="12.30">12h30</option>
                    <option value="12.45">12h45</option>
                    <option value="13.00">13h00</option>
                    <option value="13.15">13h15</option>
                    <option value="13.30">13h30</option>
                    <option value="13.45">13h45</option>
                    <option value="14.00">14h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="wednesday__morning_close">
                    <option value="">00h00</option>
                    <option value="12.00">12h00</option>
                    <option value="12.15">12h15</option>
                    <option value="12.30">12h30</option>
                    <option value="12.45">12h45</option>
                    <option value="13.00">13h00</option>
                    <option value="13.15">13h15</option>
                    <option value="13.30">13h30</option>
                    <option value="13.45">13h45</option>
                    <option value="14.00">14h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="wednesday__afternoon_open">
                    <option value="">00h00</option>
                    <option value="14.00">14h00</option>
                    <option value="14.15">14h15</option>
                    <option value="14.30">14h30</option>
                    <option value="14.45">14h45</option>
                    <option value="15.00">15h00</option>
                    <option value="15.15">15h15</option>
                    <option value="15.30">15h30</option>
                    <option value="15.45">15h45</option>
                    <option value="16.00">16h00</option>
                    <option value="16.15">16h15</option>
                    <option value="16.30">16h30</option>
                    <option value="16.45">16h45</option>
                    <option value="17.00">17h00</option>
                    <option value="17.15">17h15</option>
                    <option value="17.30">17h30</option>
                    <option value="17.45">17h45</option>
                    <option value="18.00">18h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="wednesday__afternoon_close">
                    <option value="">00h00</option>
                    <option value="18.00">18h00</option>
                    <option value="18.15">18h15</option>
                    <option value="18.30">18h30</option>
                    <option value="18.45">18h45</option>
                    <option value="19.00">19h00</option>
                    <option value="19.15">19h15</option>
                    <option value="19.30">19h30</option>
                    <option value="19.45">19h45</option>
                    <option value="20.00">20h00</option>
                    <option value="20.15">20h15</option>
                    <option value="20.30">20h30</option>
                    <option value="20.45">20h45</option>
                    <option value="21.00">21h00</option>
                    <option value="21.15">21h15</option>
                    <option value="21.30">21h30</option>
                    <option value="21.45">21h45</option>
                    <option value="22.00">22h00</option>
                    <option value="22.15">22h15</option>
                    <option value="22.30">22h30</option>
                    <option value="22.45">22h45</option>
                    <option value="23.00">23h00</option>
                    <option value="23.15">23h15</option>
                    <option value="23.30">23h30</option>
                    <option value="23.45">23h45</option>
                    <option value="00.00">24h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>Vendredi</th>
                <td>
                  <select className="custom-select" name="friday__morning_open">
                    <option value="">00h00</option>
                    <option value="08.00">08h00</option>
                    <option value="08.15">08h15</option>
                    <option value="08.30">08h30</option>
                    <option value="08.45">08h45</option>
                    <option value="09.00">09h00</option>
                    <option value="09.15">09h15</option>
                    <option value="09.30">09h30</option>
                    <option value="09.45">09h45</option>
                    <option value="10.00">10h00</option>
                    <option value="10.15">10h15</option>
                    <option value="10.30">10h30</option>
                    <option value="10.45">10h45</option>
                    <option value="11.00">11h00</option>
                    <option value="11.15">11h15</option>
                    <option value="11.30">11h30</option>
                    <option value="11.45">11h45</option>
                    <option value="12.00">12h00</option>
                    <option value="12.15">12h15</option>
                    <option value="12.30">12h30</option>
                    <option value="12.45">12h45</option>
                    <option value="13.00">13h00</option>
                    <option value="13.15">13h15</option>
                    <option value="13.30">13h30</option>
                    <option value="13.45">13h45</option>
                    <option value="14.00">14h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="friday__morning_close">
                    <option value="">00h00</option>
                    <option value="12.00">12h00</option>
                    <option value="12.15">12h15</option>
                    <option value="12.30">12h30</option>
                    <option value="12.45">12h45</option>
                    <option value="13.00">13h00</option>
                    <option value="13.15">13h15</option>
                    <option value="13.30">13h30</option>
                    <option value="13.45">13h45</option>
                    <option value="14.00">14h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="friday__afternoon_open">
                    <option value="">00h00</option>
                    <option value="14.00">14h00</option>
                    <option value="14.15">14h15</option>
                    <option value="14.30">14h30</option>
                    <option value="14.45">14h45</option>
                    <option value="15.00">15h00</option>
                    <option value="15.15">15h15</option>
                    <option value="15.30">15h30</option>
                    <option value="15.45">15h45</option>
                    <option value="16.00">16h00</option>
                    <option value="16.15">16h15</option>
                    <option value="16.30">16h30</option>
                    <option value="16.45">16h45</option>
                    <option value="17.00">17h00</option>
                    <option value="17.15">17h15</option>
                    <option value="17.30">17h30</option>
                    <option value="17.45">17h45</option>
                    <option value="18.00">18h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="friday__afternoon_close">
                    <option value="">00h00</option>
                    <option value="18.00">18h00</option>
                    <option value="18.15">18h15</option>
                    <option value="18.30">18h30</option>
                    <option value="18.45">18h45</option>
                    <option value="19.00">19h00</option>
                    <option value="19.15">19h15</option>
                    <option value="19.30">19h30</option>
                    <option value="19.45">19h45</option>
                    <option value="20.00">20h00</option>
                    <option value="20.15">20h15</option>
                    <option value="20.30">20h30</option>
                    <option value="20.45">20h45</option>
                    <option value="21.00">21h00</option>
                    <option value="21.15">21h15</option>
                    <option value="21.30">21h30</option>
                    <option value="21.45">21h45</option>
                    <option value="22.00">22h00</option>
                    <option value="22.15">22h15</option>
                    <option value="22.30">22h30</option>
                    <option value="22.45">22h45</option>
                    <option value="23.00">23h00</option>
                    <option value="23.15">23h15</option>
                    <option value="23.30">23h30</option>
                    <option value="23.45">23h45</option>
                    <option value="24.00">24h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>Samedi</th>
                <td>
                  <select className="custom-select" name="saturday__morning_open">
                    <option value="">00h00</option>
                    <option value="08.00">08h00</option>
                    <option value="08.15">08h15</option>
                    <option value="08.30">08h30</option>
                    <option value="08.45">08h45</option>
                    <option value="09.00">09h00</option>
                    <option value="09.15">09h15</option>
                    <option value="09.30">09h30</option>
                    <option value="09.45">09h45</option>
                    <option value="10.00">10h00</option>
                    <option value="10.15">10h15</option>
                    <option value="10.30">10h30</option>
                    <option value="10.45">10h45</option>
                    <option value="11.00">11h00</option>
                    <option value="11.15">11h15</option>
                    <option value="11.30">11h30</option>
                    <option value="11.45">11h45</option>
                    <option value="12.00">12h00</option>
                    <option value="12.15">12h15</option>
                    <option value="12.30">12h30</option>
                    <option value="12.45">12h45</option>
                    <option value="13.00">13h00</option>
                    <option value="13.15">13h15</option>
                    <option value="13.30">13h30</option>
                    <option value="13.45">13h45</option>
                    <option value="14.00">14h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="saturday__morning_close">
                    <option value="">00h00</option>
                    <option value="12.00">12h00</option>
                    <option value="12.15">12h15</option>
                    <option value="12.30">12h30</option>
                    <option value="12.45">12h45</option>
                    <option value="13.00">13h00</option>
                    <option value="13.15">13h15</option>
                    <option value="13.30">13h30</option>
                    <option value="13.45">13h45</option>
                    <option value="14.00">14h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="saturday__afternoon_open">
                    <option value="">00h00</option>
                    <option value="14.00">14h00</option>
                    <option value="14.15">14h15</option>
                    <option value="14.30">14h30</option>
                    <option value="14.45">14h45</option>
                    <option value="15.00">15h00</option>
                    <option value="15.15">15h15</option>
                    <option value="15.30">15h30</option>
                    <option value="15.45">15h45</option>
                    <option value="16.00">16h00</option>
                    <option value="16.15">16h15</option>
                    <option value="16.30">16h30</option>
                    <option value="16.45">16h45</option>
                    <option value="17.00">17h00</option>
                    <option value="17.15">17h15</option>
                    <option value="17.30">17h30</option>
                    <option value="17.45">17h45</option>
                    <option value="18.00">18h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="saturday__afternoon_close">
                    <option value="">00h00</option>
                    <option value="18.00">18h00</option>
                    <option value="18.15">18h15</option>
                    <option value="18.30">18h30</option>
                    <option value="18.45">18h45</option>
                    <option value="19.00">19h00</option>
                    <option value="19.15">19h15</option>
                    <option value="19.30">19h30</option>
                    <option value="19.45">19h45</option>
                    <option value="20.00">20h00</option>
                    <option value="20.15">20h15</option>
                    <option value="20.30">20h30</option>
                    <option value="20.45">20h45</option>
                    <option value="21.00">21h00</option>
                    <option value="21.15">21h15</option>
                    <option value="21.30">21h30</option>
                    <option value="21.45">21h45</option>
                    <option value="22.00">22h00</option>
                    <option value="22.15">22h15</option>
                    <option value="22.30">22h30</option>
                    <option value="22.45">22h45</option>
                    <option value="23.00">23h00</option>
                    <option value="23.15">23h15</option>
                    <option value="23.30">23h30</option>
                    <option value="23.45">23h45</option>
                    <option value="24.00">24h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>Dimanche</th>
                <td>
                  <select className="custom-select" name="sunday__morning_open">
                    <option value="">00h00</option>
                    <option value="08.00">08h00</option>
                    <option value="08.15">08h15</option>
                    <option value="08.30">08h30</option>
                    <option value="08.45">08h45</option>
                    <option value="09.00">09h00</option>
                    <option value="09.15">09h15</option>
                    <option value="09.30">09h30</option>
                    <option value="09.45">09h45</option>
                    <option value="10.00">10h00</option>
                    <option value="10.15">10h15</option>
                    <option value="10.30">10h30</option>
                    <option value="10.45">10h45</option>
                    <option value="11.00">11h00</option>
                    <option value="11.15">11h15</option>
                    <option value="11.30">11h30</option>
                    <option value="11.45">11h45</option>
                    <option value="12.00">12h00</option>
                    <option value="12.15">12h15</option>
                    <option value="12.30">12h30</option>
                    <option value="12.45">12h45</option>
                    <option value="13.00">13h00</option>
                    <option value="13.15">13h15</option>
                    <option value="13.30">13h30</option>
                    <option value="13.45">13h45</option>
                    <option value="14.00">14h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="sunday__morning_close">
                    <option value="">00h00</option>
                    <option value="12.00">12h00</option>
                    <option value="12.15">12h15</option>
                    <option value="12.30">12h30</option>
                    <option value="12.45">12h45</option>
                    <option value="13.00">13h00</option>
                    <option value="13.15">13h15</option>
                    <option value="13.30">13h30</option>
                    <option value="13.45">13h45</option>
                    <option value="14.00">14h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="sunday__afternoon_open">
                    <option value="">00h00</option>
                    <option value="14.00">14h00</option>
                    <option value="14.15">14h15</option>
                    <option value="14.30">14h30</option>
                    <option value="14.45">14h45</option>
                    <option value="15.00">15h00</option>
                    <option value="15.15">15h15</option>
                    <option value="15.30">15h30</option>
                    <option value="15.45">15h45</option>
                    <option value="16.00">16h00</option>
                    <option value="16.15">16h15</option>
                    <option value="16.30">16h30</option>
                    <option value="16.45">16h45</option>
                    <option value="17.00">17h00</option>
                    <option value="17.15">17h15</option>
                    <option value="17.30">17h30</option>
                    <option value="17.45">17h45</option>
                    <option value="18.00">18h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
                <td>
                  <select className="custom-select" name="sunday__afternoon_close">
                    <option value="">00h00</option>
                    <option value="18.00">18h00</option>
                    <option value="18.15">18h15</option>
                    <option value="18.30">18h30</option>
                    <option value="18.45">18h45</option>
                    <option value="19.00">19h00</option>
                    <option value="19.15">19h15</option>
                    <option value="19.30">19h30</option>
                    <option value="19.45">19h45</option>
                    <option value="20.00">20h00</option>
                    <option value="20.15">20h15</option>
                    <option value="20.30">20h30</option>
                    <option value="20.45">20h45</option>
                    <option value="21.00">21h00</option>
                    <option value="21.15">21h15</option>
                    <option value="21.30">21h30</option>
                    <option value="21.45">21h45</option>
                    <option value="22.00">22h00</option>
                    <option value="22.15">22h15</option>
                    <option value="22.30">22h30</option>
                    <option value="22.45">22h45</option>
                    <option value="23.00">23h00</option>
                    <option value="23.15">23h15</option>
                    <option value="23.30">23h30</option>
                    <option value="23.45">23h45</option>
                    <option value="24.00">24h00</option>
                    <option value="00.00">Fermé</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
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

ShopkeeperProfilUpdateCss.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default ShopkeeperProfilUpdateCss;
