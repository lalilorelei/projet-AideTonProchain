export const getDonationData = ({ donation }) => {
  // get sum of products
  const sumOfProducts = donation.products.reduce(function(a, b) {
    return a + b.price;
  }, 0);

  // display the ref (5 first chars)
  const donationDisplayRef = '#' + donation._id.substr(donation._id.length - 6).toUpperCase();

  // change date format
  const date = new Date(donation.created_at);
  const donationDate =
    ('0' + date.getDate()).slice(-2) +
    '/' +
    ('0' + (date.getMonth() + 1)).slice(-2) +
    '/' +
    date.getFullYear();

  const used = donation.used_at !== undefined;

  return {
    used,
    sumOfProducts,
    donationDate,
    donationDisplayRef,
  };
};
