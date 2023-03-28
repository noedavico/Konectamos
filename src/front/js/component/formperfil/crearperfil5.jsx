import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import { checkboxesCualificaciones, checkServicios, edadNinos } from "./opcionesPerfil5.js";

export const Crearperfil5 = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const [selectedServicios, setSelectedServicios] = useState([]);
  const [checkedEdadNinos, setCheckedEdadNinos] = useState([]);
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
      setCheckedEdadNinos([...checkedEdadNinos, value]);
    } else {
      setCheckedEdadNinos(checkedEdadNinos.filter((val) => val !== value));
    }
  };


  //servicios

  const handleCheckboxServicios = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedServicios([...selectedServicios, value]);
    } else {
      setSelectedServicios(selectedServicios.filter((val) => val !== value));
    }
  };


  //guardar datos
  async function handleperfi(e) {
    e.preventDefault();
    let isLogged = await actions.perfilNinos();
    if (isLogged) {
      //true

      navigate("/login");
    }
  }

  return (
    <div className="container">
      <form onSubmit={handleperfi}>

        <div className="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
          <h2 className="h5 mb-3 mb-lg-0">
            <Link to="/crearperfil4" className="text-muted">
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
                  <div className="col-lg-6 my-2">
                    <div className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="Ayudar a los niños con los deberes"
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox1">
                        Ayudar a los niños con los deberes
                      </label>
                    </div>
                    <ul className="list-group">
                      {checkServicios.map((item, i) => (
                        <li className="list-group-item" key={i}>
                          <label className="form-check-label">
                            <input
                              className="form-check-input me-1"
                              type="checkbox"
                              name={item}
                              value={item}
                              checked={selectedServicios.includes(item)}
                              onChange={handleCheckboxServicios}
                            />
                            {item}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="row my-2">
                  <div className="card-header">
                    <h6 className="h6 mb-4">
                      Selecciona las edades de los niños que has cuidado
                      anteriormente?
                    </h6>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-check  ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Responsable"
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        0 a 1 año
                      </label>
                    </div>
                  </div>
                  {edadNinos.map((item, i) => (
                    <div className="col-lg-3" key={i}>
                      <label className="form-check-label" >
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name={item}
                          value={item}
                          checked={checkedEdadNinos.includes(item)}
                          onChange={handleChangeEdad}
                        />
                        {item}
                      </label>
                    </div>
                  ))}
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
        </div>
      </form>
    </div>
  );
};
