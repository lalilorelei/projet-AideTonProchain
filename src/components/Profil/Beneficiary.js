import React from 'react';

const Beneficiary = ({ currentUser }) => {
  return (
    <>
      <div>{currentUser.user.username}</div>
    </>
  );
};

export default Beneficiary;
