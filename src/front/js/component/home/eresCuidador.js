import React from "react";
import { Link } from "react-router-dom";

export const EresCuidador = () => {
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h2>¿Eres cuidador/a?</h2>
                    <p>
                        Publica tu perfil, cuentan tu experiencia y habilidades y acércate un paso más a encontrar a que familia ayudar.
                    </p>
                    <button className="btn btn-primary mt-3 w-50 mx-auto">Ver más</button>
                </div>
                <div className="col-md-6">
                    <img
                        src="https://via.placeholder.com/500x250"
                        alt="Cuidador/a"
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
    );
};
