import React from 'react';


import illustration_qsn from '../../assets/img/illustration-qsn.jpg';
import mockup from '../../assets/img/mockup-donation.png';

import testimonies from '../../data/testimonies';
import './home.scss';

const Home = () => (
    <>
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Qui sommes-nous ?</h2>
                        <p>I think we need to start from scratch. I'll pay you in a week we don't need to pay upfront i hope you understand we are a startup, nor we don't need a contract, do we or can you please change the color theme of the website.</p>
                        <p>I got your invoice...it seems really high, why did you charge so much make it pop the target audience is makes and famles aged zero and up, so try a more powerful colour. I think we need.</p>
                    </div>
                    <div className="col d-none d-md-flex">
                        <img className="align-self-end" src={illustration_qsn} alt="illustration SQN" />
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-light py-5">
            <div className="container">
            <div className="row">
                <div className="col">
                <h2>Comment ça marche ?</h2>
                <ol id="steps-counter">
                    <li>Je vais la rencontre d'une personne</li>
                    <li>Je lui fais un don chez un commerçant via le site</li>
                    <li>La personne consomme ce don quand elle en a envie</li>
                </ol>
                </div>
                <div className="col d-none d-md-flex justify-content-center">
                <img className="align-self-end img-mockup" src={mockup} alt="mockup donation" />
            </div>
            </div>
            </div>
        </section>
        <section id="join-us" className="py-5">
            <div className="container">
            <div className="row">
                <div className="col text-center">
                <h2 className="mb-3">Rejoignez-nous !</h2>
                <span className="subtitle mb-5 d-block">Vous êtes...</span>
                </div>
            </div>
            <div className="row">
                
                { /* bloc donateur */ }
                <div className="col text-center d-flex flex-column profile-col">
                    <div className="profile-bloc">
                        Donateur
                    </div>
                    <p>For doing some work for us "pro bono" will really add to your portfolio i promise nor can my website be in english?. In an ideal world give us a complimentary.</p>
                    <a href="#" className="text-accent">Nous rejoindre</a>
                </div>

                { /* bloc bénéficiaire */ }
                <div className="col text-center d-flex flex-column profile-col">
                    <div className="profile-bloc">
                        Bénéficiaire
                    </div>
                    <p>For doing some work for us "pro bono" will really add to your portfolio i promise nor can my website be in english?. In an ideal world give us a complimentary.</p>
                    <a href="#" className="text-accent">Nous rejoindre</a>
                </div>

                { /* bloc donateur */ }
                <div className="col text-center d-flex flex-column profile-col">
                    <div className="profile-bloc">
                        Commerçant
                    </div>
                    <p>For doing some work for us "pro bono" will really add to your portfolio i promise nor can my website be in english?. In an ideal world give us a complimentary.</p>
                    <a href="#" className="text-accent">Nous rejoindre</a>
                </div>
            </div> 
            </div>
        </section>
        <section className="bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h2>Témoignages</h2>
                    </div>
                </div>
                <div className="row">
                    {testimonies.map((testimony) => {
                        return (
                            <div className="col-sm">
                                <div className="testimony">
                                    <p className="text-small">{testimony.text}</p>
                                    <div className="testimony-metas">
                                        <img src={testimony.avatar_url} alt={testimony.name} />
                                        <span className="name">{testimony.name} - </span>
                                        <span className="role">{testimony.role}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    </>
);

export default Home;