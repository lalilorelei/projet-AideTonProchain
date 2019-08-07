import React from 'react';

import Header from 'components/Header';
import Input from 'components/Input';
import './addProduct.scss';

const AddProduct = ({ submitAddProductForm }) => (
  <>
    <Header title="Ajouter un produit" />

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <form className="mt-4" onSubmit={submitAddProductForm}>
            <Input label="Nom du produit" type="text" className="form-control" id="name" name="name" required={true} />
            <Input label="Prix" type="text" className="form-control" id="price" name="price" required={true} />
            <Input
              label="Disponibilité"
              type="number"
              className="form-control"
              id="Available"
              name="available"
              required={true}
            />
            <Input
              label="Description"
              type="text"
              className="form-control"
              id="description"
              name="description"
              required={true}
            />
            <button type="submit" className="mt-4 btn btn-custom-accent btn-block">
              Ajouter un produit
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
);

export default AddProduct;
