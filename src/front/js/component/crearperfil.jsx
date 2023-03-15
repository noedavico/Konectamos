import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom"
import Adultos from "../../img/cuidador.png";
import Paseador from "../../img/paseador.png";
import Niños from "../../img/niñera.png";
import "../../styles/home.css";

export const Crearperfil  = () => {
    
    const navigate = useNavigate();

return (
<div>
<div className="container py-5">
    <div className="row text-center">
        <div className="col-lg-8 mx-auto">
            <h1 className="display-5">¿Que tipo de cuidado ofreces? </h1>
            <p className="lead mb-0"> Completa tu perfil y encuentra nuevas oportunidades.</p>
        </div>
    </div>
</div>

<div className="container mt-4">
    <div className="row text-center">

        <div className="col-xl-4 col-sm-6 mb-5 position-relative">
        <img src={Niños} alt="." width="130" className="img-fluid top-0 start-50 translate-middle rounded-circle mb-3 img-thumbnail shadow-sm position-absolute"/>
            <div className=" rounded shadow-sm py-5 px-4 fondoclaro" style={{height:"250px"}} >
                <h5 className="mb-2 mt-5  text-white">Niños</h5><span className="small text-uppercase  text-white"> Acompañamiento y recogida del colegio, ayuda de última hora, días de semana ,fines de semana, noches y mas... </span>
            </div>
        </div>

        <div className="col-xl-4 col-sm-6 mb-5 position-relative">
        <img src= {Adultos} alt="." width="130" className="img-fluid top-0 start-50 translate-middle rounded-circle mb-3 img-thumbnail shadow-sm position-absolute"/>
            <div className="rounded shadow-sm py-5 px-4 fondoclaro" style={{height:"250px"}} >
                <h5 className="mb-2 mt-5 text-white">Adultos mayores</h5><span className="small text-uppercase  text-white">Cuidado, Acompañiamiento, Ocio,  ayuda en el día a día, cuidado de tiempo completo o parcial y  mas.</span>
            </div>
        </div>

        <div className="col-xl-4 col-sm-6 mb-5 position-relative">
        <img src={Paseador} alt="." width="130" className="img-fluid top-0 start-50 translate-middle rounded-circle mb-3 img-thumbnail shadow-sm position-absolute"/>
            <div className=" rounded shadow-sm py-5 px-4 fondoclaro"  style={{height:"250px"}} >
                <h5 className="mb-2  mt-5 text-white">Mascotas</h5><span className="small text-uppercase  text-white"> Paseo, Familia de acogida, Entrenadores, Guardería de Día, juegos, y mas.. <br/></span>
            </div>
        </div>
    </div>
</div>
</div>
)
}