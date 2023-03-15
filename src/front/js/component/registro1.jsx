import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom"
import "../../styles/home.css";
import Chica from "../../img/chica.png";
import Familia from "../../img/familia.png";


export const Registro1  = () => {
    
    const navigate = useNavigate();

return (
<div className="container-fluid mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card-group mt-3 shadow p-3 mb-5 bg-body-tertiary rounded ">
          <div className="card p-4 fondoclaro mx-2 position-relative " >
          <img src={Familia} alt="." width="130" class="img-fluid top-0 start-50 translate-middle rounded-circle mb-3 img-thumbnail shadow-sm position-absolute"/>
          <Link className=" text-decoration-none text-white" to='/registro2'>
            <div className="card-body text-center text-decoration-none">
            <h4 class="mb-2 mt-5  text-white">FAMILIAS</h4>
                <p>Encuéntra cuidador en tu zona rápidamente.
                    <br/>Soluciona imprevistos con niños, adultos mayores o mascotas. 
                <br/>Para unas pocas horas o para contratar </p>
                
            </div>
            </Link>
          </div>

          
          <div className="card p-4 fondoclaro mx-2 position-relative " >
          <img src={Chica} alt="." width="130" class="img-fluid top-0 start-50 translate-middle rounded-circle mb-3 img-thumbnail shadow-sm position-absolute"/>

          <Link className=" text-decoration-none text-white" to='/registro2'>
            <div className="card-body text-center ">
              <div>
                <h4 class="mb-2 mt-5  text-white">CUIDADORES</h4>
                <p >Publica tu perfil, cuentan tu experiencia y habilidades y acércate un paso más a encontrar a que familia ayudar. </p>
                </div>
            </div>
            </Link> 
          </div>
          
        </div>
      </div>
    </div>
  </div>
 )  
}