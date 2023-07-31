import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

export const Crearperfil1 = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const perfil = store?.perfil;

  const [numTelefono, setNumTelefono] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [genero, setGenero] = useState("");
  const [fotografia, setFotografia] = useState(null);

  async function handlePerfil(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("foto", fotografia);

    const datos = {
      numero_telefono: parseInt(numTelefono),
      fecha_nacimiento: fechaNacimiento,
      genero: genero,
    };

    if (await actions.creacionPerfil(datos))
      if (fotografia && formData.has(foto) && (await actions.subirFoto(formData)))
        navigate("/crearperfil/2");
      else navigate("/crearperfil/2");
  }

  useEffect(() => {
    if (perfil) {
      setLoading(false);
      setNumTelefono(perfil.numero_telefono || "");
      setFechaNacimiento(perfil.fecha_nacimiento || "");
      setGenero(perfil.genero || "");
      setFotografia(perfil.foto || null);
    }
  }, [perfil]);

  async function validacion(e) {
    if (!(await actions.validToken()))
      //false
      navigate("/login");
  }
  useEffect(() => {
    validacion();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="h-50 text-center m-5 p-5">
          <span>Cargando...</span>
        </div>
      ) : (
        <form onSubmit={handlePerfil}>
          <div className="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row ms-3">
            <h2 className="h5 ms-3 mb-3 mb-lg-0">Crea tu perfil</h2>
          </div>

          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="card mb-4">
                <div className="card-header">
                  <h3 className="h6 mb-4">Información Básica</h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="tel">
                          Número de teléfono
                        </label>
                        <input
                          id="tel"
                          type="tel"
                          className="form-control"
                          onChange={(e) =>
                            setNumTelefono(e.target.value.replace(" ", ""))
                          }
                          placeholder="Ej: 34 612 345 678"
                          value={numTelefono}
                          maxLength="14"
                          pattern="[0-9]+"
                        />
                        <small>
                          *Nunca utilizaremos tu número para fines de marketing
                        </small>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="fechaNac">
                          Fecha de Nacimiento
                        </label>
                        <input
                          id="fechaNac"
                          type="date"
                          className="form-control"
                          onChange={(e) => setFechaNacimiento(e.target.value)}
                          value={fechaNacimiento}
                          max="2023-03-30"
                          min="1900-01-01"
                        />
                        <small>
                          *Pide permiso a tus padres si tiene menos de 18 años.
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <label className="form-label">Género</label>
                      <select
                        className="form-select"
                        onChange={(e) => setGenero(e.target.value)}
                        value={genero}
                      >
                        <option
                          defaultValue
                          placeholder="Selecciona una opcion"
                        ></option>
                        <option value="Femenino">Femenino</option>
                        <option value="Masculino">Masculino</option>
                        <option value="No binario">No binario</option>
                      </select>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <h3 className="h6">Fotografía</h3>
                        <input
                          className="form-control"
                          type="file"
                          id="foto"
                          accept="image/jpeg, image/png, image/gif, image/bmp, image/webp, image/tiff, image/svg+xml"
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
      )}
    </div>
  );
};
