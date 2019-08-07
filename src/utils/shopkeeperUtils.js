import axios from 'axios';

export const getProducts = (self, shopkeeperId) => {
  axios
    .get(`http://95.142.175.77:3000/api/product/${shopkeeperId}`)
    .then(response => {
      self.setState({
        products: response.data.products,
      });
    })
    .catch(e => {
      console.log(e);
    });
};

export const getTempProducts = (self, shopkeeperId) => {
  axios
    .get(`http://95.142.175.77:3000/api/product/${shopkeeperId}`)
    .then(response => {
      self.setState({
        products: response.data.products,
      });
    })
    .catch(e => {
      console.log(e);
    });
};

export const getShopDetails = (self, currentUser) => {
  axios
    .get(`http://95.142.175.77:3000/api/shopkeeper/profil/`, {
      headers: { Authorization: `Bearer ${currentUser.token}` },
    })
    .then(response => {
      self.setState({
        shop: response.data.user,
      });
    })
    .catch(e => {
      console.log('erreur shop', e);
    });
};

export const getTempShopDetails = (self, role, currentUser, shopkeeperId) => {
  axios
    .get(`http://95.142.175.77:3000/api/${role}/shopkeepers/${shopkeeperId}/`, {
      headers: { Authorization: `Bearer ${currentUser.token}` },
    })
    .then(response => {
      self.setState({
        shop: response.data.shopkeeper,
      });
    })
    .catch(e => {
      console.log('erreur shop', e);
    });
};

export const deleteProduct = (self, currentUser, productId) => {
  axios
    .delete(`http://95.142.175.77:3000/api/product/delete/${productId}`, {
      headers: { Authorization: `Bearer ${currentUser.token}` },
    })
    .then(response => {
      getProducts(self, currentUser.user._id);
    })
    .catch(e => {
      console.log('Impossible de supprimer le produit', e);
      getProducts(self, currentUser._id);
    });
};

export const getAllShops = (self, currentUser, role) => {
  axios
    .get(`http://95.142.175.77:3000/api/${role}/shopkeepers`, {
      headers: { Authorization: `Bearer ${currentUser.token}` },
    })
    .then(response => {
      self.setState({
        shops: response.data.shopkeepers,
      });
    })
    .catch(e => {
      console.log('Impossible de récupérer les shops', e);
    });
};
