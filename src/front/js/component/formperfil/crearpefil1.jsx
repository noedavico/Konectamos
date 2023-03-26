import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom"

export const CrearPerfil1 = () => {
  const { actions } = useContext(Context)
  const navigate = useNavigate();

  const [numTelefono, setNumTelefono] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [genero, setGenero] = useState("");
  const [fotografia, setFotografia] = useState(null);


  async function handlePerfil(e) {
    e.preventDefault()

    const formData = new FormData();
    formData.append('foto', selectedFile);

    let datos = await actions.creacionPerfil(numTelefono, fechaNacimiento, genero);
    if (datos && await actions.subirFoto(formData)) {//true

      navigate("/login")
    }
  }

  return (
    <div className="container-fluid ">
      <form onSubmit={handlePerfil}>
        <div className="container col-10 m-auto ">
          <div className="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
            <h2 className="h5 mb-3 mb-lg-0">
              <Link to="#" className="text-muted">
                <i className="bi bi-arrow-left-square me-2"></i>
              </Link>
              <span>Crea tu perfil</span>
            </h2>
          </div>

          <article className="row">
            <div className="col-lg-12">
              <div className="card mb-4">
                <div className="card-body">
                  <h3 className="h6 mb-4">Informacion Basica</h3>
                  <section className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">Numero de telefono</label>
                        <input type="text" className="form-control"
                          onChange={(e) => setNumTelefono(e.target.value)} value={numTelefono} />
                        <small>*Nunca utilizaremos tu número para fines de marketing</small>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">Fecha de Nacimiento</label>
                        <input type="date" className="form-control"
                          onChange={(e) => setFechaNacimiento(e.target.value)} value={fechaNacimiento} />
                        <small>*Pide permiso a tus padres si tiene menos de 18 años.</small>
                      </div>
                    </div>
                  </section>
                  <section className="row">
                    <div className="col-lg-6">
                      <label className="form-label">Genero</label>
                      <select className="form-select" onChange={(e) => setGenero(e.target.value)} value={genero}>
                        <option value="Femenino">Femenino</option>
                        <option value="Masculino">Masculino</option>
                        <option value="No binario">No binario</option>
                      </select>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <h3 className="h6">Fotografia</h3>
                        <input className="form-control" type="file" id="foto"
                          onChange={(e) => setFotografia(e.target.files[0])} value={fotografia} />
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </article>
        </div>
        <Link to="/crearperfil2">
          <button onClick={handlePerfil} className="btn btn-primary btn-sm btn-icon-text">
            <i className=""></i>
            <span className="text">Siguiente</span>
          </button>
        </Link>
      </form>
      <div className="container  m-auto gap-3">

      </div>
    </div>

  )
}  