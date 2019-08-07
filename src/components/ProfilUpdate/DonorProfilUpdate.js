import React from 'react';

const DonorProfilUpdate = ({ currentUser }) => {
  return (
    <>
      <div className="container mt-4 py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
            <form className="mb-4">
              <div className="form-group">
                <input
                  type="text"
                  name="firstname"
                  placeholder="votre prénom"
                  className="form-control"
                  value={currentUser.user.firstname}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastname"
                  className="form-control"
                  placeholder="votre nom"
                  value={currentUser.user.lastname}
                />
              </div>
              <div className="form-group">
                <input type="password" name="password" className="form-control" placeholder="Nouveau mot de passe" />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password_confirm"
                  className="form-control"
                  id="password"
                  placeholder="Confirmer le nouveau mot de passe"
                />
              </div>
              <button type="submit" className="mt-4 btn btn-custom-accent btn-block">
                Confirmer
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonorProfilUpdate;
