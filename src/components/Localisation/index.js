import React from 'react';

import Header from 'components/Header';
import './localisation.scss';

const Localisation = () => {
  return (
    <>
      <Header title="A proximité" />
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col col-lg-8 text-center" />

          <div className="text-center">
            <h2>OhOh...</h2>
            <p>Nous avons besoin de votre localisation.</p>
            <p>Merci d'accorder la permission ou de taper une adresse ci-dessous :</p>
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Votre adresse
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>

          <button type="button" class="btn btn-secondary btn-lg btn-block">
            Valider
          </button>
        </div>
      </div>
    </>
  );
};

export default Localisation;
