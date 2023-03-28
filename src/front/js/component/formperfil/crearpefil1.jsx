import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

export const Crearperfil1 = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const perfil = store?.perfil;

  const [numTelefono, setNumTelefono] = useState(perfil?.numero_telefono || "");
  const [fechaNacimiento, setFechaNacimiento] = useState(perfil?.fecha_nacimiento || "");
  const [genero, setGenero] = useState(perfil?.genero || "");
  const [fotografia, setFotografia] = useState(perfil?.foto || null);



  async function handlePerfil(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("foto", fotografia);

    actions.creacionPerfil1(numTelefono, fechaNacimiento, genero, formData)

    navigate("/crearperfil2");
  }

  return (
    <div className="container">
      <form onSubmit={handlePerfil}>
        <div className="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row ms-3">
          <h2 className="h5 ms-3 mb-3 mb-lg-0">
            Crea tu perfil
          </h2>
        </div>

        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="card mb-4">
              <div className="card-header">
                <h3 className="h6 mb-4">Informacion Basica</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Numero de telefono</label>
                      <input
                        type="tel"
                        className="form-control"
                        onChange={(e) => setNumTelefono(e.target.value.replace(" ", ""))}
                        placeholder="Ej: 34 612 345 678"
                        value={numTelefono}
                        maxLength="14"
                      />
                      <small>
                        *Nunca utilizaremos tu número para fines de marketing
                      </small>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label className="form-label">Fecha de Nacimiento</label>
                      <input
                        type="date"
                        className="form-control"
                        onChange={(e) => setFechaNacimiento(e.target.value)}
                        value={fechaNacimiento}
                        max="2023-03-30"
                      />
                      <small>
                        *Pide permiso a tus padres si tiene menos de 18 años.
                      </small>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <label className="form-label">Genero</label>
                    <select
                      className="form-select"
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

          <div className="row justify-content-end">
            <div className="col-4 align-self-end">
              <button type="submit" className="btn  btn-primary">
                <span className="text">Siguiente</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
