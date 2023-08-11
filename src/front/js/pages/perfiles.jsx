import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Todoslosperfiles } from "../component/todoslosperfiles.jsx";

export const Perfiles = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const generadorDePerfil = (item) => (
    <Todoslosperfiles
      key={item.id}
      id={item.id}
      nombre={item.nombre_completo}
      ciudad={item.ciudad}
      descripcion={item.descripcion}
      foto={item.foto?.foto_imagen}
      foto_alt={item.foto?.nombre}
      categoria={item.categoria}
    />
  );
  return (
    <div className="container border rounder shadow">
      {params.perfil === "peques"
        ? store.cuidadoresPeques.map(generadorDePerfil)
        : params.perfil === "mascota"
        ? store.cuidadoresMascotas.map(generadorDePerfil)
        : params.perfil === "mayores"
        ? store.cuidadoresMayores.map(generadorDePerfil)
        : store.filtrados.map(generadorDePerfil)}
    </div>
  );
};
