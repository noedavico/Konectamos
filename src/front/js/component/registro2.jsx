import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom"
import "../../styles/home.css";
import Fondo from "../../img/fondo7.jpg";
import Familia from "../../img/familia.jpg";

export const Registro2  = () => {
    const [apellido, setApellido] = useState("");
	const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmaPassword, setConfirmaPassword] = useState("");

    const {actions}=useContext(Context)
    const navigate = useNavigate();


    async function handleSingup(e) {
      e.preventDefault()
      console.log(email,password);
      let isLogged = await actions.singup(email,password, confirmaPassword, nombre,apellido);
      if(isLogged){//true
        setEmail("")
        setPassword("")
        setConfirmaPassword("")
		setApellido("")
		setNombre("")
        navigate("/login")
      }
    }
   
	 return (

<div className="container mt-3 ">
    <div className="row justify-content-center ">
      <div className="col-md-6 ">
        <div className="card-group mb-0 shadow p-3 mb-5 bg-body-tertiary rounded">
          <div className="card text-white fondo">
      

            <div className="card-body">
            <h1 className= "text-center">Crea tu cuenta</h1>
            <form onSubmit={handleSingup}>
                <div className="row">
                    {/* input nombre */}                            
                    <div className="input-group col-lg-6 mb-4 pt-1 ">
                        <div className="input-group-prepend pt-1">
                            <span className="input-group-text bg-white px-4 border-md border-right-0 me-2">
                                <i className="fa fa-user text-muted"></i>
                            </span>
                        </div>
                        <input id="firstName" type="text" name="firstname" placeholder="Nombre" className="form-control bg-white border-left-0 border-md" onChange={(e)=>setNombre(e.target.value)}value={nombre}/>
                    </div>
                    <div className="input-group col-lg-6 mb-4 pt-1">
                        <div className="input-group-prepend pt-1">
                            <span className="input-group-text bg-white px-4 border-md border-right-0 me-2">
                                <i className="fa fa-user text-muted"></i>
                            </span>
                        </div>
                        <input id="lastName" type="text" name="lastname" placeholder="Apellido" className="form-control bg-white border-left-0 border-md" onChange={(e)=>setApellido(e.target.value)} value={apellido}/>
                    </div>
                    {/* input email */}  
                    <div className="input-group col-lg-12 mb-4">
                        <div className="input-group-prepend pt-1">
                            <span className="input-group-text bg-white px-4 border-md border-right-0 me-2">
                                <i className="fa fa-envelope text-muted"></i>
                            </span>
                        </div>
                        <input id="email" type="email" name="email" placeholder="Email" className="form-control bg-white border-left-0 border-md" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    </div>
                    {/* input password */}  
                    <div className="input-group col-lg-6 mb-4">
                        <div className="input-group-prepend pt-1">
                            <span className="input-group-text bg-white px-4 border-md border-right-0 me-2">
                                <i className="fa fa-lock text-muted"></i>
                            </span>
                        </div>
                        <input id="password" type="password" name="password" placeholder="Contraseña" className="form-control bg-white border-left-0 border-md" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                    </div>

                    <div class="container-fluid h-100"> 
                    <div class="row w-100">
                        <div class="col v-center">
		            <button type="submit" className="btn  btn-primary d-block mx-auto" >	
		            Continuar
		        </button>
            </div> 
        </div> 
    </div>
                    <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-2">
                        <div className="border-bottom w-100 ml-5"></div>
                        <span className="px-2 small text-muted font-weight-bold text-muted"> O </span>
                        <div className="border-bottom w-100 mr-5"></div>
                    </div>

                    <div className="row  w-100 m-auto justify-content-center align-items-center">
                <div className="col-6 ">
                <Link className="btn btn-primary btn-block py-2 btn-facebook mx-1 mb-2" to='/'>
                        <i className="fa fa-facebook-f"/><span className="font-weight-bold">Continua con Facebook</span>
                        </Link>
                </div>
                <div className="col-6 right">
                <Link className="btn btn-primary btn-block py-2 btn-gmail mx-1 mb-2" to='/'>
                            <i className="fa-fa fa-google"/>
                            <span className="font-weight-bold">Continua con Gmail</span>
                        </Link>                
                        </div>
            </div>
                    
                </div>
            </form>
        </div>
    </div>
        
    </div>
    </div>
    </div>
</div>
)
}

