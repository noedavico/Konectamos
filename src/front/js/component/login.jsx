import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../img/Log.png";
import "../../styles/home.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    let isLogged = await actions.login(email, password);
    if (isLogged) {
      //true
      setEmail("");
      setPassword("");
      navigate("/registrobienvenidos");
    }
  }
  return (
    <div className="container mt-2 ">
      <div className="row justify-content-center">
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
                  <div className="input-group mb-3">
                    <span className="input-group-addon me-2">
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
                    <span className="input-group-addon me-2">
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
                  <div className="d-flex flex-row">
                    <div className="flex-column mx-2 mb-1">
                      <button type="submit" className="btn  btn-primary px-3">
                        Ingresar
                      </button>
                    </div>

                    <div className="flex-column1 mx-2">
                      <Link to="/recuperar_password">
                        <span>Olvide mi contraseña</span>
                      </Link>
                    </div>
                  </div>
                  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Al registrarte, estás de acuerdo con las condiciones de
                      uso.</label>
  </div>
                  
                </div>
              </form>
            </div>
            <div className="card text-white py-3 d-md-down-none fondo">
              <div className="card-body text-center">
                <div>
                  <div>
                    <h3 className="text-center display-6 ">
                      {" "}
                      <strong> Inscríbete ahora</strong>
                    </h3>
                  </div>

                  <h4 className="mt-4">Familias</h4>
                  <p>
                    Encuéntra cuidador en tu zona rápidamente.
                    <br />
                    Soluciona imprevistos con niños, adultos mayores o mascotas.
                    <br />
                    Para unas pocas horas o para contratar{" "}
                  </p>
                  <div className="border-bottom w-100 ml-5 mt-4"></div>
                  <h4 className="mt-4">Cuidadores</h4>
                  <p>
                    Publica tu perfil, cuentan tu experiencia y habilidades y
                    acércate un paso más a encontrar a que familia ayudar.{" "}
                  </p>
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
