import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

export const Crearperfil1 = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const [numTelefono, setNumTelefono] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [genero, setGenero] = useState("");
  const [fotografia, setFotografia] = useState(null);

  async function handlePerfil(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("foto", fotografia);
    console.log(formData);
    let datos = await actions.creacionPerfil(
      numTelefono,
      fechaNacimiento,
      genero
    );
    if (datos && (await actions.subirFoto(formData))) {
      //true

      navigate("/login");
    }
  }

  return (
    <div class="container">
      <form onSubmit={handlePerfil}>
        <div class="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
          <h2 class="h5 mb-3 mb-lg-0">
            <a href="../../registropag2" class="text-muted">
              <i class="bi bi-arrow-left-square me-2"></i>
            </a>{" "}
            Crea tu perfil{" "}
          </h2>
        </div>

        <div class="row">
          <div class="col-lg-8 m-auto">
            <div class="card mb-4">
              <div class="card-header">
                <h3 class="h6 mb-4">Informacion Basica</h3>
              </div>
              <div class="card-body">
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
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <h3 className="h6">Fotografia</h3>
                      <input
                        className="form-control"
                        type="file"
                        id="foto"
                        onChange={(e) => setFotografia(e.target.files[0])}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-end">
            <div class="col-4 align-self-end">
              <Link to="/crearperfil2">
                <button onClick={handlePerfil} className="btn  btn-primary">
                  <span className="text">Siguiente</span>
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
