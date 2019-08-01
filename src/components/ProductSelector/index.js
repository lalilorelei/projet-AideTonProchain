import React from 'react';

import './productSelector.scss';
import { serializeFormData } from 'utils';

const ProductSelector = props => {
  const submitProductSelector = props.submitProductSelector;
  const products = props.products;
  const user = props.user;

  const handleSubmitProductSelector = event => {
    event.preventDefault();
    const jsonObject = serializeFormData(event.target);
    submitProductSelector(jsonObject);
  };

  return (
    <>
      <div className="mb-5 table-header d-flex justify-content-between align-items-center">
        <h2>Produits disponibles</h2>
        {user.role === 'shopkeeper' && (
          <button className="btn btn-custom-accent ">Ajouter un produit</button>
        )}
      </div>

      <form className="my-3" onSubmit={handleSubmitProductSelector}>
        <table className="table text-left">
          <thead>
            <tr>
              <th scope="col">Produit</th>
              <th scope="col">Prix</th>
              <th scope="col">Quantité</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="selector">
                  {user.role === 'donor' && (
                    <select
                      className="form-control form-control-sm"
                      name={product.id}
                      id={product.id}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  )}
                  {user.role === 'shopkeeper' && (
                    <>
                      <a href="#">Editer</a>
                      <a href="#">Supprimer</a>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          {user.role === 'donor' && (
            <tfoot>
              <tr>
                <th scope="row">Total</th>
                <td>8€</td>
                <td />
              </tr>
            </tfoot>
          )}
        </table>
        {user.role === 'donor' && (
          <input
            type="submit"
            className="btn btn-custom-accent btn-lg btn-block"
            name="submitProductSelector"
            value="Valider"
          />
        )}
      </form>
    </>
  );
};

export default ProductSelector;
