import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";



const listaItems = [
  {
    id: 1,
    titulo: "Envetual",
    descripcion: "Emergencia, findes.",
    valor: "Envetual"
  },
  {
    id: 2,
    titulo: "Jornada parcial",
    descripcion: "De 4 a 20 hs semanales.",
    valor: "Jornada parcial"
  },
  {
    id: 3,
    titulo: "Jornada completa",
    descripcion: "De 20 a 40 hs semanales",
    valor: "Jornada completa"
  },
  {
    id: 4,
    titulo: "Interna semanal",
    descripcion: "De lunes a viernes 24 hs.",
    valor: "Interna semanal"
  },
  {
    id: 5,
    titulo: "Interna fines de semana",
    descripcion: "Sabado y domingo 24 hs",
    valor: "Interna fines de semana"
  },
  {
    id: 6,
    titulo: "Noches",
    descripcion: "Solo noches",
    valor: "Noches"
  }
];

export const Crearperfil3 = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const perfil = store?.perfil

  const [idiomas, setIdiomas] = useState("");
  const [arrayIdiomas, setArrayIdiomas] = useState(perfil?.idiomas || []);
  const [experiencia, setExperiencia] = useState(perfil?.experiencia || "");
  const [educacion, setEducacion] = useState(perfil?.educacion || "");
  const [tipoServicio, setTipoServicio] = useState(perfil?.tipo_servicios || []);
  const [tarifa, setTarifa] = useState(perfil?.tarifa || "")
  const [plus, setPlus] = useState(perfil?.plus || "")

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    // check if the checkbox is selected or deselected
    if (event.target.checked) {
      // add value to selectedCheckboxes
      setTipoServicio([...tipoServicio, value]);
    } else {
      // remove value from selectedCheckboxes
      setTipoServicio(tipoServicio.filter((item) => item !== value));
    }

  };

  async function handlePerfil(e) {
    e.preventDefault();
    await actions.creacionPerfil3(
      arrayIdiomas,
      experiencia,
      educacion,
      tipoServicio,
      tarifa,
      plus
    )
    //true

    navigate("/crearperfil4");
  }
  //funciona agregar idioma
  const agregaridiomas = () => {
    setArrayIdiomas([...arrayIdiomas, { label: idiomas, done: false }]);
    setIdiomas("");
  };

  //funcion borrar idioma
  const handleDelete = (borrarTarea) => {
    const newArray = arrayIdiomas.filter((item) => item !== borrarTarea);
    setArrayIdiomas(newArray);
  };

  return (
    <div className="container">
      <form onSubmit={handlePerfil}>

        <div className="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
          <h2 className="h5 mb-3 mb-lg-0">
            <Link to="/crearperfil2" className="text-muted">
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
                        <span className="container ">
                          {arrayIdiomas?.length > 0
                            ? arrayIdiomas.map((item, index) => (
                              <span
                                className="badge bg-success text-light m-2 "
                                key={index}
                              >{console.log(item)}
                                <span style={{ width: "95%" }}>
                                  {item.label}
                                </span>
                                <a href="#" className="btn btn-primary btn-sm ms-2" onClick={() => handleDelete(item)}>X</a>
                              </span>
                            ))
                            : null}
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Agrega todos los idiomas que hables"
                          onChange={(e) => setIdiomas(e.target.value)}
                          value={idiomas}
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          id="button-addon2"
                          onClick={agregaridiomas}
                        >
                          Agregar
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-12 my-2">
                      <div className="mb-3">
                        <label className="form-label">Educacion</label>
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
                          <option value="Educación Primaria.">
                            Educación Primaria.
                          </option>
                          <option value="Educación Secundaria Obligatoria ESO">
                            Educación Secundaria Obligatoria ESO
                          </option>
                          <option value="Bachillerato">Bachillerato</option>
                          <option value="Formacion Profesional">
                            Formacion Profesional
                          </option>
                          <option value="Formacion universitaria">
                            Formacion universitaria
                          </option>
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
                          <option value="Sin experiencia, ¡pero estoy dispuesto a aprender!">
                            Sin experiencia, ¡pero estoy dispuesto a aprender!
                          </option>
                          <option value="Experiencia familiar">
                            Experiencia familiar
                          </option>
                          <option value="Experiencia profesional, 1 a 2 años">
                            Experiencia profesional, 1 a 2 años.
                          </option>
                          <option value="Experiencia profesional, 2 a 5 años.">

                            Experiencia profesional, 2 a 5 años.
                          </option>
                          <option value="Experiencia profesional, mas de 5 años.">

                            Experiencia profesional, mas de 5 años.
                          </option>
                          <option value="Experiencia profesional, mas de 10 años.">

                            Experiencia profesional, mas de 10 años.
                          </option>
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
                            <h6 className="mb-0">{item.titulo}</h6>
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
    </div >
  );
};
