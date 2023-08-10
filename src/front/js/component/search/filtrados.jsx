import React, { useState, useContext } from "react";
import { Context } from "../../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import "./filtro.css";


export const Filtrados = () => {
  const [ciudad, setCiudad] = useState("");
  const [categoria, setCategoria] = useState("");
  const { store, actions } = useContext(Context);
  const filtrados = store.filtrados;
  const navigate = useNavigate();

  const handleCiudadChange = (e) => {
    setCiudad(e.target.value.toLowerCase());
  };

  const handleCategoriaChange = (e) => {
    setCategoria(e.target.value.toLowerCase());
  };

  async function handlePerfil(e) {
    e.preventDefault();
    if (await actions.searchItems(ciudad, categoria)) setCiudad("");
    navigate("/perfiles/" + "resultado");
  }

  return (
<main> 
<section className="hero" >
	<div class="wrapper">
	 <h1 class="beta uppercase regular line-after-heading lato pt-5">
		Cuidamos de los tuyos
		</h1>
		<p class="delta cardo regular italic">
		Encuentra cuidadores en tu zona
		</p>
	 </div>
 </section>
<div className=" container portada ">

<div className="p-3 m-auto col-lg-6 col-md-10 col-sm-12   ">
  <div className="row p-4 rounded shadow-lg  buscador ">

    <div className="col-md-6 col-sm-12 ">
      <div className="input-group">
        <select
          id="formsearch"
          className="form-select"
          value={categoria}
          onChange={handleCategoriaChange}
        >
          <option value="peques">Niños</option>
          <option value="mayores">Mayores</option>
          <option value="mascota">Mascotas</option>
        </select>
      </div>
    </div>
    <div className=" col-md-6 col-sm-12">
      <div className="input-group">
        <input
          type="text1"
          id="ciudad"
          placeholder="Ciudad"
          value={ciudad}
          onChange={handleCiudadChange}
          className="form-control"
          aria-describedby="button-addon2"
        />
  <button
    type="button"
    className="btn btn-outline-secondary "
    onClick={handlePerfil}
    id="button-addon2"
  >
    <strong>
      <i
        className="fa-solid fa-magnifying-glass  "

      ></i>
    </strong>
  </button>

      </div>
      
    </div>
    
  </div>
</div>
</div>
</main>
  );
};
