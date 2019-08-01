import React from 'react';

const Beneficiary = ({ currentUser }) => {
  return (
    <>
      <div>{currentUser.username}</div>
    </>
  );
};

export default Beneficiary;
