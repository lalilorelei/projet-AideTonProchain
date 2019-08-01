import React from 'react';

import Header from 'components/Header';
import ProfileHeader from './ProfileHeader';
import ProductSelector from 'components/ProductSelector';
import './profil.scss';
import { FaClock } from 'react-icons/fa';

const Profil = props => {
  const user1 = {
    role: 'beneficiary',
    name: 'Patrick',
    username: 'Patrick72',
    about:
      'About me : Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quod, vel nulla aliquid quis dignissimos excepturi, in iure velit suscipit deserunt. Dignissimos dolores magni nemo.',
    locationText: 'Je suis souvent à côté du Monoprix',
    whatIneed: "J'ai besoin de couvertures et de croquettes pour mon chien",
  };

  const user2 = {
    role: 'shopkeeper',
    name: 'Gerard',
    username: 'Gerard54',
    shop: {
      name: 'Le café des amis',
      about:
        'About me : Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quod, vel nulla aliquid quis dignissimos excepturi, in iure velit suscipit deserunt. Dignissimos dolores magni nemo.',

      address: {
        street: 'rue Paul Gaugin',
        streetNumber: 12,
        postCode: 75014,
        city: 'Paris',
      },
      telephone: '01 25 47 88 99',
      products: [
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
      ],
    },
  };
  const user3 = {
    role: 'donor',
    name: 'Fabien',
    username: 'Fab',
    about:
      'About me : Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quod, vel nulla aliquid quis dignissimos excepturi, in iure velit suscipit deserunt. Dignissimos dolores magni nemo.',
    locationText: 'Je suis souvent à côté du Monoprix',
    whatIneed: "J'ai besoin de couvertures et de croquettes pour mon chien",
  };

  const user = user2;

  const submitProductSelector = props.submitProductSelector;

  const date = new Date();

  let name = '';
  switch (user.role) {
    case 'shopkeeper':
      name = user.shop.name;
      break;
    default:
      name = user.name;
  }
  return (
    <>
      <ProfileHeader title={`${name} (${user.role})`} user={user} />
      {
        //role === 'beneficiary' && (<Composant user={user} />)
      }
    </>
  );
};

export default Profil;
