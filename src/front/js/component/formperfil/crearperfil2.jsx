import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom"



export const Crearperfil2  = () => {
    const [calle, setCalle] = useState("");
	const [ciudad, setCiudad] = useState("");
    const [provincia, setProvincia] = useState("");
    const [codigoPostal, setCodigoPostal] = useState("");
    const {actions}=useContext(Context)
    const navigate = useNavigate();
    
   
    async function handleperfi(e) {
      e.preventDefault()
      let isLogged = await actions.PerfilDireccion(calle, ciudad, provincia, codigoPostal);
      if(isLogged){//true
        navigate("/login")
      }
    }
	 return (
        <div class="container-fluid">
          <form onSubmit={handleperfi}>
              <div class="card col-8 mt-3 m-auto">
                <div class="card-body">
                  <h3 class="h6 mb-4">Direccion</h3>
                  <div class="row">
                    <div class="col-lg-8">
                      <div class="mb-3">
                        <label class="form-label">Calle</label>
                        <input type="text" class="form-control"
                        onChange={(e)=>setCalle(e.target.value)} value={calle}/>
                         </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="mb-3">
                        <label class="form-label">Codigo postal </label>
                        <input type="numeric" class="form-control" onChange={(e)=> setCodigoPostal(e.target.value)} value={codigoPostal}/>
                      </div>
                  </div>
                  <div class="row">
                  <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Ciudad</label>
                        <input type="text" class="form-control" onChange={(e)=>setCiudad(e.target.value)} value={ciudad} riquered/>
                       </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Provincia</label>
                        <input type="text" class="form-control" onChange={(e)=>setProvincia(e.target.value)} value={provincia}/>
                      
                     </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              </form>
              <div class="container  m-auto gap-3">
              
             <Link to="/crearperfil3"> <button class="btn btn-primary btn-sm btn-icon-text"><i class=""></i> <span class="text">Siguiente</span></button> </Link>
            </div>
            </div>


)      
}  