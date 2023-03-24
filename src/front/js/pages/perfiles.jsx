import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Todoslosperfiles } from "../component/todoslosperfiles.jsx";

export const Perfiles = () => {
  const { store, actions } = useContext(Context);
  console.log(store.allusers);
  return (
    <div className="container">
      <div className="  border text-center border m-4">
        {store.allusers.length > 0
          ? store.allusers.map((item, index) => (
              <Todoslosperfiles
                key={item.id}
                id={item.id}
                nombre={item.nombre_completo}
                ciudad={item.ciudad}
                descripcion={item.descripcion}
				foto={item.foto?.foto_imagen}
				foto_alt={item.foto?.nombre}

              />
            ))
          : null}
      </div>
    </div>
  );
};
