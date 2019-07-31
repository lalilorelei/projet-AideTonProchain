import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';

const Contact = () => (
  <>
    <Header title="contactez-nous" />
    <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col col-lg-8 text-center">

          <label for="basic-url">Adresse e-mail</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">             
            </div>
            <input type="text" class="form-control" id="basic-url" placeholder="exemple: adresse@gmail.com" aria-describedby="basic-addon3"/>
          </div>

          <label for="basic-url">Objet</label>
          <div class="input-group mb-3">
            <div class="input-group-prepend">              
            </div>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
          </div>
            
          <label for="basic-url">Votre message</label>
          <div className="input-group">
            <div className="input-group-prepend">             
            </div>
            <textarea className="form-control mb-2" placeholder="Votre message" aria-label="With textarea"></textarea>
          </div>

          <div class="custom-control custom-checkbox input-group">
          <input type="checkbox" class="custom-control-input" id="customCheck1"/>
          <label className="custom-control-label" for="customCheck1">Lorem ipsum dolor sit amet consectetur.</label>
          </div>          

          <button class="btn btn-primary mb-3" type="submit">Envoyer</button>

          <div class="card">
          <div class="card-body">
            <h5 class="card-title text-left">Ou à l'adresse suivante :</h5>
            <h6 class="card-subtitle mb-2 text-left">10 Rue de l'exemple</h6>
            <h6 class="card-subtitle mb-2 text-left">75014 - Paris</h6>
            <h6 class="card-subtitle mb-2 text-muted">Notre adresse e-mail</h6>
            <p class="card-text">contact@aidetonprochain.com</p>           
          </div>
        </div>

        </div>
         </div>   
    </div>  
  </>
);

export default Contact;
