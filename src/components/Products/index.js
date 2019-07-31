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
            <div className="table-responsive">
              <table className="table text-left">
                <tbody>
                  <tr>
                    <td colspan="3" className="text-center">Produits selectionnés</td>
                  </tr>
                  <tr>
                    <td rowspan="3"><FaCoffee /></td>
                    <td>Café - 1€50</td>                  
                  </tr>
                  <tr>
                    <td>Ajouté le 25/07/2019 à 15h32</td>
                  </tr>
                  <tr>
                    <td><FaPencilAlt /></td> <td><FaTrash /></td>
                  </tr>

                  <tr>
                    <td colspan="3" className="text-center"></td>
                  </tr>
                  <tr>
                    <td rowspan="3"><FaCoffee /></td>
                    <td>Sandwich - 3€</td>                  
                  </tr>
                  <tr>
                    <td>Ajouté le 26/07/2019 à 12h12</td>
                  </tr>
                  <tr>
                    <td><FaPencilAlt /></td>
                    <td><FaTrash /></td>
                  </tr>               
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
