import React from 'react';
import { Link } from 'react-router-dom';

import { serializeFormData } from 'utils';

const ProductSelector = ({ products, role, clickDeleteProduct }) => {
  //const submitProductSelector = props.submitProductSelector;

  const handleSubmitProductSelector = event => {
    event.preventDefault();
    const jsonObject = serializeFormData(event.target);
    //submitProductSelector(jsonObject);
  };

  return (
    <>
      <div className="mb-5 table-header d-flex justify-content-between align-items-center">
        <h2>Produits disponibles</h2>
        {role === 'shopkeeper' && (
          <Link
            exact="true"
            to="/add-product"
            path="/add-product"
            className="btn btn-custom-accent"
          >
            Ajouter un produit
          </Link>
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
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="selector">
                  {role === 'donor' && (
                    <select
                      className="form-control form-control-sm"
                      name={product.id}
                      id={product.id}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                    </select>
                  )}
                  {role === 'shopkeeper' && (
                    <>
                      <a href="#">Editer</a>
                      <a href="#" onClick={clickDeleteProduct} data-id={product._id}>
                        Supprimer
                      </a>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          {role === 'donor' && (
            <tfoot>
              <tr>
                <th scope="row">Total</th>
                <td>8€</td>
                <td />
              </tr>
            </tfoot>
          )}
        </table>
        {role === 'donor' && (
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
