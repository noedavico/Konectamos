import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import ImageWithFallback from "./imagenFallback";

export const Todoslosperfiles = (props) => {
  const { store, actions } = useContext(Context);
  
  return (
    <div className="container cardperfil shadow m-3 p-3 ">
      <div className="row">
        <div className="col-12 col-md-6 m-auto p-auto  ">
          <img
            src={props?.foto}
            alt={props?.foto_alt}
            className="img-fluid img-thumbnail border border-4 p-2"
            width= "300px"
          />
        </div>
        <div className="col-12 col-md-6 m-auto p-auto">
          <div className="card-body">
            <div>
              <h3> {props.nombre}</h3>
              <p>
                Cuidador de{" "}
                {props.categoria === "peques" ? "niños" : props.categoria}{" "}
              </p>
            </div>
          </div>
          <p className="cuidad-container">
            <span>{props.ciudad}</span>
          </p>
          <p className="card-text">{props.descripcion}</p>

          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-6 p-2">
                <Link
                  className="btn btn-primary"
                  to={"/perfildetallado/" + props.id}
                >
                  Leer mas
                </Link>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6">
                <div className="rating">
                  <label htmlFor="stars-rating-5">
                    <i className="fa fa-star"></i>
                  </label>
                  <label htmlFor="stars-rating-4">
                    <i className="fa fa-star"></i>
                  </label>
                  <label htmlFor="stars-rating-3">
                    <i className="fa fa-star text-primary"></i>
                  </label>
                  <label htmlFor="stars-rating-2">
                    <i className="fa fa-star text-primary"></i>
                  </label>
                  <label htmlFor="stars-rating-1">
                    <i className="fa fa-star text-primary"></i>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
