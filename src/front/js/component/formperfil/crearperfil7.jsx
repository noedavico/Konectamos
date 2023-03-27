
import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

export const Crearperfil7 = () => {
  const [numTelefono, setNumTelefono] = useState("");
  const [fechaNacimiento, setfechaNacimiento] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  async function handleperfi(e) {
    e.preventDefault();
    let isLogged = await actions.perfilmascotas(email, password, nombre, apellido);
    if (isLogged) {
      //true

      navigate("/login");
    }
  }

  return (
    <div class="container-fluid">
      <form onSubmit={handleperfi}></form>
      <div class="container">
        <div class="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
          <h2 class="h5 mb-3 mb-lg-0">
            <Link to="/crearperfil4" class="text-muted">
              <i class="bi bi-arrow-left-square me-2"></i>
            </Link>{" "}
            Crea tu perfil{" "}
          </h2>
        </div>

        <div class="row">
          <div class="col-lg-8">
            <div class="card mb-4">
              <div class="card-body">
              <div class="row my-2">
                  <div class="card-header">
                    <h6 class="h6 mb-4">
                      Selecciona animales que cuidarias
                    </h6>
                  </div>
                  <div class="col-lg-3">
                    <div class="form-check  ">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Gato"
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                       Gato{" "}
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Perro"
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Perro{" "}
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Peces"
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Peces{" "}
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Aves"
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Aves{" "}
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="form-check  ">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Cerdito"
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                       Cerdito{" "}
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Reptiles"
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Reptiles{" "}
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Conejos"
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Conejos{" "}
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Roedores"
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Roedores{" "}
                      </label>
                    </div>
                  </div>
                </div>
                
                <div class="row my-2">
                  <div class="card-header">
                    <p class="h6 mb-4">
                      Selecciona los servicios que ofreces 
                    </p>
                  </div>
                  <div class="col-lg-7">
                    <div class="mb-3">
                    
                  
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="Atención a tiempo completo en casa de la mascota vacaciones y otros"
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                        Atención a tiempo completo en casa de la mascota, vacaciones y otros.
                        </label>
                      </div>
                      
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="Atención a tiempo completo en mi domicilio"
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                        Atención a tiempo completo en mi domicilio (vacaciones y otros).
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-5">
                    <div class="mb-3">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="Familia de acogida, alojamiento"
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                        Familia de acogida, alojamiento

                        </label>
                      </div>
                      
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="Visita a domicilio"
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                        Visita a domicilio

                        </label>
                      </div>
                      
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="Salidas y paseo"
                        />
                        <label class="form-check-label" for="inlineCheckbox2">
                        Salidas y paseo
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                      <div class="mb-3">
                        <h6 class="form-label"> Tienes alguna formacion a fines</h6>
                        <input
                          type="text"
                          class="form-control"
                          value=""
                        />
                       
                      </div>
                    </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};
