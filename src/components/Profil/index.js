import React from 'react';

import Header from 'components/Header';
import ProductSelector from 'components/ProductSelector';
import './profil.scss';
import { FaClock } from 'react-icons/fa';

const Profil = props => {
  console.log(props);
  const submitProductSelector = props.submitProductSelector;
  const shop = {
    name: 'Le café des amis',
    address: {
      street: 'rue Paul Gaugin',
      streetNumber: 12,
      postCode: 75014,
      city: 'Paris',
    },
    telephone: '01 25 47 88 99',
  };
  const products = [
    {
      id: 25447,
      name: 'café',
      price: '2€',
    },
    {
      id: 22014,
      name: 'sandwich',
      price: '4€',
    },
    {
      id: 210023,
      name: "jus d'orange",
      price: '2.5€',
    },
  ];
  const date = new Date();
  return (
    <>
      <Header title={shop.name} />
      <div className="container mt-4 page-id-product-selector">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-8">
            <ProductSelector products={products} submitProductSelector={submitProductSelector} />
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="card">
              <div className="card-body">
                <p className="text-small">
                  <span className="font-weight-bold">Adresse : </span>
                  <br />
                  <span>
                    {shop.address.streetNumber} {shop.address.street} {shop.address.postCode} -{' '}
                    {shop.address.city}
                  </span>
                  <br />
                  <a href="#">Voir sur la carte</a>
                </p>

                <span className="font-weight-bold text-small d-block mb-2">Horaires : </span>

                <table className="mb-3 text-small">
                  <tbody>
                    <tr className={date.getDay() === 1 ? 'font-weight-bold' : null}>
                      <td>Lundi</td>
                      <td className="px-2">10:00 - 17:00</td>
                      <td>19:00 - 23:00</td>
                    </tr>
                    <tr className={date.getDay() === 2 ? 'font-weight-bold' : null}>
                      <td>Mardi</td>
                      <td className="px-2">10:00 - 17:00</td>
                      <td>19:00 - 23:00</td>
                    </tr>
                    <tr className={date.getDay() === 3 ? 'font-weight-bold' : null}>
                      <td>Mercredi</td>
                      <td className="px-2">10:00 - 17:00</td>
                      <td>19:00 - 23:00</td>
                    </tr>
                    <tr className={date.getDay() === 4 ? 'font-weight-bold' : null}>
                      <td>Jeudi</td>
                      <td className="px-2">10:00 - 17:00</td>
                      <td>19:00 - 23:00</td>
                    </tr>
                    <tr className={date.getDay() === 5 ? 'font-weight-bold' : null}>
                      <td>Vendredi</td>
                      <td className="px-2">10:00 - 17:00</td>
                      <td>19:00 - 23:00</td>
                    </tr>
                    <tr className={date.getDay() === 6 ? 'font-weight-bold' : null}>
                      <td>Samedi</td>
                      <td className="px-2">10:00 - 23:00</td>
                    </tr>
                    <tr className={date.getDay() === 7 ? 'current-day' : null}>
                      <td>Dimanche</td>
                      <td className="px-2">Fermé</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-small">
                  <span className="font-weight-bold">Téléphone : </span>
                  <br />
                  <span>{shop.telephone}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
