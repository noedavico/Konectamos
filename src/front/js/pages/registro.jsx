import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom"
import "../../styles/home.css";


export const Registro = () => {
  const [apellido, setApellido] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD
  const [showPasswordAlert, setShowPasswordAlert] = useState(false);
  const [showConditionsAlert, setShowConditionsAlert] = useState(false);
  const [checkConditions, setCheckConditions] = useState(false);
=======
  const [checkConditions, setCheckConditions] = useState(false);
  const [showPasswordAlert, setShowPasswordAlert] = useState(false);

>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  async function handleSingup(e) {
<<<<<<< HEAD
    e.preventDefault(); 
    console.log('Se llamó a handleSingup'); 
    if (!checkConditions) {
      setShowConditionsAlert(true); // Activar la alerta si el checkbox no está marcado
      return; // Detener la ejecución si no se aceptan las condiciones
    }

    if (email && password && nombre && apellido) {
      console.log('dentro handleSingup'); 
=======
    e.preventDefault();
    if (checkConditions && email && password && nombre && apellido) {
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
      let isLogged = await actions.singup(email, password, nombre, apellido);
      if (isLogged) {//true
        setEmail("");
        setPassword("");
        setApellido("");
        setNombre("");
        navigate("/registrobienvenidos");
      }
    }
  }

  function handlePasswordFocus() {
    setShowPasswordAlert(true);
  }

  function handlePasswordBlur() {
    setShowPasswordAlert(false);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
<<<<<<< HEAD
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    setShowPasswordAlert(!passwordRegex.test(e.target.value));
  }
  
  function handleCheckConditionsChange(e) {
    setCheckConditions(e.target.checked);
    setShowConditionsAlert(false);  
  }
=======
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    setShowPasswordAlert(!passwordRegex.test(e.target.value));
  }

>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
  return (

    <div className="container mt-3 ">
      <div className="row justify-content-center ">
        <div className="col-md-6 ">
          <div className="card-group mb-0 shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card text-white fondo">


              <div className="card-body">
                <h1 className="text-center">Crea tu cuenta</h1>
                <form onSubmit={handleSingup}>
                  <div className="row">
                    {/* input nombre */}
                    <div className="input-group col-lg-6 mb-4 pt-1 ">
                  
                        <span className="input-group-text bg-white py-2  border border-radius-0 ">
                          <i className="fa fa-user text-muted"></i>
                        </span>
                      
                      <input id="firstName" type="text" name="firstname" placeholder="Nombre" className="form-control bg-white border-left-0 border-md" onChange={(e) => setNombre(e.target.value)} value={nombre} required />
                    </div>
                    <div className="input-group col-lg-6 mb-4 pt-1">
                    <span className="input-group-text bg-white py-2  border border-radius-0 ">
                          <i className="fa fa-user text-muted"></i>
                        </span>
                      
                      <input id="lastName" type="text" name="lastname" placeholder="Apellido" className="form-control bg-white border-left-0 border-md" onChange={(e) => setApellido(e.target.value)} value={apellido} required />
                    </div>
                    {/* input email */}
                    <div className="input-group col-lg-12 mb-4">
                    <span className="input-group-text bg-white py-2  border border-radius-0 ">                          <i className="fa fa-envelope text-muted"></i>
                        </span>
                      <input id="email" type="email" name="email" placeholder="Email" className="form-control bg-white border-left-0 border-md" onChange={(e) => setEmail(e.target.value)} value={email} required />
                    </div>
                    {/* input password */}
                    <div className="input-group col-lg-6 mb-4">
                    <span className="input-group-text bg-white py-2 border border-radius-0">
                      <i className="fa fa-lock text-muted"></i>
                    </span>
                    <input
                      id="password"
                      type="password"
                      minLength="8"
                      name="password"
                      placeholder="Contraseña"
                      className="form-control bg-white border-left-0 border-md"
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={handlePasswordFocus}
                      onBlur={handlePasswordBlur}
                      value={password}
<<<<<<< HEAD
                      pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$"
=======
                      pattern="^[a-zA-Z0-9!@#$%^&*()_+<>?]{8,}$"
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
                      required
                    />
                    </div>
                    {showPasswordAlert && (
                      <div  class="text-warning pb-2">
                         <small>  La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un símbolo.</small>
                      </div>
                    )}
                 
                    
                    <div className="form-group col-lg-12 d-flex align-items-center ">
                      <div className="border-bottom w-100 ml-5"></div>
                    </div >
<<<<<<< HEAD
                    <div className="m-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="checkConditions"
                    checked={checkConditions}
                    onChange={handleCheckConditionsChange}  
                  />
                  <label className="form-check-label" htmlFor="checkConditions">
                    Al registrarte, estás de acuerdo con las condiciones de uso.
                  </label>
                </div>

                {showConditionsAlert && (
                  <div className="text-warning pb-2">
                    <small>Debes aceptar las condiciones para continuar.</small>
                  </div>
                )}
=======
                    <div className="m-3 form-check ">
                      <input type="checkbox" className="form-check-input" id="checkConditions" onChange={e => setCheckConditions(e.target.value)} />
                      <label className="form-check-label" htmlFor="checkConditions">Al registrarte, estás de acuerdo con las condiciones de
                        uso.</label>
                    </div>
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8

                    <div className="container-fluid h-100">
                      <div className="row w-100">
                        <div className="col v-center">
                          <button type="submit" className="btn  btn-primary d-block mx-auto" >
                            Continuar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div >
                </form >
              </div >
            </div >

          </div >
          <div className="border-bottom w-100 ml-5"></div>

        </div>
      </div >
    </div >
  )
}