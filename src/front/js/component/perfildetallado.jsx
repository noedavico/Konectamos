import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import ImageWithFallback from "./imagenFallback.js";
import Chica from "./../../img/chica.png";

export const PerfilDetallado = (props) => {
  const { store, actions } = useContext(Context);
  const usuario = store.infoDetallada;
  return (
    <div className="container fluid m-3 " id="about">
      <div className="  row  flex-row">
        <div className="col-md-4 position-relative top-50 start-10 mt-3">
          <div className="card user-card fondonaranja  ">
            <div className="rounded shadow-sm py-5 px-4 fondonaranja"></div>
            <div className="card-block text-center">
              <div className="user-image">
                <ImageWithFallback
                  imageUrl={""}
                  alt="."
                  className="img-fluid top-0 start-50 translate-middle rounded-circle mb-3  p-3 fondonaranja shadow-sm position-absolute"
                />
              </div>
              <h3 className="m-t-25 m-b-10 ">
                {usuario?.datos?.nombre} {usuario?.datos?.apellido}{" "}
              </h3>
              <p className="text-muted">
                {" "}
                {usuario?.info?.direccion?.ciudad} | {usuario?.info?.genero} |{" "}
                {usuario?.info?.fecha_nacimiento}{" "}
              </p>

              <div className=" fondonaranja counter-block m-t-10 p-20">
                <div className="row justify-content-center fs-2">
                  <div className="col-auto">
                    <a
                      target={"_blank"}
                      href={`https://wa.me/${usuario?.info?.telefono}?text="Estoy interesado en contratarte"`}
                    >
                      <i className=" fa-brands fa-whatsapp"></i>
                    </a>
                  </div>
                  <div className="col-auto">
                    <a
                      target={"_blank"}
                      href={`https://facebook.com/${usuario?.info?.facebook}`}
                    >
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </div>
                  <div className="col-auto">
                    <a
                      target="_blank"
                      href={`https://twitter.com/${usuario?.info?.twitter}`}
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center ">
                <div className="">
                  <a target={"_blank"} href={`mailto:${usuario?.datos?.email}`}>
                    <em className="fs-2">
                      <i className="fa-regular fa-envelope"></i>
                    </em>
                    {usuario?.datos?.email}
                  </a>
                </div>
                <div className="">
                  <a target={"_blank"} href={`tel:${usuario?.info?.telefono}`}>
                    <em className="fs-2">
                      <i className="fa-solid fa-mobile-screen-button"></i>
                    </em>
                    {usuario?.info?.telefono}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card  rounded shadow-sm fondonaranja my-2">
            <div className=" card-header row aling-item-center">
              <h5 className="  text-center">
                {" "}
                <i className=""></i> <strong> Me describo como... </strong>{" "}
              </h5>
            </div>
            <div className="card-body justify-content-center py-4 px-4  ">
              <span className="badge rounded-pill bg-success mx-2 p-2">
                Alegre
              </span>
              <span className="badge rounded-pill bg-danger mx-2 p-2">
                Entusiasta
              </span>
              <span className="badge rounded-pill bg-warning text-dark  x-2 p-2">
                Creativa
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-sm-12 col-md-6 ">
          <div className="  card text-dark bg-light my-3">
            <h3 className="card-header dark-color">Sobre mi </h3>
            <div className="card-body theme-color lead">
              <p>{usuario?.info?.descripcion}</p>
            </div>
          </div>

          <div className="row justify-content-center p-3 ">
            <div className="card col-4 text-dark bg-light   ">
              <div className="card-header">
                <span className="panel-icon">
                  <i className="fa fa-pencil"></i>
                </span>
                <span className="panel-title">
                  {" "}
                  <h6>Experiencia</h6>{" "}
                </span>
              </div>
              <div className="card-body pb5 ">
                <p className="text-muted"> {usuario?.info?.experiencia}</p>
              </div>
            </div>

            <div className="card col-4 text-dark bg-light ">
              <div className="card-header">
                <span className="panel-icon">
                  <i className="fa fa-pencil"></i>
                </span>
                <span className="panel-title">
                  <h6>Formacion</h6>
                </span>
              </div>
              <div className="card-body pb5 ">
                <p className="text-muted pb10">
                  {" "}
                  {usuario?.categoria?.formacion}
                </p>
              </div>
            </div>

            <div className="card col-4 text-dark bg-light   ">
              <div className="card-header">
                <span className="panel-icon">
                  <i className="fa fa-pencil"></i>
                </span>
                <span className="panel-title">
                  {" "}
                  <h6>Educacion</h6>{" "}
                </span>
              </div>
              <div className="card-body pb5 ">
                <p className="text-muted"> {usuario?.info?.educacion} </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center p-3 ">
            <div className="card col-4 text-dark bg-light ">
              <div className="card-header">
                <span className="panel-icon">
                  <i className="fa fa-pencil"></i>
                </span>
                <span className="panel-title">
                  <h6>Idiomas</h6>
                </span>
              </div>
              <div className="card-body pb5 ">
                <p className="text-muted pb10"> {usuario?.info?.idiomas}</p>
              </div>
            </div>
            <div className="card col-4 text-dark bg-light   ">
              <div className="card-header">
                <span className="panel-icon">
                  <i className="fa fa-pencil"></i>
                </span>
                <span className="panel-title">
                  {" "}
                  <h6>Servicio</h6>{" "}
                </span>
              </div>
              <div className="card-body pb5 ">
                <p className="text-muted"> {usuario?.categoria?.servicios}</p>
              </div>
            </div>

            <div className="card col-4 text-dark bg-light ">
              <div className="card-header">
                <span className="panel-icon">
                  <i className="fa fa-pencil"></i>
                </span>
                <span className="panel-title">
                  <h6>Formacion</h6>
                </span>
              </div>
              <div className="card-body pb5 ">
                <p className="text-muted pb10">
                  {" "}
                  {usuario?.categoria?.formacion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
