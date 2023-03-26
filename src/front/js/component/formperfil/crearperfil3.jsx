import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom"

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

export const CrearPerfil3 = () => {
  const { actions } = useContext(Context)
  const navigate = useNavigate();

  const [seleccionados, setSeleccionados] = useState(
    opciones.map((opcion) => ({ nombre: opcion, seleccionado: false }))
  );
  const [presentacion, setPresentacion] = useState("")
  const [tarifa, setTarifa] = useState("")
  const [plus, setPlus] = useState("")

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSeleccionados((prevSeleccionados) =>
      prevSeleccionados.map((opcion) =>
        opcion.nombre === value ? { ...opcion, seleccionado: checked } : opcion
      )
    );
  };

  async function handlePerfil(e) {
    e.preventDefault()

    let lista = seleccionados.map(opcion => {
      if (opcion.seleccionado)
        return opcion.nombre

    });
    if (lista.length > 0 & presentacion & tarifa & plus) {
      lista = lista.join(",")

      if (await actions.setDescripcion(lista, presentacion, tarifa, plus)) {//true
        setSeleccionados(opciones.map((opcion) => ({ nombre: opcion, seleccionado: false })))
        setPresentacion("")
        setTarifa("")
        setPlus("")
        navigate("/crearperfil4")
      }
    }
  }



  return (
    <div className="container-fluid ">
      <form onSubmit={handlePerfil}>
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
      </form>
      <div className="container  m-auto gap-3"></div>
    </div>
  )
}  