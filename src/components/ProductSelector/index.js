import React from 'react';

import './productSelector.scss';

const ProductSelector = ({ products }) => {
  return (
    <>
      <h2>Produits disponibles</h2>
      <form className="my-3">
        <table class="table text-left">
          <thead>
            <tr>
              <th scope="col">Produit</th>
              <th scope="col">Prix</th>
              <th scope="col">Quantité</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="selector">
                  <div>
                    <select class="form-control form-control-sm" name={product.id} id={product.id}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row">Total</th>
              <td>8€</td>
              <td />
            </tr>
          </tfoot>
        </table>
        <input
          type="submit"
          className="btn btn-custom-accent btn-lg btn-block"
          name="submitProductSelector"
          value="Valider"
        />
      </form>
    </>
  );
};

export default ProductSelector;
