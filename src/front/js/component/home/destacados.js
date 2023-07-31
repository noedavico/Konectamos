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
                "Filtra según tus necesidades. Lee reseñas de otros usuarios para tomar una decisión informada. Compara la experiencia y los precios ofrecidos por los profesionales.",
            src: Busca,
            imgAlt: "prueba-1",
        },
        {
            title: "Conoce",
            description:
                "Contacta de inmediato y sin intermediario. Programa una videollamada o una cita en persona para establecer una conexión personal desde el principio.",
            src: Conoce,
            imgAlt: "prueba-2",
        },
        {
            title: "Escoge",
            description:
                "Elije al profesional que mejor se ajuste a sus necesidades y preferencias. Acuerda la remuneración y el horario directamente con el profesional seleccionado.",
            src: Escoge,
            imgAlt: "prueba-3",
        },
    ];

    return (
      
            <div className="container pt-4 mt-5 ">
    <div className="row text-center mt-5">{secciones.map((seccion, index) => (
       <div key={index} className="col-lg-4 col-md-4 col-sm-6 mb-5 position-relative px-2" >
        <img src={seccion.src}
            alt={seccion.imgAlt} 
              width="130px" 
              className="img-fluid top-0 start-50 translate-middle rounded-circle mb-3 img-thumbnail shadow position-absolute"/>
            <div className=" rounded shadow-sm py-5 px-2 mb-5 fondoclaro" style={{minHeight:"250px"}} >
                <h5 className="mb-2  my-4 text-uppercase text-light">{seccion.title}</h5>
                <span className="small text-light p-auto">{seccion.description}</span>
            </div>
        </div>
    ))}
    </div>
</div>
       
    );
};
