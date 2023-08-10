import { Link } from "react-router-dom";
import React from "react";
import { FaDog, FaUser, FaChild } from "react-icons/fa";
import ImageWithFallback from "../utils/imagenFallback";

export const PerfilesRandom = (props) => {
  const descripcionCorta = props.descripcion?.trim().substring(0, 70) + "...";
  const nombre = props.nombre?.trim().split(" ");
  const primerNombre = nombre ? nombre[0] : "";
  const apellido  = nombre ? nombre[nombre.length - 1] : "";
  const nombreApellido = `${primerNombre} ${apellido}`;
  console.log(nombreApellido)
  return (
    <div className="col me-2 my-5">
      <div className="card shadow text-bg-light" style={{ width: "16rem", height: "28rem" ,  border: "none"}}>
        <img src={props.foto ? props.foto : "../../../img/usuarios/sinfoto.png"} alt={props?.foto_alt} className="img-fluid  border-4" style={{ height: "14rem" }} />
        <div className="card-body" style={{ height: "10rem" }}>
          <h4 className="text-capitalize">{nombreApellido}</h4>
          <div className="cuidad-container">
            <span>Cuidador de {props.categoria === "peques" ? "niños" : props.categoria}</span>
          </div>
          <p className="text-capitalize">{props.ciudad}</p>
          <p className="fw-light">
            <small>{descripcionCorta ? descripcionCorta : "..."}</small>
          </p>
        </div>
        <div className="row align-items-center my-2">
          <div className="col-8 m-auto">
            <Link to={"/perfildetallado/" + props.id}
                className="link-perfil"
                style={{
                  "--bs-btn-padding-y": ".25rem",
                  "--bs-btn-padding-x": ".5rem",
                  "--bs-btn-font-size": ".75rem"
                }}
              >
                Ver perfil
             
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};