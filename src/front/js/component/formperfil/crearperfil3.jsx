import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import { listaItems, opcionesEducacion, opcionesExperiencia } from "./opcionesPerfil3.js";


export const Crearperfil3 = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const perfil = store?.perfil

  const [idiomas, setIdiomas] = useState("");
  const [arrayIdiomas, setArrayIdiomas] = useState([]);
  const [experiencia, setExperiencia] = useState("");
  const [educacion, setEducacion] = useState("");
  const [tipoServicio, setTipoServicio] = useState([]);
  const [tarifa, setTarifa] = useState("");
  const [plus, setPlus] = useState("");

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    // comprueba si el checkbox esta seleccionado o no

    if (event.target.checked) {
      //  añade el valor al array
      setTipoServicio([...tipoServicio, value]);
    } else {
      // quita el valor desde el array
      setTipoServicio(tipoServicio.filter((item) => item !== value));
    }
    console.log(tipoServicio);
  };

  async function actualiza() {
    await actions.creacionPerfil3(arrayIdiomas, experiencia, educacion, tipoServicio, tarifa, plus);
  }

  async function handlePerfil(e) {
    e.preventDefault();


    await actions.actualizaPerfil({
      idiomas: arrayIdiomas.join(";"),
      experiencia,
      educacion,
      tipo_servicios: tipoServicio.join(";"),
      tarifa: parseInt(tarifa),
      plus_tarifa: parseInt(plus)
    }
    )
    //true

    navigate("/crearperfil/4");
  }

  const addToIdiomas = (e) => {
    if (e.key === 'Enter') {
      agregarIdiomas()
    }
  }

  //funciona agregar idioma
  const agregarIdiomas = () => {
    if (idiomas != "")
      setArrayIdiomas([...arrayIdiomas, idiomas]);
    setIdiomas("");
  };

  //funcion borrar idioma
  const handleDelete = (borrarTarea) => {
    const newArray = arrayIdiomas.filter((item) => item !== borrarTarea);
    setArrayIdiomas(newArray);
  };

  useEffect(() => {
    if (perfil) {
      setIdiomas("");
      setLoading(false);
      setArrayIdiomas(perfil?.idiomas || []);
      setExperiencia(perfil?.experiencia || "");
      setEducacion(perfil?.educacion || "");
      setTipoServicio(perfil?.tipo_servicios || []);
      setTarifa(perfil?.tarifa || "");
      setPlus(perfil?.plus_tarifa || "");
    }

  }, [perfil]);

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
              <Link to="/crearperfil/2" className="text-muted">
                <i className="bi bi-arrow-left-square me-2"></i>
              </Link>
              Crea tu perfil
            </h2>
          </div>
          <div className="col-8 mt-3 m-auto">
            <section className="row">
              <article className="col-lg-7">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12 my-2">
                        <div className="input-group mb-3">
                          <label className="form-label">Idiomas </label>
                          <span className="container px-0">
                            {arrayIdiomas?.length > 0
                              ? arrayIdiomas.map((item, index) => (
                                <span
<<<<<<< HEAD
                                  className="badge text-capitalize bg-secondary py-2 m-2 "
=======
                                  className="badge bg-success text-light m-2 "
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
                                  key={index}
                                >
                                  <span style={{ width: "95%" }}>
                                    {item}
                                  </span>
<<<<<<< HEAD
                                  <a href="#" className="btn-small btn-sm ms-2 text-none" onClick={() => handleDelete(item)}>x</a>
=======
                                  <a href="#" className="btn btn-primary btn-sm ms-2" onClick={() => handleDelete(item)}>X</a>
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
                                </span>
                              ))
                              : null}
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Agrega todos los idiomas que hables"
                            onChange={(e) => setIdiomas(e.target.value)}
                            onKeyDown={addToIdiomas}
                            value={idiomas}
                          />
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                            onClick={agregarIdiomas}
                          >
                            Agregar
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-12 my-2">
                        <div className="mb-3">
                          <label className="form-label">Educación</label>
                          <select
                            onChange={(e) => setEducacion(e.target.value)}
                            value={educacion}
                            className="form-select"
                            aria-label="Default select example"
                            data-select2-id="select2-data-7-809c"
                            tabIndex="-1"
                            aria-hidden="true"
                          >
                            <option defaultValue></option>
                            {opcionesEducacion.map((item, i) => <option key={i} value={item}> {item} </option>)}
                          </select>
                          <span
                            className="select2 select2-container select2-container--bootstrap-5"
                            dir="ltr"
                            data-select2-id="select2-data-8-3peu"
                            style={{ width: "391px" }}
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex="0"
                                aria-disabled="false"
                                aria-labelledby="select2-jdfi-container"
                                aria-controls="select2-jdfi-container"
                              >
                                <span
                                  className="select2-selection__rendered"
                                  id="select2-jdfi-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Select city"
                                ></span>
                                <span
                                  className="select2-selection__arrow"
                                  role="presentation"
                                >
                                  <b role="presentation"></b>
                                </span>
                              </span>
                            </span>
                            <span
                              className="dropdown-wrapper"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </div>
                      </div>

                      <div className="col-lg-12 my-2">
                        <div className="mb-3">
                          <label className="form-label">Experiencia </label>
                          <select
                            onChange={(e) => setExperiencia(e.target.value)}
                            value={experiencia}
                            className="form-select"
                            aria-label="Default select example"
                            data-select2-id="select2-data-4-680y"
                            tabIndex="-1"
                            aria-hidden="true"
                          >
                            <option defaultValue></option>
                            {opcionesExperiencia.map((item, i) => <option key={i} value={item}> {item} </option>)}
                          </select>
                          <span
                            className="select2 select2-container select2-container--bootstrap-5"
                            dir="ltr"
                            data-select2-id="select2-data-5-np4c"
                            style={{ width: "391px" }}
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex="0"
                                aria-disabled="false"
                                aria-labelledby="select2-2fn7-container"
                                aria-controls="select2-2fn7-container"
                              >
                                <span
                                  className="select2-selection__rendered"
                                  id="select2-2fn7-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Select state"
                                ></span>
                                <span
                                  className="select2-selection__arrow"
                                  role="presentation"
                                >
                                  <b role="presentation"></b>
                                </span>
                              </span>
                            </span>
                            <span
                              className="dropdown-wrapper"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-7">
                        <div className="mb-3">
                          <label className="form-label">Tarifa </label>
                          <input
                            type="text"
                            placeholder="Ingresa valor en € por hora. Ej 8"
                            className="form-control"
                            value={tarifa}
                            onChange={e => setTarifa(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="mb-3">
                          <label className="form-label">Plus Tarifa </label>
                          <input
                            type="text"
                            placeholder="Noches,fin de semanas"
                            className="form-control"
                            value={plus}
                            onChange={e => setPlus(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="col-lg-5">
                <div className="card mb-4">
                  <div className="card-body">
                    <h3 className="h6">Disponibilidad horaria</h3>
                    <ul className="list-group list-group-flush mx-n2">
                      {
                        listaItems.map((item) => (
                          <li key={item.id} className="list-group-item px-0 d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <h6 className="mb-0">{item.valor}</h6>
                              <small>{item.descripcion}</small>
                            </div>
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={item.valor}
                                role="switch"
                                onChange={handleCheckboxChange}
                              />
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </article>
            </section>
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
          
         
          
        </form >
        
      )}
    </div >
    
=======
          </div>
          <div className="row justify-content-end">
            <div className="col-4 align-self-end">
              <button type="submit" className="btn btn-primary">
                <span className="text">Siguiente</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </form >
      )}
    </div >
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8
  );
};
