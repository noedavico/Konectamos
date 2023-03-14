import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom"
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Fondo from "../../img/fondo7.jpg";

export const Registro1  = () => {
    
    const navigate = useNavigate();

return (
<div className="container-fluid  vh-100 " style={{ 
      backgroundImage: `url(${Fondo})`
    }}>
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card-group mt-3 shadow p-3 mb-5 bg-body-tertiary rounded">
        
          <div className="card p-4" >
          <Link className=" text-decoration-none" to='/registro2'>
            <div className="card-body text-center text-decoration-none">
            <h4>FAMILIAS</h4>
                <p>Encuéntra cuidador en tu zona rápidamente.
                    <br/>Soluciona imprevistos con niños, adultos mayores o mascotas. 
                <br/>Para unas pocas horas o para contratar </p>
                
            </div>
            </Link>
          </div>
         

          
          <div className="card p-4">
          <Link className=" text-decoration-none" to='/registro2'>
            <div className="card-body text-center ">
              <div>
                <h4>CUIDADORES</h4>
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