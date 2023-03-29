import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

export const Crearperfil2 = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const direccion = store.direccion;

  const [calle, setCalle] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [provincia, setProvincia] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");

  async function handlePerfil(e) {
    e.preventDefault();

    if (await actions.perfilDireccion(calle, ciudad, provincia, codigoPostal))


      navigate("/crearperfil/3")
  }

  useEffect(() => {
    if (direccion && direccion) {
      setLoading(false)
      setCalle(direccion.domicilio || "")
      setCiudad(direccion.ciudad || "")
      setProvincia(direccion.provincia || "")
      setCodigoPostal(direccion.codigo_postal || "")
    }
  }, [direccion])


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
      {loading ? <div className="h-50 text-center m-5 p-5"><span>Cargando...</span></div> : (
        <form onSubmit={handlePerfil}>
          <div className="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
            <h2 className="h5 mb-3 mb-lg-0">
              Crea tu perfil
            </h2>

          </div>

          <div className="card col-8 mt-3 m-auto">
            <div className="card-header">
              <h3 className="h6 mb-4">Dirección</h3>
            </div>
            <div className="card-body">

              <div className="row">
                <div className="col-lg-8">
                  <div className="mb-3">
                    <label className="form-label">Calle</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setCalle(e.target.value)}
                      value={calle}
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label">Código Postal </label>
                    <input
                      type="numeric"
                      className="form-control"
                      onChange={(e) => setCodigoPostal(e.target.value)}
                      value={codigoPostal}
                      maxLength="5"
                      pattern="\d"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Ciudad</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setCiudad(e.target.value)}
                      value={ciudad}
                      riquered="required"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Provincia</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setProvincia(e.target.value)}
                      value={provincia}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-4 align-self-end">
              <button type="submit" className="btn btn-primary ">
                <span className="text">Siguiente</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
