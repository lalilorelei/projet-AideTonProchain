import React from 'react';

const BlocCoordonneesHoraires = ({ shop }) => {
  const date = new Date();
  return (
    <div className="card">
      <div className="card-body">
        <p className="text-small">
          <span className="font-weight-bold">Adresse : </span>
          <br />
          <span>{shop.localisation.address}</span>
          <br />
          <a
            href={`https://maps.google.com/?q=${shop.localisation.lat},${shop.localisation.lon}`}
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
  );
};

export default BlocCoordonneesHoraires;
