import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import Adultos from "../../../img/cuidador.png";
import Paseador from "../../../img/paseador.png";
import Niños from "../../../img/niñera.png";
import "../../../styles/home.css";

export const Registropag2 = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  async function validacion(e) {
    if (!(await actions.validToken()))
      //false
      navigate("/login");
  }

  async function ajusteCategoria(categoria) {
    if (categoria && (await actions.setCategoria(categoria)))
      navigate("/crearperfil/1");
  }

  useEffect(() => {
    validacion();
  }, []);

  return (
    <div>
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-5">¿Que tipo de cuidado ofreces? </h1>
            <p className="lead mb-0">
              {" "}
              Completa tu perfil y encuentra nuevas oportunidades.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row text-center  d-flex justify-content-center">
          <div
            role="button"
            tabIndex="0"
            className="col-lg-4 col-md-10 col-sm-12 mb-5 position-relative"
            onClick={() => ajusteCategoria("peques")}
          >
            <img
              src={Niños}
              alt="niños"
              width="130"
              className="img-fluid top-0 start-50 translate-middle rounded-circle mb-3 img-thumbnail shadow-sm position-absolute"
            />
            <div
              className=" rounded shadow-sm py-5 px-4 fondoclaro"
              style={{ minHeight: "240px" }}
            >
              <h5 className="mb-2 mt-5  text-white">Niños</h5>
              <span className="small text-uppercase  text-white">
                {" "}
                Acompañamiento y recogida del colegio, ayuda de última hora,
            fines de semana, noches y mas...{" "}
              </span>
            </div>
          </div>

          <div
            role="button"
            tabIndex="0"
            className="col-lg-4 col-md-10 col-sm-12  mb-5 mt-5 mt-lg-0 position-relative"
            onClick={() => ajusteCategoria("mayores")}
          >
            <img
              src={Adultos}
              alt="."
              width="130"
              className="img-fluid top-0 start-50 translate-middle rounded-circle mb-3 img-thumbnail shadow-sm position-absolute"
            />
            <div
              className="rounded shadow-sm py-5 px-4 fondoclaro"
              style={{ minHeight: "240px" }}
            >
              <h5 className="mb-2 mt-5 text-white">Adultos mayores</h5>
              <span className="small text-uppercase  text-white">
                Cuidado, Acompañiamiento, Ocio, ayuda en el día a día, cuidado
                de tiempo completo o parcial y mas.
              </span>
            </div>
          </div>

          <div
            role="button"
            tabIndex="0"
            className="col-lg-4 col-md-10 col-sm-12  mb-5 mt-5 mt-lg-0 position-relative"
            onClick={() => ajusteCategoria("mascotas")}
          >
            <img
              src={Paseador}
              alt="."
              width="130"
              className="img-fluid top-0 start-50 translate-middle rounded-circle mb-3 img-thumbnail shadow-sm position-absolute"
            />
            <div
              className=" rounded shadow-sm py-5 px-4 fondoclaro"
              style={{ minHeight: "240px" }}
            >
              <h5 className="mb-2  mt-5 text-white">Mascotas</h5>
              <span className="small text-uppercase  text-white">
                {" "}
                Paseo, Familia de acogida, Entrenadores, Guardería de Día,
                juegos, y mas.. <br />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
