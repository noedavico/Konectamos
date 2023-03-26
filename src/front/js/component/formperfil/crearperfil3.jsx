import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom"



export const Crearperfil3  = () => {
  const [idiomas, setIdiomas] = useState("");
  const [arrayIdiomas, setArrayIdiomas] = useState ([]);
	const [experiencia, setExperiencia] = useState(""); 
  const [educacion, setEducacion] = useState("");
  const [tipoServicio, setTipoServicio] = useState("");
  const {actions}=useContext(Context)
  const navigate = useNavigate();
  
  console.log(idiomas)
  
    async function handleperfi(e) {
      e.preventDefault()
      let isLogged = await actions.singup(arrayIdiomas,experiencia,educacion,apellido);
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
   <div class="container m-auto ">
<form onSubmit={handleperfi}>
   <div class="container">
     <div class="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
       <h2 class="h5 mb-3 mb-lg-0"><a href="../../pages/admin/customers.html" class="text-muted"><i class="bi bi-arrow-left-square me-2"></i></a> Create new customer</h2>
       
     </div>
   
     <div class="row">
      
       <div class="col-lg-6">
        
         <div class="card mb-4">
           <div class="card-body">
             <h3 class="h6 mb-4">Informacion adicional</h3>
             <div class="row">
             <div className="col-lg-12 my-2">
                    <div class="input-group mb-3">
                        <label className="form-label">Idiomas </label> <span className="container " > {arrayIdiomas.length > 0 ?  arrayIdiomas.map((item, index) => 
                        <span className="badge bg-secondary text-dark m-2 " key={index}> <span style={{width:"95%"}}>{item.label} </span>
                    <button className="btn btn-secondary btn-sm " type="button"  onClick={ () => handleDelete(item)}>X</button>
           </span>
           ) : null } 
             </span>
                        <input type="text" className="form-control"  placeholder="Agrega todos los idiomas que hables" onChange={(e)=>setIdiomas(e.target.value)} value={idiomas}/><button className="btn btn-outline-secondary" 
   type="button" 
   id="button-addon2" 
   onClick={agregaridiomas}>Agregar</button>
                        </div>
                        
                    </div>
               <div className="col-lg-12 my-2">
                      <div className="mb-3">
                        <label className="form-label">Educacion</label>
                        <select onChange={(e)=>setEducacion(e.target.value)} value={educacion} class="form-select" aria-label="Default select example"   data-select2-id="select2-data-7-809c" tabIndex="-1" aria-hidden="true">
                        <option selected></option>
                          <option value="Educación Primaria.">Educación Primaria.</option>
                          <option value="Educación Secundaria Obligatoria ESO">Educación Secundaria Obligatoria ESO </option>
                          <option value="Bachillerato">Bachillerato</option>
                          <option value="Formacion Profesional">Formacion Profesional</option>
                          <option value="Formacion universitaria">Formacion universitaria</option>
                        </select><span className="select2 select2-container select2-container--bootstrap-5" dir="ltr" data-select2-id="select2-data-8-3peu" style={{width: "391px"}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-jdfi-container" aria-controls="select2-jdfi-container"><span className="select2-selection__rendered" id="select2-jdfi-container" role="textbox" aria-readonly="true" title="Select city"></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                      </div>
                    </div>

                    <div className="col-lg-12 my-2">
                      <div className="mb-3">
                        <label className="form-label">Experiencia </label>
                        <select onChange={(e)=>setExperiencia(e.target.value)} value={experiencia} class="form-select" aria-label="Default select example"  data-select2-id="select2-data-4-680y" tabIndex="-1" aria-hidden="true">
                        <option selected></option>
                          <option value="Sin experiencia, ¡pero estoy dispuesto a aprender!"> Sin experiencia, ¡pero estoy dispuesto a aprender!</option>
                          <option value="Experiencia familiar">Experiencia familiar</option>
                          <option value="Experiencia profesional, 1 a 2 años"> Experiencia profesional, 1 a 2 años.</option>
                          <option value="Experiencia profesional, 2 a 5 años."> Experiencia profesional, 2 a 5 años.</option>
                          <option value="Experiencia profesional, mas de 5 años."> Experiencia profesional, mas de 5 años.</option>
                          <option value="Experiencia profesional, mas de 10 años."> Experiencia profesional, mas de 10 años.</option>
                        </select><span className="select2 select2-container select2-container--bootstrap-5" dir="ltr" data-select2-id="select2-data-5-np4c" style={{width: "391px"}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-2fn7-container" aria-controls="select2-2fn7-container"> <span className="select2-selection__rendered" id="select2-2fn7-container" role="textbox" aria-readonly="true" title="Select state"></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                      </div>
                    </div>
             </div>
             
           </div>
         </div>
     
       </div>
       <div class="col-lg-4">
         <div class="card mb-4">
           <div class="card-body">
           <h3 class="h6">Disponibilidad horaria</h3>
                  <ul class="list-group list-group-flush mx-n2">
                    <li class="list-group-item px-0 d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <h6 class="mb-0">Envetual</h6>
                        <small> Emergencia, fines de semana.</small>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch"/>
                      </div>
                    </li>
                    <li class="list-group-item px-0 d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <h6 class="mb-0">Jornada parcial, </h6>
                        <small>De 4 a 20 hs semanales.</small>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" />
                      </div>
                    </li>
                    <li class="list-group-item px-0 d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <h6 class="mb-0">Jornada completa</h6>
                        <small>De 20 a 40 hs semanales</small>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch"/>
                      </div>
                    </li>
                    <li class="list-group-item px-0 d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <h6 class="mb-0">Interna semanal</h6>
                        <small>De lunes a viernes 24 hs.</small>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch"/>
                      </div>
                    </li>
                    <li class="list-group-item px-0 d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <h6 class="mb-0">Interna fines de semana</h6>
                        <small>Sabado y domingo 24 hs</small>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch"/>
                      </div>
                    </li>
                    <li class="list-group-item px-0 d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <h6 class="mb-0">Noches</h6>
                        <small>Solo noches</small>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch"/>
                      </div>
                    </li>
                  </ul>
           </div>
         </div>
       </div>
     </div>
   </div>
   <div class="row justify-content-end">
    <div class="col-4 align-self-end">
            <Link to="/crearperfil4"><button type="submit" className="btn  btn-primary  " > <span className="text">Siguiente</span> <i class="fa-solid fa-arrow-right"></i></button>
            </Link></div>
            </div>
            </form>
          </div>
          

)      
}  