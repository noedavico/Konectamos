import React from "react";
import { Link } from "react-router-dom";
import Cuidadores from "../../../img/cuiadoress.png";


export const EresCuidador = () => {
    return (
        <div className="container-fluid mb-4 py-3" style={{backgroundColor:"#2d7895"}}>
            <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h2>¿Eres cuidador/a?</h2>
                    <p>
                        Publica tu perfil, cuentan tu experiencia y habilidades y acércate un paso más a encontrar a que familia ayudar.
                    </p>
                    <Link to="/registro"><button className="btn btn-primary mt-3 w-50 mx-auto">Registrarse</button> </Link>
                </div>
                <div className="col-md-6">
                    <img
                        src={Cuidadores}
                        alt="Cuidador/a"
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
    );
};
