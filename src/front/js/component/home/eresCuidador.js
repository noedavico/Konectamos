import React from "react";
import { Link } from "react-router-dom";
import Cuidadores from "../../../img/cuiadoress.png";


export const EresCuidador = () => {
    return (
        <div className="container-fluid mb-4 py-3 text-white" style={{backgroundColor:"#97A198"}}>
            <div className="row">
                <div className="col-md-6 col-lg-5 d-flex flex-column justify-content-center">
                    <h2>¿Eres cuidador/a?</h2>
                    <span className="pt-1 px-2">
                    Publica tu perfil, cuentanos tu experiencia y habilidades y  encuentra la familia perfecta para ti,  marca la diferencia en la vida de quienes  lo necesitan. 
                    </span>
                    <span> ¡Haz parte de nuestra comunidad y crea un impacto positivo en el mundo del cuidado! </span>
                    
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
