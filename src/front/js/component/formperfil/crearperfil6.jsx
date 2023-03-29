
import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

const cualificacion = [
  "Auxiliar de enfermeria",
  "Cuidado y asistencia para el adulto mayor",
  "Auxiliar de geriatria",
  "Atencion sociosanitaria",
  "Primeros auxilios",
  "Emergencias",
]


const checkServicios = [
  "Asistencia de hogar (limpieza, cocina, compras)",
  "Asistencia personal (aseo, curas, medicación)",
  "Actividades (ocio junto al mayor)",
  "Acompañamientos (citas médicas, paseo)",
  "Higiene personal",
  "Asistencia en hospitales",
  "Preparación de comidas",
  "Compañía y escucha activa",
  "Servicio farmacéutico",
  "Podología/esteticista",
  "Peluquería",
  "Fisioterapía"
]


export const Crearperfil6 = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();


  const [servicios, setServicios] = useState([]);
  const [cualificaciones, setCualificaciones] = useState([]);

  const handleCheckboxServicios = (event) => {
    const valor = event.target.value;
    const index = cualificaciones.indexOf(valor);
    if (index === -1) {
      setCualificaciones([...cualificaciones, valor]);
    } else {
      setCualificaciones(cualificaciones.filter((item) => item !== valor));
    }
  };

  //servicio
  const handleCheckboxServicio = (event) => {
    const valor = event.target.value;
    const index = servicios.indexOf(valor);
    if (index === -1) {
      setServicios([...servicios, valor]);
    } else {
      setServicios(servicios.filter((item) => item !== valor));
    }
  };


  async function handlePerfil(e) {
    e.preventDefault();

    const datos = {
      servicios: servicios.join(";"),
      edades: edadNinos.join(";"),
      formacion: cualificacion
    }

    if (await actions.actualizaCategoria(datos))
      navigate("/")
  }

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
      <form onSubmit={handlePerfil}>

        <div className="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
          <h2 className="h5 mb-3 mb-lg-0">
            <Link to="/crearperfil/4" className="text-muted">
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
                    {checkServicios.slice(0, 5).map((item, i) => (
                      <div className="form-check form-check-inline" key={i}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item}
                          name={item}
                          id={"servicio0" + i}
                          checked={servicios.indexOf(item) !== -1}
                          onChange={handleCheckboxServicio}
                        />
                        <label className="form-check-label" htmlFor={"servicio0" + i}>
                          {item}
                        </label>
                      </div>
                    ))}

                  </div>
                  <div className="col-lg-5 mb-3 mt-lg-3">
                    {checkServicios.slice(5).map((item, i) => (
                      <div className="form-check form-check-inline" key={i}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item}
                          name={item}
                          id={"servicio1" + i}
                          checked={servicios.indexOf(item) !== -1}
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

                    {cualificacion.slice(0, 3).map((item, i) => (
                      <div className="form-check form-check-inline" key={i}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item}
                          name={item}
                          id={"qa0" + i}
                          checked={cualificaciones.indexOf(item) !== -1}
                          onChange={handleCheckboxServicios}
                        />
                        <label className="form-check-label" htmlFor={"qa0" + i}>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="col-lg-5 mb-3 mt-lg-3">
                    {cualificacion.slice(3).map((item, i) => (
                      <div className="form-check form-check-inline" key={i}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item}
                          name={item}
                          id={"qa1" + i}
                          checked={cualificaciones.indexOf(item) !== -1}
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
          <div className="row justify-content-end">
            <div className="col-4 align-self-end">
              <button type="submit" className="btn  btn-primary">
                <span className="text">Siguiente </span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
