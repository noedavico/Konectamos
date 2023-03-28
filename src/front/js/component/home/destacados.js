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
                "Filtra según tus necesidades. Revisa perfiles detallados. Lee reseñas de otras familias. Compara experiencia y precio.",
            src: Busca,
            imgAlt: "prueba-1",
        },
        {
            title: "Conoce",
            description:
                "Contacta de inmediato y sin intermediario. Programa una videollamada o concierta una cita para reunirte personalmente",
            src: Conoce,
            imgAlt: "prueba-2",
        },
        {
            title: "Escoge",
            description:
                "Haz tu elecccion. Acuerda su remuneración y las condiciones de trabajo",
            src: Escoge,
            imgAlt: "prueba-3",
        },
    ];

    return (
        <div>
        <div className=" rounded shadow-sm p-1 my-5 " id="destacado">
            <h2 className=" fs-1 text-light m-auto rounded shadow-sm py-4 px-4">
                Encontrar  cuidador ahora es más fácil
            </h2>
            </div>
            <div className="container mt-5">
    <div className="row text-center mt-5">{secciones.map((seccion, index) => (
       <div key={index} className="col-xl-4 col-sm-6 mb-5 position-relative" >
        <img src={seccion.src}
            alt={seccion.imgAlt} 
              width="130px" 
              className="img-fluid top-0 start-50 translate-middle rounded-circle mb-3 img-thumbnail shadow-sm position-absolute"/>
            <div className=" rounded shadow-sm py-5 px-4 fondoclaro" style={{height:"200px"}} >
                <h5 className="mb-2  my-4 text-light">{seccion.title}</h5>
                <span className="small text-light ">{seccion.description}</span>
            </div>
        </div>
    ))}
    </div>
</div>
        </div>
    );
};
