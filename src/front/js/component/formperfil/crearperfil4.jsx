import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

export const Crearperfil4 = () => {
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  async function handleperfi(e) {
    e.preventDefault();
    let isLogged = await actions.singup(password);
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
            <Link to="/crearperfil3" class="text-muted">
              <i class="bi bi-arrow-left-square me-2"></i>
            </Link>{" "}
            Crea tu perfil{" "}
          </h2>
          <div class="hstack gap-3"></div>
        </div>

        <div class="row">
          <div class="col-8 mt-3 m-auto">
            <div class="card mb-4">
              <div class="card-body">
                <h3 class="h6 mb-4">
                  ¿ Como te describirias en tres palabras? Elige entre 3 y 5
                  cualidades .
                </h3>
                <div class="row">
                  <div class="col-lg-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="Responsable"
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Responsable{" "}
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Amigable
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Paciente
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Entusiasta
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Divertido/a
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Creativo/a{" "}
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Deportista
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Tranquilo
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Empatico/a
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Amable
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Sociable
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Sereno/a
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Alegre
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Imaginativo/a
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Confiado/a
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Puntual
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Optimista
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Proactivo/a
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-4">
              <div class="card-body">
                <h3 class="h6">Descripcion</h3>
                <textarea
                  class="form-control"
                  placeholder=" Esta es la parte más importante: las familias prestan mucha atención.
                  Explica tus intereses, tus motivaciones. Resalta tus habilidades."
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-4 align-self-end">
            <Link to="/crearperfil5">
              <button type="submit" className="btn  btn-primary  ">
                {" "}
                <span className="text">Siguiente</span>{" "}
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>
     
      </form>
    </div>
  );
};
