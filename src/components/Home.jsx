import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <h1 className="display-4 mb-4">Bienvenido a Ticketera Indie</h1>
                    <p className="lead mb-4">
                        Tu destino para encontrar los mejores eventos independientes y mainstream.
                        Desde conciertos hasta obras de teatro, todo en un solo lugar.
                    </p>
                    <div className="row g-4 py-4">
                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Eventos</h5>
                                    <p className="card-text">Explora nuestra selección de eventos destacados.</p>
                                    <Link to="/eventos" className="btn btn-primary">Ver Eventos</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Próximamente</h5>
                                    <p className="card-text">Descubre los eventos que están por venir.</p>
                                    <button className="btn btn-secondary" disabled>Muy Pronto</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">Mis Tickets</h5>
                                    <p className="card-text">Gestiona tus entradas y reservas.</p>
                                    <button className="btn btn-secondary" disabled>Muy Pronto</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;