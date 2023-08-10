import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import ImageWithFallback from "./utils/imagenFallback";

import foto from "../../img/usuarios/sinfoto.png"
export const Todoslosperfiles = (props) => {
  const { store, actions } = useContext(Context);
  const randomRating = Math.floor(Math.random() * (5 - 2 + 1)) + 1;

  return (
    <div className="container cardperfil shadow m-3 p-3 ">
      <div className="row">
        <div className="col-12 col-md-3 m-auto p-auto  ">
        <div class="ratio ratio-1x1">
          <img
            src={props.foto ? props.foto : foto} 
            alt={props?.foto_alt}
            className="img-fluid img-thumbnail border border-4 "
            height="100px"
          />
        </div>
        </div>
        <div className="col-12 col-md-8 m-auto p-auto">
          <div className="card-body">
            <div>
              <h3 className="text-capitalize"> {props.nombre}</h3>
              <div className="col-md-4 col-sm-6 col-xs-4 d-flex  align-items-center">
    <div className="d-flex justify-content-center align-items-center fs-5">
        <div>
            {[...Array(randomRating)].map((_, i) => (
                <i key={i} className="fas fa-star text-warning"></i>
            ))}
            {[...Array(5 - randomRating)].map((_, i) => (
                <i key={i} className="far fa-star text-warning"></i>
            ))}
        </div>
    </div>
</div>

              <p>
                Cuidador de{" "}
                {props.categoria === "peques" ? "niños" : props.categoria}{" "}
              </p>
            </div>
          </div>
          <p className="cuidad-container">
            <span className=" text-capitalize">{props.ciudad}</span>
          </p>
          <p className="card-text">{props.descripcion}</p>

          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-4 p-0">
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
    </div>
  );
};
