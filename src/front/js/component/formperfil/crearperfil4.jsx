import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

const opciones = [
  "Responsable",
  "Paciente",
  "Amigable",
  "Hablador/a",
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

  const [loading, setLoading] = useState(true);
  const [presentacion, setPresentacion] = useState("");
  const [aptitudes, setAptitudes] = useState([]);

  const handleCheckboxChange = async (e) => {
    const value = e.target.value;
    if (e.target.checked && aptitudes.length < 6) {
      setAptitudes([...aptitudes, value]);
    } else {
      setAptitudes(
        aptitudes.filter((selected) => selected !== value)
      );
    }

  };

  async function actualiza() {
    if (aptitudes) {
      await actions.creacionPerfil4(aptitudes, presentacion);
    }
  }



  const handlePerfil = async (e) => {
    e.preventDefault()

    const categoria = await actions.loadUserCategoria();
    if (await actions.actualizaPerfil(
      {
        aptitudes: aptitudes.join(";"),
        descripcion: presentacion
      }
    )) {
      if (categoria == "peques") {
        navigate("/crearperfil/ninios")
      }
      if (categoria == "mayores") {
        navigate("/crearperfil/mayores")
      }
      if (categoria == "mascota") {
        navigate("/crearperfil/mascotas")
      }
    }
  }

  // useEffects
  useEffect(() => {
    if (perfil) {
      setLoading(false)
      setPresentacion(perfil.descripcion || "")
      setAptitudes(perfil.aptitudes || [])
    }
  }, [perfil])

  async function validacion(e) {
    if (!(await actions.validToken()))
      //false
      navigate("/login");
  }
  useEffect(() => {
    validacion();
  }, []);

  return (
    <div className="container-fluid ">

      {loading ? <div className="h-50 text-center m-5 p-5"><span>Cargando...</span></div> : (
        <form onSubmit={handlePerfil}>

          <div className="container col-10 m-auto ">
            <div className="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
              <h2 className="h5 mb-3 mb-lg-0">
                <Link to="/crearperfil/3" className="text-muted">
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
                                  checked={aptitudes.indexOf(item) !== -1}
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
                                  checked={aptitudes.indexOf(item) !== -1}
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
                                  checked={aptitudes.indexOf(item) !== -1}
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
                          value={presentacion} onChange={e => { setPresentacion(e.target.value) }}>

                        </textarea>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className="row justify-content-end">
            <div className="col-4 align-self-end">
              <button type="submit" className="btn btn-primary">
                <span className="text">Siguiente</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          </div>
        </form>
      )}
      <div className="container  m-auto gap-3"></div>
    </div >
  )
}  
