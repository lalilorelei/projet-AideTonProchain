import React from 'react';
import Footer from 'components/Footer';
import PropTypes from 'prop-types';
import { serializeFormData } from 'utils';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Input from 'components/Input';
import './addProduct.scss';
import Error403 from 'components/Error403';

const AddProduct = ({
  currentUser,
  submitAddProductForm,
  role,
  message,
  productAddedConfirmMessage,
}) => {
  const submitNewProduct = event => {
    event.preventDefault();
    const newProductObject = serializeFormData(event.target);
    newProductObject.available = true;
    submitAddProductForm(newProductObject, currentUser.token);
    event.target.reset();
  };
  if (currentUser.user !== undefined && role === 'shopkeeper') {
    return (
      <>
        <Header title="Ajouter un produit" />

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-6 px-lg-5 bg-white py-5">
              <h2 className="text-center mb-3">Ajout d'un nouveau produit à vore catalogue</h2>
              {productAddedConfirmMessage && (
                <div className={`alert alert-${productAddedConfirmMessage.type}`}>
                  {productAddedConfirmMessage.message}
                  {productAddedConfirmMessage.link && (
                    <a href={productAddedConfirmMessage.link.url} className="alert-link">
                      {' ' + productAddedConfirmMessage.link.label}
                    </a>
                  )}
                </div>
              )}
              <form className="mt-4" onSubmit={submitNewProduct}>
                <Input
                  label="Nom du produit"
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required={true}
                />
                <Input
                  label="Prix"
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  required={true}
                />
                <Input
                  label="Description"
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                />
                <div className="mt-5 text-right">
                  <Link
                    to="/profil"
                    exact
                    path="/profil"
                    className="btn btn-outline-secondary mr-4"
                  >
                    Retour au profil
                  </Link>
                  <button type="submit" className="btn btn-primary">
                    Ajouter un produit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <Error403 message="Vous ne pouvez pas accéder à cette page, vous n'êtes pas connectés" />
    );
  }
};

AddProduct.propTypes = {
  currentUser: PropTypes.object.isRequired,
  submitAddProductForm: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired,
};

export default AddProduct;
