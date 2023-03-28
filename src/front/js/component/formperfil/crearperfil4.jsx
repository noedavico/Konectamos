import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

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

  const [marcados, setMarcados] = useState(perfil?.aptitudes)

  const [seleccionados, setSeleccionados] = useState(
    opciones.map((opcion, index) => ({ nombre: opcion, seleccionado: compruebaMarcados(marcados, opcion, index) }))
  );
  const [presentacion, setPresentacion] = useState(perfil?.descripcion || "")
  const [tarifa, setTarifa] = useState(perfil?.tarifa || "")
  const [plus, setPlus] = useState(perfil?.plus_tarifa || "")

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSeleccionados((prevSeleccionados) =>
      prevSeleccionados.map((opcion) =>
        opcion.nombre === value ? { ...opcion, seleccionado: checked } : opcion
      )
    );
  };

  function compruebaMarcados(check, opcion, index) {
    let arr = check.split(";").filter((item, i) => item === opcion && index === i)
    console.log(arr);
    return false
  }

  async function handlePerfil(e) {
    e.preventDefault()

    let lista = seleccionados.map(opcion => {
      if (opcion.seleccionado)
        return opcion.nombre

    });
    lista = lista.join(";")

    if (await actions.creacionPerfil4(lista, presentacion, tarifa, plus)) {//true

      navigate("/crearperfil")
    }
  }



  return (
    <div className="container-fluid ">

      <form onSubmit={handlePerfil}>

        <div className="container col-10 m-auto ">
          <div className="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
            <h2 className="h5 mb-3 mb-lg-0">
              <Link to="#" className="text-muted">
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
                      {seleccionados.slice(0, 6).map((opcion) => (
                        <div key={opcion.nombre} className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={opcion.nombre}
                            value={opcion.nombre}
                            checked={opcion.seleccionado}
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor={opcion.nombre} className="form-check-label">
                            {opcion.nombre}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      {seleccionados.slice(6, 12).map((opcion) => (
                        <div key={opcion.nombre} className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={opcion.nombre}
                            value={opcion.nombre}
                            checked={opcion.seleccionado}
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor={opcion.nombre} className="form-check-label">
                            {opcion.nombre}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      {seleccionados.slice(12).map((opcion) => (
                        <div key={opcion.nombre} className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={opcion.nombre}
                            value={opcion.nombre}
                            checked={opcion.seleccionado}
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor={opcion.nombre} className="form-check-label">
                            {opcion.nombre}
                          </label>
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
                <section className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <h3 className="h6 mb-3">¿Cual es tu tarifa por hora?</h3>
                      <input type="text" className="form-control" name="tarifa" id="tarifa" placeholder="Importe en euros" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <h3 className="h6 mb-3">¿Plus noche o fin de semana?</h3>
                      <input type="text" className="form-control" name="plus" id="plus" placeholder="Importe en euros" />
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
