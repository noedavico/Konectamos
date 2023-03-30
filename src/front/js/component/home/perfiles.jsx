import { Link } from "react-router-dom";
import React from "react";
import ImageWithFallback from "../imagenFallback";

export const PerfilesRandom = (props) => {

  return (
    <div className="col me-2">
      <div className=" card cardperfil  card-cover text-bg-light" style={{ width: "18rem", height: "30rem" }}>
        <img
          src={props?.foto}
          alt={props?.foto_alt}
          className="img-fluid img-thumbnail border border-4"  style={{height: "15rem"}}
          
        />
        <div className="card-body">

          <h3> {props.nombre}</h3>
          <p>

            Cuidador de
            {props.categoria === "peques" ? "niños" : props.categoria}
          </p>


          <p className="cuidad-container">
            <span>{props.ciudad}</span>
          </p>
          <p className="card-text">{props.descripcion}</p>

          <div className="row align-items-center">
           
              <div className="col-8 m-auto">
                <Link
                  className="btn btn-primary"
                  to={"/perfildetallado/" + props.id}
                >
                  Leer mas
                </Link>
              </div>
             
          </div>
        </div>
      </div>
    </div>

  );
};
