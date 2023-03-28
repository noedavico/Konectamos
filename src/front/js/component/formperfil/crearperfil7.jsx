
import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";


const checkEspecies = [
  "Gato",
  "Perro",
  "Peces",
  "Aves",
  "Cerdito",
  "Reptiles",
  "Conejos",
  "Roedores",
];

const checkServicios = [
  "Atención a tiempo completo en casa de la mascota vacaciones y otros",
  "Atención a tiempo completo en mi domicilio (vacaciones y otros)",
  "Familia de acogida, alojamiento",
  "Visita a domicilio",
  "Salidas y paseo",
]


export const Crearperfil7 = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const [seleccionadoEspecie, setSeleccionadoEspecie] = useState([]);
  const [seleccionadoServicios, setSeleccionadoServicios] = useState([]);
  const [formacion, setFormacion] = useState("")



  const handleCheckboxServicios = (event) => {
    const valor = event.target.value;
    const index = seleccionadoServicios.indexOf(valor);
    if (index === -1) {
      setSeleccionadoServicios([...seleccionadoServicios, valor]);
    } else {
      setSeleccionadoServicios(seleccionadoServicios.filter((item) => item !== valor));
    }
  };

  const handleCheckboxEspecie = (event) => {
    const valor = event.target.value;
    const index = seleccionadoEspecie.indexOf(valor);
    if (index === -1) {
      setSeleccionadoEspecie([...seleccionadoEspecie, valor]);
    } else {
      setSeleccionadoEspecie(seleccionadoEspecie.filter((item) => item !== valor));
    }
  };

  async function handlePerfil(e) {
    e.preventDefault();
    let isLogged = await actions.perfilmascotas();
    if (isLogged) { //TO-DO 
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
                <div className="row ">
                  <div className="card-header">
                    <h6 className="h6 ">
                      Selecciona animales que cuidarias
                    </h6>
                  </div>
                  {checkEspecies.map((item, i) => (
                    <div className="col-lg-3" key={i}>
                      <div className="form-check  ">
                        <label>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={item}
                            name={item}
                            checked={seleccionadoEspecie.indexOf(item) !== -1}
                            onChange={handleCheckboxEspecie}
                          />
                          {item}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="row my-2">
                  <div className="card-header">
                    <p className="h6 ">
                      Selecciona los servicios que ofreces
                    </p>
                  </div>
                  <div className="col-lg-7 mb-3">
                    {checkServicios.slice(0, 2).map((item, i) => (
                      <div className="form-check form-check-inline" key={i}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item}
                          name={item}
                          id={"servicio0" + i}
                          checked={seleccionadoServicios.indexOf(item) !== -1}
                          onChange={handleCheckboxServicios}
                        />
                        <label className="form-check-label" htmlFor={"servicio0" + i}>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="col-lg-5 mb-3">
                    {checkServicios.slice(2).map((item, i) => (
                      <div className="form-check form-check-inline" key={i}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item}
                          name={item}
                          id={"servicio1" + i}
                          checked={seleccionadoServicios.indexOf(item) !== -1}
                          onChange={handleCheckboxServicios}
                        />
                        <label className="form-check-label" htmlFor={"servicio1" + i}>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <h6 className="form-label"><label htmlFor="afin">¿Tienes alguna formación afín?</label></h6>
                    <input
                      type="text"
                      className="form-control"
                      id="afin"
                      value={formacion}
                      onChange={(e) => { setFormacion(e.target.value) }}
                    />
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
