import React from 'react';

const Shopkeeper = ({ currentUser }) => (
  <>
    <div>{currentUser.user.username}</div>
  </>
);

export default Shopkeeper;
