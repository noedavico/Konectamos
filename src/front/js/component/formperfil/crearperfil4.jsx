import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import { object } from "prop-types";

const opciones = [
  "Responsable",
  "Paciente",
  "Amigable",
  "Homador/a",
  "Entusiasta",
  "Divertido/a",
  "Creativo/a",
  "Tranquilo/a",
  "Deportivo/a",
  "Empatico/a",
  "Activo/a",
  "Amable",
  "Sociable",
  "Sereno/a",
  "Alegre",
  "Práctico/a",
  "Optimista",
  "Confiado/a"
];

export const Crearperfil4 = () => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate();

  const perfil = store?.perfil

  const [presentacion, setPresentacion] = useState(perfil?.descripcion || "");
  const [checkboxesSeleccionados, setCheckboxesSeleccionados] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setCheckboxesSeleccionados([...checkboxesSeleccionados, value]);
    } else {
      setCheckboxesSeleccionados(
        checkboxesSeleccionados.filter((selected) => selected !== value)
      );
    }
  };



  async function handlePerfil(e) {
    e.preventDefault()
    const lista = checkboxesSeleccionados.map(opcion => {
      if (opcion)
        return opcion

    });

    lista.join(";")

    console.log(lista);

    if (await actions.creacionPerfil4(lista, presentacion)
      && await actions.crearPeril()
      && await actions.loadInfoDetallada()
    ) {//true

      navigate("/crearperfil")
    }
  }



  return (
    <div className="container-fluid ">

      <form onSubmit={handlePerfil}>

        <div className="container col-10 m-auto ">
          <div className="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
            <h2 className="h5 mb-3 mb-lg-0">
              <Link to="/crearperfil3" className="text-muted">
                <i className="bi bi-arrow-left-square me-2"></i>
              </Link>
              <span>Crea tu perfil</span>
            </h2>
          </div>
          <div className="row">
            <div className="card col-8 mt-3 m-auto">
              <div className="card-body">
                <h3 className="h6 mb-4">¿Cómo te describirías en 6 palabras?</h3>

                <section className="row">

                  <div className="col-md-4">
                    <div className="form-group">
                      {opciones.slice(0, 6).map((item, i) => (
                        <div className="col-lg-3" key={i}>
                          <div className="form-check  ">
                            <label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={item}
                                name={item}
                                checked={checkboxesSeleccionados.indexOf(item) !== -1}
                                onChange={handleCheckboxChange}
                              />
                              {item}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      {opciones.slice(6, 12).map((item, i) => (
                        <div className="col-lg-3" key={i}>
                          <div className="form-check  ">
                            <label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={item}
                                name={item}
                                checked={checkboxesSeleccionados.indexOf(item) !== -1}
                                onChange={handleCheckboxChange}
                              />
                              {item}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      {opciones.slice(12).map((item, i) => (
                        <div className="col-lg-3" key={i}>
                          <div className="form-check  ">
                            <label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={item}
                                name={item}
                                checked={checkboxesSeleccionados.indexOf(item) !== -1}
                                onChange={handleCheckboxChange}
                              />
                              {item}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                <section className="row mt-3">
                  <div className="col-12">
                    <div className="mb-3">
                      <h3 className="h6 mb-3">Presentacion detallada </h3>
                      <textarea className="w-100 form-control" name="presentacion" id="presentacion" rows="3"
                        placeholder="Esta es la parte más importante, las familias prestan mucha atención.
Preséntate de la manera más detallada posible."
                        value={presentacion} onChange={e => setPresentacion(e.target.value)}>

                      </textarea>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-sm btn-icon-text">
            <i className=""></i>
            <span className="text">Siguiente</span>
          </button>
        </div>
      </form>
      <div className="container  m-auto gap-3"></div>
    </div >
  )
}  
