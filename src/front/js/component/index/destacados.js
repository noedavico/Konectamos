import React from "react";
import { Link } from "react-router-dom";



export const Destacados = () => {
    const secciones = [
        {
            title: "Busca",
            description: "Filtra según tus necesidades. Revisa perfiles detallados. Lee reseñas de otras familias. Compara experiencia y precio.",
            urlImagen: "https://via.placeholder.com/300x200/2d7895",
            imgAlt: "prueba-1"
        },
        {
            title: "Conoce",
            description: "Contacta de inmediato y sin intermediario. Programa una videollamada o concierta una cita para reunirte personalmente",
            urlImagen: "https://via.placeholder.com/300x200/2d7895",
            imgAlt: "prueba-2"
        },
        {
            title: "Escoge",
            description: "Haz tu elecccion. Acuerda su remuneración y las condiciones de trabajo",
            urlImagen: "https://via.placeholder.com/300x200/2d7895",
            imgAlt: "prueba-3"
        },
    ];

    return (
        <div className="container px-4 py-5" id="featured-2">
            <h2 className="pb-2 border-bottom text-light p-3">
                Encontrar ahora cuidador es más fácil
            </h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-4 justify-content-between">
                {secciones.map((seccion, index) => (
                    <div className="feature col" key={index}>
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                            <img src={seccion.urlImagen} alt={seccion.imgAlt} className="w-100" />
                        </div>
                        <h3 className="fs-2">{seccion.title}</h3>
                        <p>{seccion.description}</p>
                        <Link to="#" className="btn btn-primary d-inline-flex align-items-center">
                            Más información
                            <i className="fa-solid fa-chevron-right" width="1em" height="1em"></i>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
