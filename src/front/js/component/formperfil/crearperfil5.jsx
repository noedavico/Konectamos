import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

export const Crearperfil5 = () => {
  const [numTelefono, setNumTelefono] = useState("");
  const [fechaNacimiento, setfechaNacimiento] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  async function handleperfi(e) {
    e.preventDefault();
    let isLogged = await actions.perfilniños(email, password, nombre, apellido);
    if (isLogged) {
      //true

      navigate("/login");
    }
  }

  return (
    <div class="container">
      <form onSubmit={handleperfi}>
      
        <div class="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
          <h2 class="h5 mb-3 mb-lg-0">
            <Link to="/crearperfil4" class="text-muted">
              <i class="bi bi-arrow-left-square me-2"></i>
            </Link>{" "}
            Crea tu perfil{" "}
          </h2>
        </div>

        <div class="row">
          <div class="col-8 mt-3 m-auto">
            <div class="card mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="card-header">
                    <p class="h6 mb-4">Selecciona que servicios ofreces:</p>
                  </div>
                  <div class="col-lg-6 my-2">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="Ayudar a los niños con los deberes"
                      />
                      <label class="form-check-label" for="inlineCheckbox1">
                        Ayudar a los niños con los deberes
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="Cocinar para los niños"
                      />
                      <label class="form-check-label" for="inlineCheckbox2">
                        Cocinar para los niños
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="Auyudar con las tareas del hogar"
                      />
                      <label class="form-check-label" for="inlineCheckbox1">
                        Auyudar con las tareas del hogar
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-6 my-2">
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="Acompañamiento y recogida del colegio"
                      />
                      <label class="form-check-label" for="inlineCheckbox2">
                        Acompañamiento y recogida del colegio
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="Actividades de ocio y tiempo libre"
                      />
                      <label class="form-check-label" for="inlineCheckbox2">
                        Actividades de ocio y tiempo libre
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row my-2">
                  <div class="card-header">
                    <h6 class="h6 mb-4">
                      Selecciona las edades de los niños que has cuidado
                      anteriormente?
                    </h6>
                  </div>
                  <div class="col-lg-3">
                    <div class="form-check  ">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Responsable"
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        0 a 1 año{" "}
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Responsable"
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        1 a 3 años{" "}
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Responsable"
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        3 a 6 años{" "}
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Responsable"
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        mayores de 6 años{" "}
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
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="Primeros auxilios (o socorrista)"
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                          Primeros auxilios (o socorrista)
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="Monitor-Animador Sociocultural"
                        />
                        <label class="form-check-label" for="inlineCheckbox2">
                          Monitor-Animador Sociocultural
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="Formación en Educación Infantil"
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                          Formación en Educación Infantil
                        </label>
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
