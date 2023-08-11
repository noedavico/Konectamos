import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { PerfilDetallado } from "../component/perfildetallado.jsx";
import { Context } from "../store/appContext";

export const Single = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.loadInfoDetallada(params.id);
  }, []);

  return (
    <div className="jumbotron">
      <PerfilDetallado />
    </div>
  );
};
