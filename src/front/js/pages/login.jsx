import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../img/Log.png";
import "../../styles/home.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    if (email && password) {
      let isLogged = await actions.login(email, password);
      if (isLogged) {
        //true
        setEmail("");
        setPassword("");
        navigate("/registrobienvenidos");
      } else {
        setPassword("");
        setErrorMessage("Usuario o contraseña incorrecta")
        setShowForgotPassword(true);  ;  
      }
    }
  }

  

  return (
    <div className="container mt-2 ">
      <div className="row justify-content-center">
<<<<<<< HEAD
        <div className="col-xl-8 col-lg-10 col-md-12 ">
          <div className="row justify-content-center text-center">
          <div className="card pb-1 d-md-down-none col-md-6 col-sm-12">
              <img
                src={Logo}
                className="img-fluid m-auto "
                style={{ height: "180px" }}
              />
              <form onSubmit={login}>
                <div className="card-body mb-4">
                  <h2 className="text-center mb-4">Inicia sesión</h2>
=======
        <div className="col-xl-8 col-md-10 col-sm-12">
          <div className="card-group mb-0 shadow p-3 mb-5 bg-body-tertiary rounded">
            <div className="card p-2 ">
              <img
                src={Logo}
                className="img-fluid m-auto "
                style={{ height: "200px" }}
              />
              <form onSubmit={login}>
                <div className="card-body">
                  <h1 className="text-center mb-4">Inicia sesión</h1>
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-white py-2 border border-radius-0">
                      <i className="fa fa-user"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="input-group mb-4">
                    <span className="input-group-text bg-white py-2 border border-radius-0">
                      <i className="fa fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Contraseña"
                      inputMode="numeric"
                      minLength="8"
                      maxLength="12"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                  </div>
                  {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )}
<<<<<<< HEAD
                  </div>
                  <div>
                    <div className="d-flex justify-content-center" style={{ position: "absolute", bottom: "1rem", left: "50%", transform: "translateX(-50%)" }}>
=======
                    <div className="d-flex justify-content-center">
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
                  
                      <button type="submit" className="btn  btn-primary px-3">
                        Ingresar
                      </button>
                    </div>
                    
                    {showForgotPassword && (
                      <div className="d-flex">
                        <Link to="/recuperar_password">
                          <span>Olvide mi contraseña</span>
                        </Link>
                      </div>
                    )}
                </div>
              </form>

            </div>
<<<<<<< HEAD
            <div className="card text-white py-3 d-md-down-none fondo col-md-6 col-sm-12">
              <div className="card-body text-center mb-3" >
                  <div>
                    <h3 className="text-center ">
=======
            <div className="card text-white py-3 d-md-down-none fondo">
              <div className="card-body text-center">
                <div>
                  <div>
                    <h3 className="text-center display-6 ">
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
                      <strong> Inscríbete ahora</strong>
                    </h3>
                  </div>

<<<<<<< HEAD
                  <h5 className="mt-4">Familias</h5>
=======
                  <h4 className="mt-4">Familias</h4>
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
                  <p>
                    Encuéntra cuidador en tu zona rápidamente.
                    <br />
                    Soluciona imprevistos con niños, adultos mayores o mascotas.
                  
                  </p>
                  <div className="border-bottom w-100 ml-5 mt-4"></div>
<<<<<<< HEAD
                  <h5 className="mt-4">Cuidadores</h5>
=======
                  <h4 className="mt-4">Cuidadores</h4>
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
                  <p>
                    Publica tu perfil, cuentan tu experiencia y habilidades y
                    acércate un paso más a encontrar a que familia ayudar.
                  </p>
<<<<<<< HEAD
                  <div style={{ position: "absolute", bottom: "1rem", left: "50%", transform: "translateX(-50%)" }}>
=======
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
                  <Link to="/registro">
                    <button
                      type="button"
                      className="btn  btn-primary text-white  mt-3"
                    >
                      Registrarse
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
