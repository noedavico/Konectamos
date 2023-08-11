
import React, { useState, useContext, useEffect } from "react";
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
<<<<<<< HEAD
  "Atención a tiempo completo en casa de la mascota",
  "Atención a tiempo completo en mi domicilio",
  "Familia de acogida, alojamiento",
  "Visita a domicilio",
  "Salidas y paseo",
  
=======
  "Atención a tiempo completo en casa de la mascota vacaciones y otros",
  "Atención a tiempo completo en mi domicilio (vacaciones y otros)",
  "Familia de acogida, alojamiento",
  "Visita a domicilio",
  "Salidas y paseo",
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
]

export const Crearperfil7 = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const [especie, setEspecie] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [cualificacion, setFormacion] = useState("")

  const handleCheckboxServicios = (event) => {
    const valor = event.target.value;
    const index = servicios.indexOf(valor);
    if (index === -1) {
      setServicios([...servicios, valor]);
    } else {
      setServicios(servicios.filter((item) => item !== valor));
    }
  };

  const handleCheckboxEspecie = (event) => {
    const valor = event.target.value;
    const index = especie.indexOf(valor);
    if (index === -1) {
      setEspecie([...especie, valor]);
    } else {
      setEspecie(especie.filter((item) => item !== valor));
    }
  };

  async function handlePerfil(e) {
    e.preventDefault();

    const datosNuevos = {
      servicios: servicios.join(";"),
      otros: especie.join(";"),
      formacion: cualificacion
    }

    if (await actions.actualizaPerfil(datosNuevos))
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
<<<<<<< HEAD
          <div className="col-lg-8 col-md-10 col-sm-12 mt-3 m-auto">
            <div className="card mb-4">
              
              <div className="card-header">
                    <h6 className="h6 ">
                     Detalles sobre el cuidado de mascotas
                    </h6>
                  </div>
                  <h3 className="h6 m-2">
                      Selecciona los animales que cuidarias
                </h3>
                <div className="row px-3">
                  
                  {checkEspecies.map((item, i) => (
                    <div className=" col-sm-3 " key={i}>
                      <div className="form-check">
=======
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
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
                        <label>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={item}
                            name={item}
                            checked={especie.indexOf(item) !== -1}
                            onChange={handleCheckboxEspecie}
                          />
                          {item}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
<<<<<<< HEAD
                <h3 className="h6 mt-3 ms-2 ">
                      Selecciona los servicios que ofreces
                </h3>
                <div className="row mx-1  ">
                  <div className="col-lg-7 col-md--6 mb-3 ">
=======
                <div className="row my-2">
                  <div className="card-header">
                    <p className="h6 ">
                      Selecciona los servicios que ofreces
                    </p>
                  </div>
                  <div className="col-lg-7 mb-3">
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
                    {checkServicios.slice(0, 2).map((item, i) => (
                      <div className="form-check form-check-inline" key={i}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item}
                          name={item}
                          id={"servicio0" + i}
                          checked={servicios.indexOf(item) !== -1}
                          onChange={handleCheckboxServicios}
                        />
                        <label className="form-check-label" htmlFor={"servicio0" + i}>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
<<<<<<< HEAD
                  <div className="col-lg-5 col-md-6 mb-3 ">
=======
                  <div className="col-lg-5 mb-3">
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
                    {checkServicios.slice(2).map((item, i) => (
                      <div className="form-check form-check-inline" key={i}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={item}
                          name={item}
                          id={"servicio1" + i}
                          checked={servicios.indexOf(item) !== -1}
                          onChange={handleCheckboxServicios}
                        />
                        <label className="form-check-label" htmlFor={"servicio1" + i}>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
<<<<<<< HEAD
                <div className="col-lg-6 ms-2">
                  <div className="mb-3">
                    <h6 className="h6 mt-3 ms-1  "><label htmlFor="afin">¿Tienes alguna formación afín?</label></h6>
=======
                <div className="col-lg-12">
                  <div className="mb-3">
                    <h6 className="form-label"><label htmlFor="afin">¿Tienes alguna formación afín?</label></h6>
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
                    <input
                      type="text"
                      className="form-control"
                      id="afin"
                      value={cualificacion}
                      onChange={(e) => { setFormacion(e.target.value) }}
                    />
                  </div>
                </div>
              </div>
<<<<<<< HEAD
            
         
            <div className="row justify-content-end">
                <div className="col-4 d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">
                    <span className="text me-1">Siguiente</span>
                    <i className="fa-solid fa-arrow-right text"></i>
                  </button>
                  </div>
                </div>
        </div>
=======
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
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
        </div>
      </form>
    </div>
  );
};
