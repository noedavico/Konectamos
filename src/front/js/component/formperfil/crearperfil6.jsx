
import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

const checkServicio = [
  "Auxiliar de enfermeria",
  "Cuidado y asistencia para el adulto mayor",
  "Auxiliarde geriatria",
  "Atencion sociosanitaria",
  "Primeros auxilios",
  "Emergencias",
]


const checkServicios = [
  "Ayudar a los niños con los deberes",
  "Cocinar para los niños",
  "Auyudar con las tareas del hogar",
  "Acompañamiento y recogida del colegio",
  "Actividades de ocio y tiempo libre",
]

export const Crearperfil6 = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();


  const [seleccionadoServicio, setSeleccionadoServicio] = useState([]);
  const [seleccionadoServicios, setSeleccionadoServicios] = useState([]);

  const handleCheckboxServicios = (event) => {
    const valor = event.target.value;
    const index = seleccionadoServicios.indexOf(valor);
    if (index === -1) {
      setSeleccionadoServicios([...seleccionadoServicios, valor]);
    } else {
      setSeleccionadoServicios(seleccionadoServicios.filter((item) => item !== valor));
    }
  };

  //servicio
  const handleCheckboxServicio = (event) => {
    const valor = event.target.value;
    const index = seleccionadoServicio.indexOf(valor);
    if (index === -1) {
      setSeleccionadoServicio([...seleccionadoServicio, valor]);
    } else {
      setSeleccionadoServicio(seleccionadoServicio.filter((item) => item !== valor));
    }
  };


  async function handlePerfil(e) {
    e.preventDefault();
    let isLogged = await actions.perfilmayores(email, password, nombre, apellido);
    if (isLogged) {
      //true

      navigate("/login");
    }
  }

  return (
    <div className="container">
      <form onSubmit={handlePerfil}>

        <div className="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
          <h2 className="h5 mb-3 mb-lg-0">
            <Link to="/crearperfil4" className="text-muted">
              <i className="bi bi-arrow-left-square me-2"></i>
            </Link>
            <span>Crea tu perfil</span>
          </h2>
        </div>

        <div className="row">
          <div className="col-8 mt-3 m-auto">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="card-header">
                    <p className="h6">Selecciona que servicios ofreces:</p>
                  </div>
                  <div className="col-lg-7 mb-lg-3 mt-3">
                    {checkServicio.slice(0, 3).map((item, i) => (
                      <div className="form-check form-check-inline" key={i}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item}
                          name={item}
                          id={"servicio0" + i}
                          checked={seleccionadoServicio.indexOf(item) !== -1}
                          onChange={handleCheckboxServicio}
                        />
                        <label className="form-check-label" htmlFor={"servicio0" + i}>
                          {item}
                        </label>
                      </div>
                    ))}

                  </div>
                  <div className="col-lg-5 mb-3 mt-lg-3">
                    {checkServicio.slice(3).map((item, i) => (
                      <div className="form-check form-check-inline" key={i}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item}
                          name={item}
                          id={"servicio1" + i}
                          checked={seleccionadoServicio.indexOf(item) !== -1}
                          onChange={handleCheckboxServicio}
                        />
                        <label className="form-check-label" htmlFor={"servicio1" + i}>
                          {item}
                        </label>
                      </div>
                    ))}

                  </div>
                </div>



                <div className="row ">
                  <div className="card-header">
                    <p className="h6 ">
                      ¿Tienes algunas de estas cualificaciones? No es obligatorio, pero es un plus :)
                    </p>
                  </div>
                  <div className="col-lg-7 mb-lg-3 mt-3">

                    {checkServicios.slice(0, 3).map((item, i) => (
                      <div className="form-check form-check-inline" key={i}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item}
                          name={item}
                          id={"qa0" + i}
                          checked={seleccionadoServicios.indexOf(item) !== -1}
                          onChange={handleCheckboxServicios}
                        />
                        <label className="form-check-label" htmlFor={"qa0" + i}>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="col-lg-5 mb-3 mt-lg-3">
                    {checkServicios.slice(3).map((item, i) => (
                      <div className="form-check form-check-inline" key={i}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item}
                          name={item}
                          id={"qa1" + i}
                          checked={seleccionadoServicios.indexOf(item) !== -1}
                          onChange={handleCheckboxServicios}
                        />
                        <label className="form-check-label" htmlFor={"qa1" + i}>
                          {item}
                        </label>
                      </div>
                    ))}
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
