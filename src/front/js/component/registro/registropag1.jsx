import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/home.css";
import Chica from "../../../img/chica.png";
import Familia from "../../../img/familia.png";

export const Registropag1 = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  async function validacion(e) {
    if (!(await actions.validToken()))
      //false
      navigate("/login");
  }

  async function tipoUsuario(tipo) {
    if (tipo && (await actions.tipoUsuario(tipo))) {
      if (tipo === "cuidador") {
        navigate("/registropag2");
      } else if (tipo === "usuario") {
        navigate("/registrousuario");
      }
    }
  }

  useEffect(() => {
    validacion();
  }, []);

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className=" col-md-9 col-lg-7">
          <div className="card-group mt-3 shadow p-3 mb-5 bg-body-tertiary rounded">
            <div 
             role="button"
                tabIndex="0"
                onClick={() => tipoUsuario("familia")}
                className="text-decoration-none text-white card col-md-6 col-sm-12 p-md-2 p-sm-1 fondoclaro mx-2 position-relative mb-5 mb-sm-0">
              <img
                src={Familia}
                alt="Imagen Familia"
                width="130px"
                className="img-fluid top-0 start-50 translate-middle rounded-circle mb-3 img-thumbnail shadow-sm position-absolute"
              />
              
                <div className="card-body text-center text-decoration-none">
                  <h4 className="mb-2 mt-5  text-white">FAMILIAS</h4>
                  <p>
                    Encuéntra cuidador en tu zona rápidamente.
                    <br />
                    Soluciona imprevistos con niños, adultos mayores o mascotas.
                    <br />
                    Para unas pocas horas o para contratar
                  </p>
                </div>
            </div>

            <div role="button"
                tabIndex="0"
                onClick={() => tipoUsuario("cuidador")}
                className=" text-decoration-none text-white card p-4 col-md-6 col-sm-12 p-sm-1 p-md-2 fondoclaro mx-2 position-relative mt-5 mt-sm-0">
              <img
                src={Chica}
                alt="Imagen Cuidador/a"
                width="130px"
                className="img-fluid top-0 start-50 translate-middle rounded-circle mb-3 img-thumbnail shadow-sm position-absolute"
              />

              
                <div className="card-body text-center  ">
                  <div>
                    <h4 className="mb-2 mt-5  text-white">CUIDADORES</h4>
                    <p>
                      Publica tu perfil, cuentan tu experiencia y habilidades y
                      acércate un paso más a encontrar a que familia ayudar.{" "}
                    </p>
                  </div>
                </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
