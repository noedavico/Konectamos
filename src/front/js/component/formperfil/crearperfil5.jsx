import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import { checkboxesCualificaciones, checkServicios, edadNinos } from "./opcionesPerfil5.js";

export const Crearperfil5 = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const [servicios, setServicios] = useState([]);
  const [checkEdadNinos, setCheckEdadNinos] = useState([]);
  const [cualificacion, setCualificacion] = useState([]);

  // cualificaciones
  const handleCheckboxCualif = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setCualificacion((prevCheckboxes) => [...prevCheckboxes, value]);
    } else {
      setCualificacion((prevCheckboxes) =>
        prevCheckboxes.filter((checkbox) => checkbox !== value)
      );
    }
  };

  // edades
  const handleChangeEdad = (event) => {

    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckEdadNinos([...checkEdadNinos, value]);
    } else {
      setCheckEdadNinos(checkEdadNinos.filter((val) => val !== value));
    }
  };


  //servicios

  const handleCheckboxServicios = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setServicios([...servicios, value]);
    } else {
      setServicios(servicios.filter((val) => val !== value));
    }
  };


  //guardar datos

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
            Crea tu perfil
          </h2>
        </div>

        <div className="row">
          <div className="col-8 mt-3 m-auto">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="card-header">
                    <h6 className="mb-4">Selecciona que servicios ofreces:</h6>
                  </div>
                  <div className="col-lg-6 mt-2 my-lg-2">
                    <ul className="my-0 my-lg-3">
                      {checkServicios.slice(0, 3).map((item, i) => (
                        <li className="list-group-item" key={i}>
                          <label className="form-check-label">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              name={item}
                              value={item}
                              checked={servicios.includes(item)}
                              onChange={handleCheckboxServicios}
                            />
                            {item}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-lg-6 my-lg-2 mb-2">
                    <ul className="my-lg-3">
                      {checkServicios.slice(3).map((item, i) => (
                        <li className="list-group-item" key={i}>
                          <label className="form-check-label">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              name={item}
                              value={item}
                              checked={servicios.includes(item)}
                              onChange={handleCheckboxServicios}
                            />
                            {item}
                          </label>
                        </li>
                      ))}
                    </ul></div>
                </div>

                <div className="row my-2">
                  <div className="card-header">
                    <h6 className="h6 mb-4">
                      Selecciona las edades de los niños que has cuidado
                      anteriormente?
                    </h6>
                  </div>
                  <div className="row p-2">
                    {edadNinos.map((item, i) => (
                      <div className="col-6 col-lg-3" key={i}>
                        <label className="form-check-label" >
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            name={item}
                            value={item}
                            checked={checkEdadNinos.includes(item)}
                            onChange={handleChangeEdad}
                          />
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="row my-2">
                  <div className="card-header">
                    <p className="h6 mb-4">
                      ¿Tienes algunas de estas cualificaciones? No es
                      obligatorio, pero es un plus :)
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="Primeros auxilios (o socorrista)"
                        />
                        <label className="form-check-label" htmlFor="inlineCheckbox1">
                          Primeros auxilios (o socorrista)
                        </label>
                      </div>
                      {checkboxesCualificaciones.map((checkbox) => (
                        <div className="form-check form-check-inline" key={checkbox.id}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={checkbox.id}
                            value={checkbox.value}
                            checked={cualificacion.includes(checkbox.value)}
                            onChange={handleCheckboxCualif}
                          />
                          <label className="form-check-label" htmlFor={checkbox.id}>
                            {checkbox.label}
                          </label>
                        </div>
                      )
                      )}
                    </div>
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
      </form >
    </div >
  );
};
