import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import './profilUpdate.scss';

const ShopkeeperProfilUpdate = ({ currentUser }) => {
  return (
    <>
      <div className="container mt-4 py-5 shopkeeper-profil-update">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
            <form className="mb-4">
              <Input
                type="firstname"
                className="form-control"
                name="firstname"
                placeholder="Votre prénom"
                value={currentUser.user.firstname}
                label="Votre prénom"
              />
              <Input
                type="text"
                name="lastname"
                className="form-control"
                placeholder="votre nom"
                value={currentUser.user.lastname}
                label="Votre nom"
              />
              <Input
                type="password"
                name="password"
                label="Votre nouveau mot de passe"
                className="form-control"
                id="password"
                placeholder="Nouveau mot de passe"
              />
              <Input
                type="text"
                name="shopkeeper_name"
                className="form-control"
                placeholder="Nom de l'entreprise"
                value={currentUser.user.shopname}
                label="Nom du commerçant"
              />
              <Input
                type="text"
                name="localisation"
                label="Adresse du commerçant"
                className="form-control"
                placeholder="Adresse du commerçant"
              />
              <Input
                type="number"
                className="form-control"
                name="phone"
                label="Numéro de téléphone"
                placeholder="Numéro de téléphone"
              />

              <br />
              <table class="table">
                <thead>
                  <tr>
                    <th>Jour</th>
                    <th colspan="2" className="text-center">
                      Matin
                    </th>
                    <th colspan="2" className="text-center">
                      Après-midi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Lundi</th>
                    <td>
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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
                      <select className="custom-select">
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

ShopkeeperProfilUpdate.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default ShopkeeperProfilUpdate;
