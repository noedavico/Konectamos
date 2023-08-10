import React, { useState, useContext, useRef } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/home.css";
import ImageWithFallback from "./utils/imagenFallback.js";
import Chica from "./../../img/chica.png";

export const PerfilDetallado = () => {
  const { store } = useContext(Context);
  const usuario = store.infoDetallada;
  const colores = ["bg-success", "bg-danger", "bg-warning"];
  const containerRef = useRef(null);
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (event) => {
    startX = event.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
    containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (event) => {
    const x = event.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Ajusta la velocidad del desplazamiento

    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    containerRef.current.style.cursor = "grab";
  };

  const handleMouseLeave = () => {
    containerRef.current.style.cursor = "grab";
  };
  return (
    <div className="container fluid"  >
      <div className="row flex-row">
        <div className="col-md-4 position-relative top-50 start-10 mt-5">
          <div className="card text-center" style={{"minHeight":"18rem"}}>
              <div className="user-image">
                <img
                  src={usuario?.info?.foto?.foto_imagen ? usuario?.info?.foto?.foto_imagen : Chica} 
                  alt={usuario?.info?.foto?.nombre}
                  width="200px"
                  className="img-fluid top-0 start-50 translate-middle rounded-circle mb-3  p-3  position-absolute"
                />
              </div>
              <div className="d-flex  fondox justify-content-center align-items-end " style={{"minHeight":"20rem"}}>
                <div className="">
              <h3 className="m-t-25 m-b-10 mt-3">
                {usuario?.datos?.nombre} {usuario?.datos?.apellido}{" "}
              </h3>
              <p className="text-muted mb-2">
                {" "}
                {usuario?.info?.direccion?.ciudad} | {usuario?.info?.genero} |{" "}
                {usuario?.info?.fecha_nacimiento}{" "}
              </p>

              <div className=" m-t-10 p-20">
              
                <div className="row justify-content-center fs-2">
                  {usuario?.info?.telefono ? (
                    <div className="col-auto">
                      <a
                        target={"_blank"}
                        href={`https://wa.me/${usuario?.info?.telefono}?text="Estoy interesado en contratarte"`}
                      >
                        <i className="fa-brands fa-whatsapp"></i>
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                  {
                    <div className="col-auto">
                      <a
                        target={"_blank"}
                        href={`https://facebook.com/${usuario?.info?.facebook}`}
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </div>
                  }
                  {
                    <div className="col-auto">
                      <a
                        target="_blank"
                        href={`https://twitter.com/${usuario?.info?.twitter}`}
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </div>
                  }
                </div>
              </div>

              <div className="row justify-content-center pb-2">
                <div className="my-1">
                  <a
                    className="nav-link perfil p-1"
                    target={"_blank"}
                    href={`mailto:${usuario?.datos?.email}`}
                  >
                    <em className="fs-4">
                      <i className="fa-regular fa-envelope"></i>
                    </em>
                    <span> {usuario?.datos?.email}</span>
                  </a>
                </div>
                {usuario?.info?.telefono ? (
                  <div className="my-1">
                    <a
                      className="nav-link perfil p-1"
                      target={"_blank"}
                      href={`tel:${usuario?.info?.telefono}`}
                    >
                      <em className="fs-4">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                      </em>
                      <span> {usuario?.info?.telefono}</span>
                    </a>
                  </div>
                ) : (
                  ""
                )}
              </div>
              </div>
          </div>
          </div>
          <div className="card cardperfil rounded shadow-sm my-4">
            <div className=" card-header aling-item-center">
              <h5 className="  text-center">
                {" "}
                <i className=""></i> <strong> Me describo como... </strong>{" "}
              </h5>
            </div>
            <div className="card-body justify-content-center p-2  ">
              {usuario?.info?.aptitudes?.split(";").map((item, i) => (
                <span
                  key={i}
                  className={`badge rounded-pill ${colores[i % 3]} m-1 p-2`}
                >
                  {item}
                </span>
              ))}
              <span className="badge rounded-pill mx-2 p-2">Entusiasta</span>
              <span className="badge rounded-pill x-2 p-2">Creativa</span>
            </div>
          </div>
          <div className="card cardperfil rounded shadow-sm my-4">
            <div className=" card-header aling-item-center">
              <h5 className="  text-center">
                {" "}
                <i className=""></i> Tarifa{" "}
              </h5>
            </div>
            <div className="card-body  py-4 px-4  ">
              <span className="">Por hora {usuario?.info?.tarifa}€</span>
              <br />
              <span className="">
                Plus fines de semana/noches {usuario?.info?.plus_tarifa} €
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-sm-12 col-md-6 mt-0 mt-md-3 pt-md-3">
          <div className="  card cardperfil shadow    t bg-light my-3">
            <h3 className="card-header dark-color"> Quien soy </h3>
            <div className="card-body theme-color lead">
              <p>{usuario?.info?.descripcion}</p>
            </div>
          </div>

          <div className="  card  shadow cardperfil   t bg-light my-3">
            <h3 className="card-header dark-color">Sobre mi </h3>
            <div className="card-body theme-color lead">
              <h5>Educacion </h5>
              <p className="text-muted"> {usuario?.info?.educacion}</p>
              <div className="border-bottom w-100 ml-5 my-1"></div>
              <h5>Formacion </h5>
              {console.log(usuario?.info?.fomracion)}
              {usuario?.info?.fomracion?.split(";").map((item, i) => (
                <p key={i} className="text-muted">
                  {" "}
                  {item}
                </p>
              ))}
              <div className="border-bottom w-100 ml-5 my-1"></div>
              <h5>Idiomas</h5>
              <p className="text-muted">
                {usuario?.info?.idiomas?.split(";").map((item, i) => (
                  <span key={i}> {item}</span>
                ))}
              </p>
              <div className="border-bottom w-100 ml-5 my-1"></div>
              <h5>Experiencia </h5>
              <p className="text-muted mb-0"> {usuario?.info?.experiencia}</p>
            </div>
          </div>
          <div className="conatiner">
          <section
          ref={containerRef}
          className="row flex-nowrap overflow-hidden text-center  gap-1 m"
          style={{ overflowX: "auto", cursor: "grab" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
            <div className="card cardperfil col-lg-4 col-md-8 col-sm-12  text-center bg-light ">
                <h5 className="fondonaranja row p-3 text-center">
                  {" "}
                  Servicios{" "}
                </h5>
                <div className="card-body p-1 pb-5">
                  {usuario?.info?.servicios?.split(";").map((item, i) => (
                    <p key={i} className="text-muted m-0 pb-2">
                      {" "}
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="card cardperfil col-lg-4 col-md-8 col-sm-12  text-center bg-light ">
                <h5 className="fondonaranja row p-3 text-center">
                  {" "}
                  Disponibilidad{" "}
                </h5>
                <div className="card-body pb5 ">
                  {usuario?.info?.tiposervicios?.split(";").map((item, i) => (
                    <p key={i} className="text-muted m-0 pb-1">
                      {" "}
                      {item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="card cardperfil col-lg-4 col-md-8 col-sm-12  text-center bg-light ">
                <h5 className="fondonaranja row p-3 text-center">
                  {" "}
                  He cuidado{" "}
                </h5>
                <div className="card-body pb-5 ">
                  {usuario?.info?.otros?.split(";").map((item, i) => (
                    <p key={i} className="text-muted p-1 m-0">
                      {" "}
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
