import React from "react";
import { Link } from "react-router-dom";
import Adultos from "../../../img/cuidador.png";
import Paseador from "../../../img/paseador.png";
import Niños from "../../../img/niñera.png";

export const Detallados = () => {
  const secciones = [
    {
      titulo: "Adultos Mayores",
      categoria: "adultos",
      descripcion:
        "Cuidado, acompañiamiento, ocio, ayuda en el día a día, cuidado de tiempo completo o parcial y más...",
      src: Adultos,
      imgAlt: "prueba-1",
    },
    {
      titulo: "Niños",
      categoria: "peques",
      descripcion:
        "Acompañamiento y recogida del colegio, ayuda de última hora, días de semana, fines de semana, noches y más...",
      src: Niños,
      imgAlt: "prueba-2",
    },
    {
      titulo: "Mascotas",
      categoria: "mascota",
      descripcion: "Paseo, Familia de acogida, Entrenadores, juegos, y más..",
      src: Paseador,
      imgAlt: "prueba-3",
    },
  ];

  return (

<div className="container mt-5">
    <div className="row text-center mt-5">{secciones.map((seccion, index) => (
       <div key={index} className="col-xl-4 col-sm-6 mb-5 position-relative" >
         <Link className=" text-decoration-none text-white" to={"/perfiles/" + seccion.categoria}>
        <img src={seccion.src}
            alt={seccion.imgAlt} 
              width="130px" 
              className="img-fluid top-0 start-50 translate-middle rounded-circle mb-3 img-thumbnail shadow-sm position-absolute"/>
            <div className=" rounded shadow-sm py-5 px-4 fondoclaro" style={{height:"200px"}} >
                <h5 className="mb-2  my-4 text-white">{seccion.titulo}</h5>
                <span className="small text-uppercase  text-white">{seccion.descripcion}</span>
            </div>
            </Link>
        </div>
    ))}
    </div>
</div>

  );
};
