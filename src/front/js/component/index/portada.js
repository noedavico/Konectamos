import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../store/appContext";

export const Portada = () => {

    return (
        <div id="portada" className="mt-5 mt-md-auto container p-5 object-fit-cover position-relative" >
            <div className="row justify-content-between align-items-center bg-secondary bg-opacity-50 position-absolute top-50 start-50 translate-middle w-75">
                <div className="row justify-content-around align-items-center mx-auto m-lg-5 mt-0 p-5 g-2 g-lg-4">
                    <button className="col-auto btn btn-primary py-2 px-5">Cuidado de mayores</button>
                    <button className="col-auto btn btn-primary py-2 px-5">Cuidado de niños</button>
                    <button className="col-auto btn btn-primary py-2 px-5">Cuidado de mascotas</button>
                </div>
                <div className="row mb-5">
                    <div className="col">
                        <h2>¿Qué tipo de ayuda necesitas?</h2>
                        <select className="form-select">
                            <option value="">Selecciona una opción</option>
                            <option value="cuidado-mayores">Cuidado de mayores</option>
                            <option value="cuidado-ninos">Cuidado de niños</option>
                            <option value="cuidado-mascotas">Cuidado de mascotas</option>
                        </select>
                    </div>
                    <div className="col">
                        <h2>Dinos tu ciudad</h2>
                        <select className="form-select">
                            <option value="">Selecciona una ciudad</option>
                            <option value="madrid">Madrid</option>
                            <option value="barcelona">Barcelona</option>
                            <option value="valencia">Valencia</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="bg-image-overlay"></div>
        </div>
    );
};
