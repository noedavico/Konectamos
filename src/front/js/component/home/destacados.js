import React from "react";
import { Link } from "react-router-dom";
import Busca from "../../../img/busca.png";
import Escoge from "../../../img/escoge.png";
import Conoce from "../../../img/conoce.png";

export const Destacados = () => {
    const secciones = [
        {
            title: "Busca",
            description:
<<<<<<< HEAD
                "Filtra según tus necesidades. Lee reseñas de otros usuarios para tomar una decisión informada. Compara la experiencia y los precios ofrecidos por los profesionales.",
=======
                "Filtra según tus necesidades. Revisa perfiles detallados. Lee reseñas de otras familias. Compara experiencia y precio.",
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
            src: Busca,
            imgAlt: "prueba-1",
        },
        {
            title: "Conoce",
            description:
<<<<<<< HEAD
                "Contacta de inmediato y sin intermediario. Programa una videollamada o una cita en persona para establecer una conexión personal desde el principio.",
=======
                "Contacta de inmediato y sin intermediario. Programa una videollamada o concierta una cita para reunirte personalmente",
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
            src: Conoce,
            imgAlt: "prueba-2",
        },
        {
            title: "Escoge",
            description:
<<<<<<< HEAD
                "Elije al profesional que mejor se ajuste a sus necesidades y preferencias. Acuerda la remuneración y el horario directamente con el profesional seleccionado.",
=======
                "Haz tu elecccion. Acuerda su remuneración y las condiciones de trabajo",
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
            src: Escoge,
            imgAlt: "prueba-3",
        },
    ];

    return (
      
<<<<<<< HEAD
            <div className="container pt-1 mt-5 ">
    <div className="row text-center mt-5">{secciones.map((seccion, index) => (
       <div key={index} className="col-lg-4 col-md-4 col-sm-6 mb-5 position-relative px-2" >
=======
            <div className="container pt-4 mt-5">
    <div className="row text-center mt-5">{secciones.map((seccion, index) => (
       <div key={index} className="col-lg-4 col-md-4 col-sm-6 mb-5 position-relative" >
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
        <img src={seccion.src}
            alt={seccion.imgAlt} 
              width="130px" 
              className="img-fluid top-0 start-50 translate-middle rounded-circle mb-3 img-thumbnail shadow position-absolute"/>
<<<<<<< HEAD
            <div className=" rounded shadow-sm py-5 px-2 mb-5 fondoclaro" style={{minHeight:"250px"}} >
=======
            <div className=" rounded shadow-sm py-5 px-2 mb-5 fondoclaro" style={{height:"240px"}} >
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
                <h5 className="mb-2  my-4 text-uppercase text-light">{seccion.title}</h5>
                <span className="small text-light p-auto">{seccion.description}</span>
            </div>
        </div>
    ))}
    </div>
</div>
       
    );
};
