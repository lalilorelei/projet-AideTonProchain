import React from 'react';

import './login.scss';

const Login = () => {
    return(
        <>
            <div className="container mt-5">
                
                <div className="row">
                    <div className="col text-center">
                        <h1>Connexion</h1>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <form className="mt-4">
                            <div className="form-group">
                                <label for="exampleInputEmail1">Adresse email ou nom d'utilisateur</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entrez votre adresse e-mail" />
                            </div>
                            <div className="form-group mt-4">
                                <div className="d-flex justify-content-between">
                                    <label for="exampleInputPassword1">Mot de passe</label>
                                    <a href="#" className="text-small">Mot de passe oublié ?</a>
                                </div>
                                
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Entrez votre mot de passe" />
                            </div>
                            <button type="submit" className="mt-4 btn btn-custom-accent btn-block">Se connecter</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;