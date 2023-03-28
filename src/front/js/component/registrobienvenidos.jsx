import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import Bienvenidos from "../../img/bienvenidos.png";

export const RegistroBienvenidos = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  async function validacion(e) {
    let isLogged = await actions.validToken();
    if (!isLogged) //false
      navigate("/login")

  }

  useEffect(() => {
    validacion();
  }, [])


  return (
    <div className="row justify-content-center text-center">
      <div className="col-md-6 col-sm-12 ">
        <Link className="text-decoration-none " to="/registropag1">
          <div className="container col-shadow p-2">
            <h2>¡Bienvenido!</h2>
            <h6>
              Busquemos al mejor cuidador o trabajo en tu zona rapidamente{" "}
            </h6>
            <p>Solo te haremos un par de preguntas para conocerte mejor</p>
          </div>

          <img
            src={Bienvenidos}
            alt="bienvenidos"
            width="400px"
            className="img-fluid "
          />

        </Link>
      </div>
    </div>
  );
};
