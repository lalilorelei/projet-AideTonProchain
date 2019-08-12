import React from 'react';
import { serializeFormData } from 'utils';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

import Header from 'components/Header';
import './editProduct.scss';

class EditProduct extends React.Component {
  state = {
    product: {},
  };
  componentDidMount() {
    const productId = this.props.match.params.id;
    const shopkeeperId = this.props.currentUser.user._id;
    axios
      .get(`http://95.142.175.77:3000/api/product/${shopkeeperId}/${productId}`)
      .then(response => {
        this.setState({
          product: response.data.product,
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  submitEditProduct = event => {
    event.preventDefault();
    const productId = this.state.product._id;
    const { submitEditProductForm, token } = this.props;
    const newProductObject = serializeFormData(event.target);
    submitEditProductForm(newProductObject, productId, token);
    event.target.reset();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(state => ({
      product: { ...state.product, [name]: value },
    }));
  };

  render() {
    const { name, price, description } = this.state.product;
    return (
      <>
        <Header title="Editer un produit" />

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <form className="mt-4" onSubmit={this.submitEditProduct}>
                <label htmlFor={name}>Nom du produit</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required={false}
                  value={name}
                  onChange={this.handleChange}
                />
                <label htmlFor={price}>Prix</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  required={true}
                  value={price}
                  onChange={this.handleChange}
                />
                <label htmlFor={description}>Description</label>
                <inpu
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                />
                <button type="submit" className="mt-4 btn btn-primary btn-block">
                  Editer un produit
                </button>
                <Link to="/profil" exact path="/profil">
                  Retour au profil
                </Link>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(EditProduct);
