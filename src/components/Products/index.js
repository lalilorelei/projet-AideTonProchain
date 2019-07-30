import React from 'react';

import Header from 'components/Header';
import './products.scss';
import { FaCoffee, FaPencilAlt, FaTrash } from 'react-icons/fa';

const Products = () => {
  return (
    <>
      <Header title="Catalogue des produits" />
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col col-lg-8 text-center">
            <button className="btn btn-primary mb-4" type="submit">
              + Ajouter un produit
            </button>
            <table className="table text-left">
              <tbody>
                <tr>
                  <td>
                    <FaCoffee />
                  </td>
                  <td>
                    <div>
                      <h3>Café - 1€50</h3>
                      <p>Ajouté le 10/08/2019 à 20h30</p>
                      <td>
                        <FaPencilAlt />
                      </td>
                      <td>
                        <FaTrash />
                      </td>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FaCoffee />
                  </td>
                  <td>
                    <div>
                      <h3>Sandwich - 5€</h3>
                      <p>Ajouté le 18/07/2019 à 16h30</p>
                      <td>
                        <FaPencilAlt />
                      </td>
                      <td>
                        <FaTrash />
                      </td>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
