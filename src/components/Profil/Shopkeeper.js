import React from 'react';
import ProductSelector from 'components/Shopkeeper/ProductSelector';
// import { getProducts, getShopDetails, deleteProduct } from 'utils/shopkeeperUtils';

class Shopkeeper extends React.Component {
  componentDidMount() {
    const { getProducts } = this.props;
    const shopkeeperId = this.props.currentUser.user._id;
    getProducts(shopkeeperId);
  }

  clickDeleteProduct = evt => {
    const confirmDelete = window.confirm('Voulez-vous vraiement supprimer ce produit ?');
    if (confirmDelete) {
      const { token, deleteProduct, getProducts } = this.props;
      const productId = evt.target.dataset.id;
      deleteProduct(token, productId);
      const shopkeeperId = this.props.currentUser.user._id;
      getProducts(shopkeeperId);
    }
  };

  openingHours = hour => {
    let h = '';

    if (hour === 0) {
      return h;
    }

    hour = (hour < 10 ? '0' + hour : hour).toString();
    if (hour.includes('.')) {
      h = hour.replace('.', 'h');
      if (h.length === 4) {
        h = h + '0';
      }
    } else {
      h = hour + 'h00';
    }
    return h;
  };

  render() {
    const { role, products } = this.props;
    const shop = this.props.currentUser.user;

    const date = new Date();
    console.log(shop);

    return (
      <>
        {products && shop && (role === 'shopkeeper' || role === 'donor') && (
          <>
            <ProductSelector products={products} role={role} clickDeleteProduct={this.clickDeleteProduct} />
          </>
        )}

        <p className="font-weight-bold">Horaires et coordonnées</p>

        {shop && (
          <div className="card">
            <div className="card-body">
              <p className="text-small">
                <span className="font-weight-bold">Adresse : </span>
                <br />
                <span>{shop.localisation.address}</span>
                <br />
                {role !== 'shopkeeper' && (
                  <a
                    href={`https://maps.google.com/?q=${shop.localisation.lat},${shop.localisation.lon}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir sur la carte
                  </a>
                )}
              </p>

              <span className="font-weight-bold text-small d-block mb-2">Horaires : </span>

              <table className="mb-3 text-small">
                <tbody>
                  <tr className={date.getDay() === 1 ? 'font-weight-bold' : null}>
                    <td>Lundi</td>
                    <td className="px-2">
                      {this.openingHours(shop.opening_hours.monday.morning_open)}
                      {this.openingHours(shop.opening_hours.monday.morning_close) !== '' && (
                        <span> / {this.openingHours(shop.opening_hours.monday.morning_close)}</span>
                      )}
                      {' - '}
                    </td>
                    {this.openingHours(shop.opening_hours.monday.afternoon_open) !== '' && (
                      <span>{this.openingHours(shop.opening_hours.monday.afternoon_open)} / </span>
                    )}
                    {this.openingHours(shop.opening_hours.monday.afternoon_close)}
                    <td />
                  </tr>
                  <tr className={date.getDay() === 2 ? 'font-weight-bold' : null}>
                    <td>Mardi</td>
                    <td className="px-2">
                      {this.openingHours(shop.opening_hours.tuesday.morning_open)}{' '}
                      {this.openingHours(shop.opening_hours.tuesday.morning_close) !== '' && (
<<<<<<< HEAD
                        <span> / {this.openingHours(shop.opening_hours.tuesday.morning_close)}</span>
=======
                        <span>
                          {' '}
                          / {this.openingHours(shop.opening_hours.tuesday.morning_close)}
                        </span>
>>>>>>> f22e437efcc0dedbaff3a75d7421549a81d87cd4
                      )}
                      {' - '}
                    </td>
                    <td>
                      {this.openingHours(shop.opening_hours.tuesday.afternoon_open) !== '' && (
<<<<<<< HEAD
                        <span>{this.openingHours(shop.opening_hours.tuesday.afternoon_open)} / </span>
=======
                        <span>
                          {this.openingHours(shop.opening_hours.tuesday.afternoon_open)} /{' '}
                        </span>
>>>>>>> f22e437efcc0dedbaff3a75d7421549a81d87cd4
                      )}
                      {this.openingHours(shop.opening_hours.tuesday.afternoon_close)}
                    </td>
                  </tr>
                  <tr className={date.getDay() === 3 ? 'font-weight-bold' : null}>
                    <td>Mercredi</td>
                    <td className="px-2">
                      {this.openingHours(shop.opening_hours.wednesday.morning_open)}
                      {this.openingHours(shop.opening_hours.wednesday.morning_close) !== '' && (
<<<<<<< HEAD
                        <span> / {this.openingHours(shop.opening_hours.wednesday.morning_close)}</span>
=======
                        <span>
                          {' '}
                          / {this.openingHours(shop.opening_hours.wednesday.morning_close)}
                        </span>
>>>>>>> f22e437efcc0dedbaff3a75d7421549a81d87cd4
                      )}
                      {' - '}
                    </td>
                    <td>
                      {this.openingHours(shop.opening_hours.wednesday.afternoon_open) !== '' && (
<<<<<<< HEAD
                        <span>{this.openingHours(shop.opening_hours.wednesday.afternoon_open)} / </span>
=======
                        <span>
                          {this.openingHours(shop.opening_hours.wednesday.afternoon_open)} /{' '}
                        </span>
>>>>>>> f22e437efcc0dedbaff3a75d7421549a81d87cd4
                      )}
                      {this.openingHours(shop.opening_hours.wednesday.afternoon_close)}
                    </td>
                  </tr>
                  <tr className={date.getDay() === 4 ? 'font-weight-bold' : null}>
                    <td>Jeudi</td>
                    <td className="px-2">
                      {this.openingHours(shop.opening_hours.thursday.morning_open)}
                      {this.openingHours(shop.opening_hours.thursday.morning_close) !== '' && (
<<<<<<< HEAD
                        <span> / {this.openingHours(shop.opening_hours.thursday.morning_close)}</span>
=======
                        <span>
                          {' '}
                          / {this.openingHours(shop.opening_hours.thursday.morning_close)}
                        </span>
>>>>>>> f22e437efcc0dedbaff3a75d7421549a81d87cd4
                      )}
                      {' - '}
                    </td>
                    <td>
                      {this.openingHours(shop.opening_hours.thursday.afternoon_open) !== '' && (
<<<<<<< HEAD
                        <span>{this.openingHours(shop.opening_hours.thursday.afternoon_open)} / </span>
=======
                        <span>
                          {this.openingHours(shop.opening_hours.thursday.afternoon_open)} /{' '}
                        </span>
>>>>>>> f22e437efcc0dedbaff3a75d7421549a81d87cd4
                      )}
                      {this.openingHours(shop.opening_hours.thursday.afternoon_close)}
                    </td>
                  </tr>
                  <tr className={date.getDay() === 5 ? 'font-weight-bold' : null}>
                    <td>Vendredi</td>
                    <td className="px-2">
                      {this.openingHours(shop.opening_hours.friday.morning_open)}
                      {this.openingHours(shop.opening_hours.friday.morning_close) !== '' && (
                        <span> / {this.openingHours(shop.opening_hours.friday.morning_close)}</span>
                      )}
                      {' - '}
                    </td>
                    <td>
                      {this.openingHours(shop.opening_hours.friday.afternoon_open) !== '' && (
<<<<<<< HEAD
                        <span>{this.openingHours(shop.opening_hours.friday.afternoon_open)} / </span>
=======
                        <span>
                          {this.openingHours(shop.opening_hours.friday.afternoon_open)} /{' '}
                        </span>
>>>>>>> f22e437efcc0dedbaff3a75d7421549a81d87cd4
                      )}
                      {this.openingHours(shop.opening_hours.friday.afternoon_close)}
                    </td>
                  </tr>
                  <tr className={date.getDay() === 6 ? 'font-weight-bold' : null}>
                    <td>Samedi</td>
                    <td className="px-2">
                      {this.openingHours(shop.opening_hours.saturday.morning_open)}
                      {this.openingHours(shop.opening_hours.saturday.morning_close) !== '' && (
<<<<<<< HEAD
                        <span> / {this.openingHours(shop.opening_hours.saturday.morning_close)}</span>
=======
                        <span>
                          {' '}
                          / {this.openingHours(shop.opening_hours.saturday.morning_close)}
                        </span>
>>>>>>> f22e437efcc0dedbaff3a75d7421549a81d87cd4
                      )}
                      {' - '}
                    </td>
                    <td>
                      {this.openingHours(shop.opening_hours.saturday.afternoon_open) !== '' && (
<<<<<<< HEAD
                        <span>{this.openingHours(shop.opening_hours.saturday.afternoon_open)} / </span>
=======
                        <span>
                          {this.openingHours(shop.opening_hours.saturday.afternoon_open)} /{' '}
                        </span>
>>>>>>> f22e437efcc0dedbaff3a75d7421549a81d87cd4
                      )}
                      {this.openingHours(shop.opening_hours.saturday.afternoon_close)}
                    </td>
                  </tr>
                  <tr className={date.getDay() === 7 ? 'current-day' : null}>
                    <td>Dimanche</td>
                    <td className="px-2">
                      {this.openingHours(shop.opening_hours.sunday.morning_open)}
                      {this.openingHours(shop.opening_hours.sunday.morning_close) !== '' && (
                        <span> / {this.openingHours(shop.opening_hours.sunday.morning_close)}</span>
                      )}
                      {' - '}
                    </td>
                    <td>
                      {this.openingHours(shop.opening_hours.sunday.afternoon_open) !== '' && (
<<<<<<< HEAD
                        <span>{this.openingHours(shop.opening_hours.sunday.afternoon_open)} / </span>
=======
                        <span>
                          {this.openingHours(shop.opening_hours.sunday.afternoon_open)} /{' '}
                        </span>
>>>>>>> f22e437efcc0dedbaff3a75d7421549a81d87cd4
                      )}
                      {this.openingHours(shop.opening_hours.sunday.afternoon_close)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Shopkeeper;
