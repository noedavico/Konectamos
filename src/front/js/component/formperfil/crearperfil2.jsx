import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom"



export const CrearPerfil2 = () => {
  const { actions } = useContext(Context)
  const navigate = useNavigate();

  const [calle, setCalle] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [provincia, setProvincia] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");


  async function handlePerfil(e) {
    e.preventDefault()
    if (ciudad) {

      let isLogged = await actions.perfilDireccion(calle, ciudad, provincia, codigoPostal);
      if (isLogged) {//true
        navigate("/login")
      }
    }
  }
  return (
    <main className="container-fluid">
      <form onSubmit={handlePerfil}>
        <div className="row">
          <div className="card col-8 mt-3 m-auto">
            <div className="card-body">
              <h3 className="h6 mb-4">Direccion</h3>
              <section className="row w-100">
                <div className="col-lg-8">
                  <div className="mb-3">
                    <label className="form-label">Calle</label>
                    <input type="text" className="form-control"
                      onChange={(e) => setCalle(e.target.value)} value={calle} />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label">Codigo postal </label>
                    <input type="numeric" className="form-control" onChange={(e) => setCodigoPostal(e.target.value)} value={codigoPostal} />
                  </div>
                </div>
              </section>
              <section className="row w-100">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Ciudad <b className="text-danger">*</b></label>
                    <input type="text" className="form-control" onChange={(e) => setCiudad(e.target.value)} value={ciudad} riquered="true" />
                  </div>
                </div>
                <div className="col col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Provincia</label>
                    <input type="text" className="form-control" onChange={(e) => setProvincia(e.target.value)} value={provincia} />

                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </form >
      <div className="container  m-auto gap-3">

        <Link to="/crearperfil3">
          <button className="btn btn-primary btn-sm btn-icon-text"><i className=""></i>
            <span className="text">Siguiente</span>
          </button>
        </Link>
      </div>
    </main >


  )
}  