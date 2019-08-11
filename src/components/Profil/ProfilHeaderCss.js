import React from 'react';
import { Link } from 'react-router-dom';
import { FaPen } from 'react-icons/fa';

const ProfilHeaderCss = ({ user, role, update }) => {
  console.log(user, role);

  return (
    <>
      {!update && (
        <div className="d-none d-lg-block text-right mb-3">
          <Link exact="true" to="/profil-update" className="text-right btn btn-sm btn-link mr-2">
            Editer mon profil
          </Link>
        </div>
      )}

      <header className="d-flex profile-header mb-5">
        <div className="row">
          <div className="col col-xs-12 col-lg-4 mb-3 profile-avatar text-center">
            <img
              src={`http://aider-son-prochain.fr/projet-AideTonProchain-back/${user.user.avatar}`}
              alt={role === 'shopkeeper' ? user.user.shopkeeper_name : user.user.username}
            />
            <Link
              exact="true"
              to="/profil-update"
              className="d-lg-none d-block text-center btn btn-sm btn-link mt-2"
            >
              Editer mon profil
            </Link>
            {update && (
              <span>
                <span
                  className="upload-link text-muted mt-2 d-block"
                  onClick={function() {
                    document.querySelector('#avatar').click();
                  }}
                >
                  <FaPen size="10px" color="#999" className="mr-2" />
                  Modifier l'avatar
                </span>
              </span>
            )}
          </div>
          <div className="col col-xs-12 col-lg-8 profile-metas mt-1 text-center text-lg-left pl-lg-3">
            <h1 className="mb-0 mr-3">
              {role === 'shopkeeper' ? user.user.shopkeeper_name : user.user.username}
            </h1>
            <span className="text-muted text-small mt-1">
              {role === 'shopkeeper'
                ? 'Commerçant'
                : role === 'donor'
                ? 'Donateur'
                : 'Bénéficiaire'}
            </span>
            <p className="bio mt-3 text-muted text-small">
              {user.user.description && user.user.description.bio
                ? user.user.description.bio
                : role === 'donor'
                ? 'Je me suis inscrit pour aider les personnes dans le besoin et il y en a beaucoup !'
                : role === 'beneficiary'
                ? "Je suis sur le site depuis 4 mois et j'ai rencontré plein de monde sympa et on m'aide à un peu mois galérer"
                : 'Nous somme heureux de contribuer aux actions sociales qui nous sont proposées.'}

              {/*user.role === 'beneficiary' || user.role === 'donor' ? (
            <>{user.about}</>
          ) : user.role === 'shopkeeper' ? (
            <>{user.shop.about}</>
          ) : null*/}
            </p>
          </div>

          {/*<Link exact="true" to="/profil-update" className="btn btn-sm btn-primary">
        Editer mon profil
      </Link>*/}
        </div>
      </header>
    </>
  );
};

export default ProfilHeaderCss;
