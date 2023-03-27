import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

export const Crearperfil1 = () => {
  const [numTelefono, setNumTelefono] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [genero, setGenero] = useState("");
  const [fotografia, setFotografia] = useState("");
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  async function handleperfi(e) {
    e.preventDefault();
    let isLogged = await actions.CreacionPerfil(
      numTelefono,
      fechaNacimiento,
      genero
    );
    if (isLogged) {
      //true

      navigate("/login");
    }
  }

  return (
    <div class="container-fluid ">
      <form onSubmit={handleperfi}>
        <div class="container col-10 m-auto ">
          <div class="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
            <h2 class="h5 mb-3 mb-lg-0">
              <a href="../../registropag2" class="text-muted">
                <i class="bi bi-arrow-left-square me-2"></i>
              </a>{" "}
              Crea tu perfil{" "}
            </h2>
          </div>

          <div class="row">
            <div class="col-lg-8">
              <div class="card mb-4">
                <div class="card-body">
                  <h3 class="h6 mb-4">Informacion Basica</h3>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Numero de telefono</label>
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e) => setNumTelefono(e.target.value)}
                          value={numTelefono}
                        />
                        <small>
                          *Nunca utilizaremos tu número para fines de marketing
                        </small>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Fecha de Nacimiento</label>
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e) => setFechaNacimiento(e.target.value)}
                          value={fechaNacimiento}
                        />
                        <small>
                          *Pide permiso a tus padres si tiene menos de 18 años.
                        </small>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <label class="form-label">Genero</label>
                      <select
                        class="form-select"
                        onChange={(e) => setGenero(e.target.value)}
                        value={genero}
                      >
                        <option value="Femenino">Femenino</option>
                        <option value="Masculino">Masculino</option>
                        <option value="No binario">No binario</option>
                      </select>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <h3 class="h6">Fotografia</h3>
                        <input
                          class="form-control"
                          type="file"
                          onChange={(e) => setFotografia(e.target.value)}
                          value={fotografia}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div class="container  m-auto gap-3">
        <Link to="/crearperfil2">
          {" "}
          <button class="btn btn-primary btn-sm btn-icon-text">
            <i class=""></i> <span class="text">Siguiente</span>
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};
