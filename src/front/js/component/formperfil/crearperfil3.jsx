import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom"



export const Crearperfil3  = () => {
  const [idiomas, setIdiomas] = useState("");
  const [arrayIdiomas, setArrayIdiomas] = useState ([]);
	const [experiencia, setExperiencia] = useState(""); 
  const [educacion, setEducacion] = useState("");
  const [password, setPassword] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const {actions}=useContext(Context)
  const navigate = useNavigate();
  
  console.log(idiomas)
  
    async function handleperfi(e) {
      e.preventDefault()
      let isLogged = await actions.singup(email,password,nombre,apellido);
      if(isLogged){//true

        navigate("/login")
      }
    }
    //funciona agregar idioma
    const agregaridiomas = () => {
      setArrayIdiomas ([...arrayIdiomas, { label: idiomas, done: false }])
      setIdiomas("")
    }
    //funcion borrar idioma
const handleDelete = (borrarTarea) => {
  const newArray = arrayIdiomas.filter((item) => item !== borrarTarea);
  setArrayIdiomas(newArray);
}

	 return (
        <div className="container-fluid">

        <div className="container">
          <div className="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
            <h2 className="h5 mb-3 mb-lg-0"><a href="../../pages/admin/customers.html" className="text-muted"><i className="bi bi-arrow-left-square me-2"></i></a> Crea tu perfil </h2>
            
          </div>
        
           
            <div className="card mb-4">
                <div className="card-body">
                  <h3 className="h6 mb-4">Mas sobre ti</h3>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className=" mb-3">
                        <label className="form-label">Idiomas </label>
                        <input type="text" className="form-control" onChange={(e)=>setIdiomas(e.target.value)} value={idiomas}/><button className="btn btn-outline-secondary" 
   type="button" 
   id="button-addon2" 
   onClick={agregaridiomas}>Agregar</button>
                        </div>
                        <ul className="list-group glow" > {arrayIdiomas.length > 0 ?  arrayIdiomas.map((item, index) => 
          <span className="badge rounded-pill bg-success mx-2 p-2 " key={index}> <span style={{width:"95%"}}>{item.label} </span>
            <button className="btn btn-outline-secondary " type="button"  onClick={ () => handleDelete(item)}>x</button>
           </span>
           ) : null } 
             </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">Codigo postal </label>
                        <input type="text" className="form-control" onChange={(e)=>setCodigoPostal(e.target.value)} value={codigoPostal}/>
                      </div>
                  </div>
                  <div className="row">
                  <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">Experiencia </label>
                        <select onChange={(e)=>setExperiencia(e.target.value)} value={experiencia} className="select2 form-control select2-hidden-accessible" data-select2-placeholder="Select state" data-select2-id="select2-data-4-680y" tabIndex="-1" aria-hidden="true">
                          <option data-select2-id="select2-data-6-cshs"></option>
                          <option value="Sin experiencia, ¡pero estoy dispuesto a aprender!"> Sin experiencia, ¡pero estoy dispuesto a aprender!</option>
                          <option value="Experiencia familiar">Experiencia familiar</option>
                          <option value="Experiencia profesional, 1 a 2 años"> Experiencia profesional, 1 a 2 años.</option>
                          <option value="Experiencia profesional, 2 a 5 años."> Experiencia profesional, 2 a 5 años.</option>
                          <option value="Experiencia profesional, mas de 5 años."> Experiencia profesional, mas de 5 años.</option>
                          <option value="Experiencia profesional, mas de 10 años."> Experiencia profesional, mas de 10 años.</option>
                        </select><span className="select2 select2-container select2-container--bootstrap-5" dir="ltr" data-select2-id="select2-data-5-np4c" style={{width: "391px"}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-2fn7-container" aria-controls="select2-2fn7-container"> <span className="select2-selection__rendered" id="select2-2fn7-container" role="textbox" aria-readonly="true" title="Select state"><span className="select2-selection__placeholder">Selecciona tu ciudad</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="form-label">Educacion</label>
                        <select onChange={(e)=>setEducacion(e.target.value)} value={educacion} className="select2 form-control select2-hidden-accessible" data-select2-placeholder="Selecciona tu provincia" data-select2-id="select2-data-7-809c" tabIndex="-1" aria-hidden="true">
                          <option data-select2-id="select2-data-9-k35n"></option>
                          <option value="Educación Primaria.">Educación Primaria.</option>
                          <option value="Educación Secundaria Obligatoria ESO">Educación Secundaria Obligatoria ESO </option>
                          <option value="Bachillerato">Bachillerato</option>
                          <option value="Formacion Profesional">Formacion Profesional</option>
                          <option value="Formacion universitaria">Formacion universitaria</option>
                        </select><span className="select2 select2-container select2-container--bootstrap-5" dir="ltr" data-select2-id="select2-data-8-3peu" style={{width: "391px"}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-jdfi-container" aria-controls="select2-jdfi-container"><span className="select2-selection__rendered" id="select2-jdfi-container" role="textbox" aria-readonly="true" title="Select city"><span className="select2-selection__placeholder">Selecciona tu provincia</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hstack gap-3">
              <button className="btn btn-primary btn-sm btn-icon-text"><i className="bi bi-save"></i> <span className="text">Siguiente</span></button>
            </div>
          </div>


)      
}  