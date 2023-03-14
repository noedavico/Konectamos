import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom"
import Logo from "../../img/Log.png";
import Fondo from "../../img/fondo7.jpg";

import "../../styles/home.css";

export const Login  = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {actions}= useContext(Context)
    const navigate = useNavigate();

    async function login(e) {
        e.preventDefault()
        let isLogged = await actions.login(email,password);
        if(isLogged){//true
          setEmail("")
          setPassword("")
          navigate("/")
        }
      }
return (
  
<div className="container mt-2 ">
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card-group mb-0 shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="card p-2 ">
      
            <img src={Logo}  className="img-fluid m-auto " style={{height: "200px"}} />
            <div className="card-body">
              <h1 className="text-center mb-4">Inicia sesión</h1>
              <div className="input-group mb-3">
              <form onSubmit={login}/>
                <span className="input-group-addon me-2"><i className="fa fa-user"></i></span>
                <input type="email" className="form-control" placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}/>
              </div>
              <div className="input-group mb-4">
                <span className="input-group-addon me-2"><i className="fa fa-lock"></i></span>
                <input type="password" className="form-control" placeholder="Contraseña"
                inputmode="numeric" minlength="8" maxlength="12"
                onChange={(e)=>setPassword(e.target.value)}
                value={password} required/>
              </div>
              <div className="row m-auto">
                <div className="col-4">
                  <button type="button" className="btn  btn-primary px-3">Ingresar</button>
                </div>
                <div className="col-8 text-right">
                  <button type="button" className="btn  btn-primary px-3">Olvide mi contraseña</button>
                </div>
                <p className="mt-2"><small>Al registrarte, estás de acuerdo con las condiciones de uso.</small></p>
              </div>
              
            </div>
          </div>
          <div className="card text-white py-3 d-md-down-none fondo"  > 
            <div className="card-body text-center">
              <div>
              <div >
      <h3 className="text-center display-6 "> Inscríbete ahora </h3>
	   </div> 
               
                <h4 className="mt-4">Familias</h4>
                <p>Encuéntra cuidador en tu zona rápidamente.
                    <br/>Soluciona imprevistos con niños, adultos mayores o mascotas. 
                <br/>Para unas pocas horas o para contratar </p>
                <div class="border-bottom w-100 ml-5 mt-4"></div>
                <h4 className="mt-4">Cuidadores</h4>
                <p>Publica tu perfil, cuentan tu experiencia y habilidades y acércate un paso más a encontrar a que familia ayudar. </p>
                <Link  to='/registro1'>
                <button type="button" className="btn text-white active mt-3">Registrarse</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 )  
}