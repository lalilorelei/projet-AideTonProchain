import React from 'react';

import Header from 'components/Header';
import './shopkeeperdetails.scss';
import { FaClock, FaPhone, FaGlobeEurope } from 'react-icons/fa';

const ShopKeeperDetails = () => {
  return (
    <>
      <Header title="Le café des amis" />
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col col-lg-8 text-center">
            <h1>Le café des amis</h1>
            <p>12 rue Paul Gaugin</p>
            <p>75012 Paris</p>
            <a href="#" class="badge badge-primary">
              Voir sur la carte
            </a>
            <p>
              <FaClock />
              Horaires
            </p>
            <p>Lundi au samedi</p>
            <p>
              <FaPhone />
              01-xx-xx-xx-xx
            </p>
            <p>
              <FaGlobeEurope />
              www.cafedesamis.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopKeeperDetails;