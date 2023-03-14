import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom"
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Fondo from "../../img/fondo.jpg";

export const Crearperfil  = () => {
    
    const navigate = useNavigate();

return (
<div>
<div class="container py-5">
    <div class="row text-center text-white">
        <div class="col-lg-8 mx-auto">
            <h1 class="display-5">Que tipo de cuidado ofreces? </h1>
            <p class="lead mb-0">Using Bootstrap 4 grid and utilities, create a nice team page.</p>
        </div>
    </div>
</div>
<div class="container">
    <div class="row text-center">
        <div class="col-xl-4 col-sm-6 mb-5 position-relative">
        <img src="https://via.placeholder.com/400x400" alt="." width="100" class="img-fluid top-0 start-50 translate-middle rounded-circle mb-3 img-thumbnail shadow-sm position-absolute"/>

            <div class=" rounded shadow-sm py-5 px-4" style={{backgroundImage: `url(${Fondo})`}}>
                <h5 class="mb-2 text-white">Niños</h5><span class="small text-uppercase  text-white"> Acompañamiento y recogida del colegio, ayuda de última hora, días de semana ,fines de semana, noches y mas... </span>

            </div>
        </div>

        <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4" style={{ backgroundImage: `url(${Fondo})`}} >
                <img src="https://via.placeholder.com/300x300" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-2 text-white">Adultos mayores</h5><span class="small text-uppercase  text-white">Cuidado, Acompañiamiento, Ocio,  ayuda en el día a día, cuidado de tiempo completo o parcial y  mas.</span>
            </div>
        </div>
        <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4"  style={{ backgroundImage: `url(${Fondo})`}}>
                <img src="https://via.placeholder.com/300x300" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h5 class="mb-2 text-white">Mascotas</h5><span class="small text-uppercase  text-white"> Paseo, Familia de acogida, Entrenadores, juegos, y mas..</span>
            </div>
        </div>
    </div>
</div>
</div>
)
}