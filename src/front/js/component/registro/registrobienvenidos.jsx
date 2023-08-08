import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext"
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/home.css"
import Bienvenidos from "../../../img/bienvenidos.png";

export const RegistroBienvenidos = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  async function validacion(e) {
    setTimeout(async () => {
      let isLogged = await actions.validToken();
      if (!isLogged)
        //false
        navigate("/login");
    }, 200);
  }

  useEffect(() => {
    validacion();
  }, []);

  return (
    <div className="row justify-content-center text-center text">
      <div className="col-md-6 col-sm-12 ">
        <Link className="text  " to="/registropag1">
          <div className="container col-shadow p-2 ">
            <h2>¡Bienvenido!</h2>
            <h5>
              Busquemos al mejor cuidador o trabajo en tu zona {" "}
            </h5>
            <p>Solo te haremos un par de preguntas para conocerte mejor.</p>

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
