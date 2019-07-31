import React from 'react';
import { Link } from 'react-router-dom';
import { FaCoffee } from 'react-icons/fa';
import Media from 'react-media';

import Header from 'components/Header';
import './shopkeeper.scss';

const ShopKeeper = () => {
  const shops = [
    {
      id: 2144458,
      name: 'Le café des amis',
      category: 'Café',
      products: ['café', 'restauration rapide', 'menus'],
      distance: 0.7,
      image: 'https://picsum.photos/300/200?var=12',
    },
    {
      id: 687552,
      name: 'Boulangerie du coin',
      category: 'Boulangerie',
      products: ['restaurantion rapide', 'café'],
      distance: 1.1,
      image: 'https://picsum.photos/300/200?var=13',
    },
    {
      id: 14864528349,
      name: 'Kebab Momo',
      category: 'Restaurant',
      products: ['restauration rapide', 'menus'],
      distance: 1.7,
      image: 'https://picsum.photos/300/200?var=14',
    },
    {
      id: 148632549,
      name: 'Le Balto',
      category: 'Café',
      products: ['café'],
      distance: 2.1,
      image: 'https://picsum.photos/300/200?var=15',
    },
  ];
  return (
    <>
      <Header title="Commerces à proximité" />
      <div className="container py-5">
        <div className="row my-3">
          <form className="form-inline d-flex justify-content-between">
            <div className="col-md-4">
              <div className="form-group">
                <label className="inline-form-label" htmlFor="exampleFormControlSelect1">
                  Distance maxi :
                </label>
                <select className="form-control form-control-sm" id="exampleFormControlSelect1">
                  <option value="1">1 km</option>
                  <option value="2">2 km</option>
                  <option value="3">3 km</option>
                  <option value="4">4 km</option>
                  <option value="5">5 km</option>
                  <option value="10">10 km</option>
                  <option value="20">20 km</option>
                  <option value="0">Illimitée</option>
                </select>
              </div>
            </div>
            <div className="col-md-8">
              <div className="form-group">
                <span className="inline-form-label">Produits :</span>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    menus
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox2">
                    restauration rapide
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="option3"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox3">
                    café
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          {shops.map(shop => (
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4" key={shop.id}>
              <div className="card">
                <img className="card-img-top" src={shop.image} alt={shop.name} />
                <div className="card-body">
                  <h3 className="card-title font-weight-bold">{shop.name}</h3>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {shop.category} - {shop.distance} km
                  </h6>
                  <p className="card-text mt-3">
                    <span className="font-weight-bold">Produits : </span>
                    {shop.products.map(product => `${product}, `)}
                  </p>
                </div>
                <Link to={`/shopkeeper/${shop.id}`} className="stretched-link" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopKeeper;
