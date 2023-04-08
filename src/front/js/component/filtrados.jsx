import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";
import "./../../styles/filtro.css";

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
    <div className="tb input-group " id="cover">
      <div className="input-group ">
        <input
          type="text1"
          id="ciudad"
          placeholder="Ciudad"
          value={ciudad}
          onChange={handleCiudadChange}
        />
      </div>
      <div className="input-group mt-2">
        <select
          id="formsearch"
          className="form-select"
          value={categoria}
          onChange={handleCategoriaChange}
        >
          <option value="peques" selected>
            Niños
          </option>
          <option value="mayores">Mayores</option>
          <option value="mascota">Mascotas</option>
        </select>
      </div>
      <div className="td" id="s-cover">
        <button
          type="button"
          className="btn  btn-lg btn-outline-light"
          onClick={handlePerfil}
        >
          <strong>
            <i
              className="fa-solid fa-magnifying-glass p-2"
              style={{ fontSize: "20px" }}
            ></i>
          </strong>
        </button>
      </div>
    </div>
  );
};
