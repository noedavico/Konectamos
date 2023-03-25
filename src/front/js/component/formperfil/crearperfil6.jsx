import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom"



export const Crearperfil6  = () => {
    const [numTelefono, setNumTelefono] = useState("");
	const [fechaNacimiento, setfechaNacimiento] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {actions}=useContext(Context)
    const navigate = useNavigate();
    
    async function handleperfi(e) {
      e.preventDefault()
      let isLogged = await actions.singup(email,password,nombre,apellido);
      if(isLogged){//true

        navigate("/login")
      }
    }
   
	 return (
        <div class="container-fluid">

        <div class="container">
          <div class="d-flex justify-content-between align-items-lg-center py-3 flex-column flex-lg-row">
            <h2 class="h5 mb-3 mb-lg-0"><a href="../../pages/admin/customers.html" class="text-muted"><i class="bi bi-arrow-left-square me-2"></i></a> Crea tu perfil </h2>
            <div class="hstack gap-3">
              <button class="btn btn-light btn-sm btn-icon-text"><i class="bi bi-x"></i> <span class="text">Salir</span></button>
              <button class="btn btn-primary btn-sm btn-icon-text"><i class="bi bi-save"></i> <span class="text">Siguiente</span></button>
            </div>
          </div>
        
          <div class="row">
            <div class="col-lg-8">
              <div class="card mb-4">
                <div class="card-body">
                  <h3 class="h6 mb-4">Informacion Basica</h3>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Numero de telefono</label>
                        <input type="text" class="form-control"/>
                        <small>*Nunca utilizaremos tu número para fines de marketing</small>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Fecha de Nacimiento</label>
                        <input type="text" class="form-control"/>
                        <small>*Pide permiso a tus padres si tiene menos de 18 años.</small>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                    <label class="form-label">Genero</label>
                  <select class="form-select">
                    <option value="draft" selected="">Femenino</option>
                    <option value="active">Masculino</option>
                    <option value="active">No binario</option>
                  </select>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Algo</label>
                        <input type="text" class="form-control"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="card mb-4">
                <div class="card-body">
                  <h3 class="h6 mb-4">Direccion</h3>
                  <div class="row">
                    <div class="col-lg-8">
                      <div class="mb-3">
                        <label class="form-label">Calle</label>
                        <input type="text" class="form-control"/>
                         </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="mb-3">
                        <label class="form-label">Codigo postal </label>
                        <input type="text" class="form-control"/>
                      </div>
                  </div>
                  <div class="row">
                  <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Ciudad</label>
                        <select class="select2 form-control select2-hidden-accessible" data-select2-placeholder="Select state" data-select2-id="select2-data-4-680y" tabindex="-1" aria-hidden="true">
                          <option data-select2-id="select2-data-6-cshs"></option>
                          <option value="Ma">Madrid</option>
                          <option value="Ba">Barccelona</option>
                          <option value="Va">Valencia</option>
                          <option value="Al">Alicante</option>
                          <option value="Se">Sevilla</option>
                          <option value="Ma">Malaga</option>
                        </select><span class="select2 select2-container select2-container--bootstrap-5" dir="ltr" data-select2-id="select2-data-5-np4c" style={{width: "391px"}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-2fn7-container" aria-controls="select2-2fn7-container"><span class="select2-selection__rendered" id="select2-2fn7-container" role="textbox" aria-readonly="true" title="Select state"><span class="select2-selection__placeholder">Selecciona tu ciudad</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Provincia</label>
                        <select class="select2 form-control select2-hidden-accessible" data-select2-placeholder="Selecciona tu provincia" data-select2-id="select2-data-7-809c" tabindex="-1" aria-hidden="true">
                          <option data-select2-id="select2-data-9-k35n"></option>
                          <option value="Ma">Madrid</option>
                          <option value="Ba">Barccelona</option>
                          <option value="Va">Valencia</option>
                          <option value="Al">Alicante</option>
                          <option value="Se">Sevilla</option>
                          <option value="Ma">Malaga</option>
                        </select><span class="select2 select2-container select2-container--bootstrap-5" dir="ltr" data-select2-id="select2-data-8-3peu" style={{width: "391px"}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-jdfi-container" aria-controls="select2-jdfi-container"><span class="select2-selection__rendered" id="select2-jdfi-container" role="textbox" aria-readonly="true" title="Select city"><span class="select2-selection__placeholder">Selecciona tu provincia</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <div class="card mb-4">
                <div class="card-body">
                  <h3 class="h6 mb-4">Mas sobre ti</h3>
                  <div class="row">
                    <div class="col-lg-8">
                      <div class="mb-3">
                        <label class="form-label">Calle</label>
                        <input type="text" class="form-control"/>
                         </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="mb-3">
                        <label class="form-label">Codigo postal </label>
                        <input type="text" class="form-control"/>
                      </div>
                  </div>
                  <div class="row">
                  <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Experiencia </label>
                        <select class="select2 form-control select2-hidden-accessible" data-select2-placeholder="Select state" data-select2-id="select2-data-4-680y" tabindex="-1" aria-hidden="true">
                          <option data-select2-id="select2-data-6-cshs"></option>
                          <option value="Ma"> Sin experiencia, ¡pero estoy dispuesto a aprender!</option>
                          <option value="Ba">Experiencia familiar</option>
                          <option value="Va"> Experiencia profesional, 1 a 2 años.</option>
                          <option value="Al"> Experiencia profesional, 2 a 5 años.</option>
                          <option value="Se"> Experiencia profesional, mas de 5 años.</option>
                          <option value="Ma"> Experiencia profesional, mas de 10 años.</option>
                        </select><span class="select2 select2-container select2-container--bootstrap-5" dir="ltr" data-select2-id="select2-data-5-np4c" style={{width: "391px"}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-2fn7-container" aria-controls="select2-2fn7-container"><span class="select2-selection__rendered" id="select2-2fn7-container" role="textbox" aria-readonly="true" title="Select state"><span class="select2-selection__placeholder">Selecciona tu ciudad</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Educacion</label>
                        <select class="select2 form-control select2-hidden-accessible" data-select2-placeholder="Selecciona tu provincia" data-select2-id="select2-data-7-809c" tabindex="-1" aria-hidden="true">
                          <option data-select2-id="select2-data-9-k35n"></option>
                          <option value="Ba">Educación Primaria.</option>
                          <option value="Va">Educación Secundaria Obligatoria ESO </option>
                          <option value="Al">Bachillerato</option>
                          <option value="Se">Formacion Profesional</option>
                          <option value="Ma">Enseñanzas universitarias</option>
                        </select><span class="select2 select2-container select2-container--bootstrap-5" dir="ltr" data-select2-id="select2-data-8-3peu" style={{width: "391px"}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-jdfi-container" aria-controls="select2-jdfi-container"><span class="select2-selection__rendered" id="select2-jdfi-container" role="textbox" aria-readonly="true" title="Select city"><span class="select2-selection__placeholder">Selecciona tu provincia</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
            
              <div class="card mb-4">
                <div class="card-body">
                  <h3 class="h6">Status</h3>
                  <select class="form-select">
                    <option value="draft" selected="">Draft</option>
                    <option value="active">Active</option>
                    <option value="active">Inactive</option>
                  </select>
                </div>
              </div>
            
              <div class="card mb-4">
                <div class="card-body">
                  <h3 class="h6">Fotografia</h3>
                  <input class="form-control" type="file"/>
                </div>
              </div>
             
              <div class="card mb-4">
                <div class="card-body">
                  <h3 class="h6">Descripcion</h3>
                  <textarea class="form-control" rows="3"></textarea>
                </div>
              </div>
              
              <div class="card mb-4">
                <div class="card-body">
                  <h3 class="h6">Notification Settings</h3>
                  <ul class="list-group list-group-flush mx-n2">
                    <li class="list-group-item px-0 d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <h6 class="mb-0">News and updates</h6>
                        <small>News about product and feature updates.</small>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch"/>
                      </div>
                    </li>
                    <li class="list-group-item px-0 d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <h6 class="mb-0">Tips and tutorials</h6>
                        <small>Tips on getting more out of the platform.</small>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" checked=""/>
                      </div>
                    </li>
                    <li class="list-group-item px-0 d-flex justify-content-between align-items-start">
                      <div class="ms-2 me-auto">
                        <h6 class="mb-0">User Research</h6>
                        <small>Get involved in our beta testing program.</small>
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

)      
}  