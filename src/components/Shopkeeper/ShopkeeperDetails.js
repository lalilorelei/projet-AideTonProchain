import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from 'components/Header';
import ProductSelector from './ProductSelector';
import BlocCoordonneesHoraires from './BlocCoordonneesHoraires';
import './shopkeeper.scss';
import shopKeeperBackgroundImage from 'assets/img/background-shopkeepers.jpg';

class ShopkeeperDetails extends Component {
  state = {
    selectedProductsTotal: 0,
    donation: {
      shopkeeper: this.props.match.params.id,
      beneficiary: '',
      donor: this.props.currentUser.user._id,
      products: [],
    },
    donationIsReady: false,
  };

  componentDidMount() {
    const { token, role, getShop, getProducts } = this.props;
    const shopkeeperId = this.props.match.params.id;
    getShop(role, token, shopkeeperId);
    getProducts(shopkeeperId);
  }

  componentDidUpdate() {
    const input = document.querySelector('#beneficiary-search-input');
    if (input) {
      input.addEventListener('blur', function() {
        setTimeout(function() {
          document.querySelector('.suggests').classList.remove('d-block');
          document.querySelector('.suggests').classList.add('d-none');
        }, 50);
      });
    }
  }

  clickSuggest = evt => {
    document.querySelector('#beneficiary-search-input').value = evt.target.innerHTML;
    this.setState(
      {
        ...this.state,
        donation: {
          ...this.state.donation,
          beneficiary: evt.target.dataset.id,
        },
      },
      () => {
        this.isDonationReady();
      },
    );
  };

  isDonationReady = () => {
    if (
      this.state.donation.beneficiary !== '' &&
      this.state.donation.shopkeeper !== '' &&
      this.state.donation.donor !== '' &&
      this.state.donation.products.length > 0 &&
      this.state.selectedProductsTotal > 0
    ) {
      this.setState({
        ...this.state,
        donationIsReady: true,
      });
      return true;
    } else {
      this.setState({
        ...this.state,
        donationIsReady: false,
      });
      return false;
    }
  };

  inputSearchBeneficiary = evt => {
    if (evt.target.value.length < 1) {
      document.querySelector('.suggests').classList.remove('d-block');
      //document.querySelector('.suggests').classList.add('d-none');
    } else {
      document.querySelector('.suggests').classList.remove('d-none');
      document.querySelector('.suggests').classList.add('d-block');
    }
    const { searchBeneficiary, token } = this.props;
    this.setState(
      {
        donation: {
          ...this.state.donation,
          beneficiary: evt.target.value,
        },
      },
      () => {
        this.isDonationReady();
      },
    );
    searchBeneficiary(evt.target.value, token);
  };

  changeDonationTotal = evt => {
    if (evt.target.type === 'checkbox')
      if (evt.target.checked) {
        const tempTotal = this.state.selectedProductsTotal + parseFloat(evt.target.dataset.price);
        this.setState(
          {
            selectedProductsTotal: Math.round(tempTotal * 100) / 100,
            donation: {
              ...this.state.donation,
              products: [...this.state.donation.products, evt.target.dataset.id],
            },
          },
          () => {
            this.isDonationReady();
          },
        );
      } else {
        const tempTotal = this.state.selectedProductsTotal - parseFloat(evt.target.dataset.price);
        const tempProducts = this.state.donation.products;
        var index = tempProducts.indexOf(evt.target.dataset.id);
        if (index > -1) {
          tempProducts.splice(index, 1);
        }
        this.setState(
          {
            selectedProductsTotal: Math.round(tempTotal * 100) / 100,
            donation: {
              ...this.state.donation,
              products: tempProducts,
            },
          },
          () => {
            this.isDonationReady();
          },
        );
      }
  };

  submitDonation = evt => {
    evt.preventDefault();
    const { sendDonation, token } = this.props;
    sendDonation(this.state.donation, token);
  };

  render() {
    const { shop, products, role, beneficiariesSuggests, donationConfirmMessage } = this.props;
    document.title = `${shop.shopkeeper_name} - Aide ton prochain`;
    const date = new Date();
    return (
      <>
        <Header
          title={shop.shopkeeper_name}
          backgroundImage={shopKeeperBackgroundImage}
          theme="dark"
        />

        <div className="container mt-4 py-5">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-8">
              {donationConfirmMessage && (
                <div className={`alert alert-${donationConfirmMessage.type}`}>
                  {donationConfirmMessage.message}
                  {donationConfirmMessage.link && (
                    <a href={donationConfirmMessage.link.url} className="alert-link">
                      {' ' + donationConfirmMessage.link.label}
                    </a>
                  )}
                </div>
              )}
              {products &&
                shop &&
                (role === 'beneficiary' || role === 'shopkeeper' || role === 'donor') && (
                  <ProductSelector
                    products={products}
                    changeDonationTotal={this.changeDonationTotal}
                    submitDonation={this.submitDonation}
                    role={role}
                    total={this.state.selectedProductsTotal}
                    isDonationReady={this.state.donationIsReady}
                    inputSearchBeneficiary={this.inputSearchBeneficiary}
                    beneficiariesSuggests={beneficiariesSuggests}
                    clickSuggest={this.clickSuggest}
                  />
                )}
            </div>
            <div className="col-md-12 col-lg-4">
              {/* {shop && <BlocCoordonneesHoraires shop={shop} />} */}
              {shop.localisation && (
                <div className="card">
                  <div className="card-body">
                    <p className="text-small">
                      <span className="font-weight-bold">Adresse : </span>
                      <br />
                      <span>{shop.localisation.address}</span>
                      <br />
                      <a
                        href={`https://maps.google.com/?q=${shop.localisation.lat},${
                          shop.localisation.lon
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Voir sur la carte
                      </a>
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
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ShopkeeperDetails);
