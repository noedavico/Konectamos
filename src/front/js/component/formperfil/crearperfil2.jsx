import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

export const Crearperfil2 = () => {
  const [calle, setCalle] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [provincia, setProvincia] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  async function handlePerfil(e) {
    e.preventDefault();
    let isLogged = await actions.perfilDireccion(
      calle,
      ciudad,
      provincia,
      codigoPostal
    );
    if (isLogged) {
      //true
      navigate("/login");
    }
  }
  return (
    <div class="container">
      <form onSubmit={handlePerfil}>
        <div class="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
          <h2 class="h5 mb-3 mb-lg-0">
            <Link to="/crearperfil1" class="text-muted">
              <i class="bi bi-arrow-left-square me-2"></i>
            </Link>{" "}
            Crea tu perfil{" "}
          </h2>
        
        </div>
        
        <div class="card col-8 mt-3 m-auto">
          <div class="card-header">
            <h3 class="h6 mb-4">Direccion</h3> </div>          
            <div class="card-body">

            <div class="row">
              <div class="col-lg-8">
                <div class="mb-3">
                  <label class="form-label">Calle</label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={(e) => setCalle(e.target.value)}
                    value={calle}
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="mb-3">
                  <label class="form-label">Codigo postal </label>
                  <input
                    type="numeric"
                    class="form-control"
                    onChange={(e) => setCodigoPostal(e.target.value)}
                    value={codigoPostal}
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">Ciudad</label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) => setCiudad(e.target.value)}
                      value={ciudad}
                      riquered
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">Provincia</label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={(e) => setProvincia(e.target.value)}
                      value={provincia}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div class="row justify-content-end">
          <div class="col-4 align-self-end">
            <Link to="/crearperfil3">
              <button type="submit" className="btn  btn-primary  ">
                {" "}
                <span className="text">Siguiente</span>{" "}
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>
    </div>
  );
};
