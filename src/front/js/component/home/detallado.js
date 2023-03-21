import React from "react";
import { Link } from "react-router-dom";


export const Detallados = () => {
    const secciones = [
        {
            titulo: "Adultos Mayores",
            descripcion:
                "Cuidado, acompañiamiento, ocio, ayuda en el día a día, cuidado de tiempo completo o parcial y más...",
            urlImagen: "https://via.placeholder.com/300x200/2d7895",
            imgAlt: "prueba-1"
        },
        {
            titulo: "Niños",
            descripcion:
                "Acompañamiento y recogida del colegio, ayuda de última hora, días de semana, fines de semana, noches y más...",
            urlImagen: "https://via.placeholder.com/300x200/2d7895",
            imgAlt: "prueba-2"
        },
        {
            titulo: "Mascotas",
            descripcion: "Paseo, Familia de acogida, Entrenadores, juegos, y más..",
            urlImagen: "https://via.placeholder.com/300x200/2d7895",
            imgAlt: "prueba-3"
        },
    ];

    return (
        <div className="container px-4 py-5" id="detallado">
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-4 justify-content-between">
                {secciones.map((seccion, index) => (
                    <div key={index} className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                            <img src={seccion.urlImagen} alt={seccion.imgAlt} className="w-100" />
                        </div>
                        <h3 className="fs-2">{seccion.titulo}</h3>
                        <p>{seccion.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
