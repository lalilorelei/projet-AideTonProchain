import React from 'react';
import { Link } from 'react-router-dom';

import { serializeFormData } from 'utils';

const ProductSelector = ({ products, role, total, clickDeleteProduct, changeDonationTotal }) => {
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

      <form className="my-3" onSubmit={handleSubmitProductSelector} onInput={changeDonationTotal}>
        <table className="table text-left">
          <thead>
            <tr>
              <th scope="col">Produit</th>

              {role !== 'beneficiary' && (
                <>
                  <th scope="col">Prix</th>
                  <th scope="col">
                    {role === 'donor' ? 'Quantité' : role === 'shopkeeper' ? 'Action' : 'Quantité'}
                  </th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr className="product-row" key={product._id}>
                <td>{product.name}</td>
                {role !== 'beneficiary' && (
                  <>
                    <td>{product.price}€</td>
                    <td className="selector">
                      {role === 'donor' && (
                        <select
                          className="form-control form-control-sm"
                          name={product._id}
                          id={product._id}
                          data-id={product._id}
                          data-price={product.price}
                        >
                          <option value="0">0</option>
                          <option value="1">1</option>
                        </select>
                      )}
                      {role === 'shopkeeper' && (
                        <div className="action-links">
                          <a href="#">Editer</a>
                          <a href="#" onClick={clickDeleteProduct} data-id={product._id}>
                            Supprimer
                          </a>
                        </div>
                      )}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
          {role === 'donor' && (
            <tfoot>
              <tr>
                <th scope="row">Total</th>
                <td>{total}€</td>
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
