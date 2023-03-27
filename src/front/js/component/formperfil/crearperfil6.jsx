
import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

export const Crearperfil6 = () => {
  const [numTelefono, setNumTelefono] = useState("");
  const [fechaNacimiento, setfechaNacimiento] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  async function handleperfi(e) {
    e.preventDefault();
    let isLogged = await actions.perfilmayores(email, password, nombre, apellido);
    if (isLogged) {
      //true

      navigate("/login");
    }
  }

  return (
    <div class="container-fluid">
      <form onSubmit={handleperfi}>
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
                <div class="row">
                  <div class="card-header">
                    <p class="h6 mb-4">Selecciona que servicios ofreces:</p>
                  </div>
                  <div class="col-lg-7 my-2">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="Asistencia de hogar (limpieza, cocina, compras)"
                      />
                      <label class="form-check-label" for="inlineCheckbox1">
                      Asistencia de hogar (limpieza, cocina, compras)
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="Asistencia personal (aseo, curas, medicación)"
                      />
                      <label class="form-check-label" for="inlineCheckbox2">
                      Asistencia personal (aseo, curas, medicación)
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="Acompañamientos (citas médicas, paseo)"
                      />
                      <label class="form-check-label" for="inlineCheckbox2">
                      Acompañamientos (citas médicas, paseo)
                      </label>
                    </div>
                   
                  </div>
                  <div class="col-lg-5 my-2">
                  <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="Actividades (ocio junto al mayor)"
                      />
                      <label class="form-check-label" for="inlineCheckbox1">
                      Actividades (ocio junto al mayor)
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="Asistencia en hospitales"
                      />
                      <label class="form-check-label" for="inlineCheckbox2">
                      Asistencia en hospitales
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="Compañía y escucha activa"
                      />
                      <label class="form-check-label" for="inlineCheckbox2">
                      Compañía noches
                      </label>
                    </div>
                   
                  </div>
                </div>

                

                <div class="row my-2">
                  <div class="card-header">
                    <p class="h6 mb-4">
                      ¿Tienes algunas de estas cualificaciones? No es
                      obligatorio, pero es un plus :)
                    </p>
                  </div>
                  <div class="col-lg-7">
                    <div class="mb-3">
                    
                      
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="Auxiliar de enfermeria "
                        />
                        <label class="form-check-label" for="inlineCheckbox2">
                        Auxiliar de enfermeria 
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="Cuidado y asistencia para el adulto mayor"
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                        Cuidado y asistencia para el adulto mayor
                        </label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="Auxiliarde geriatria"
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                        Auxiliarde geriatria
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
                          value="Atencion sociosanitaria"
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                        Atencion sociosanitaria
                        </label>
                      </div>
                      
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="Primeros auxilios "
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                          Primeros auxilios(o socorrista)
                        </label>
                      </div>
                      
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="Emergencia"
                        />
                        <label class="form-check-label" for="inlineCheckbox2">
                        Emergencias
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};
