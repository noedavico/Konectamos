import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
//import "../../styles/component.css";
import { useNavigate } from "react-router-dom";

export const Password = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  async function handleRecuperarPassword(e) {
    let recover = await actions.recover_password(email);
    if (recover) {
      setEmail("");
      alert(
        "Se ha enviado un correo electrónico con las instrucciones para modificar la contraseña"
      );
      navigate("/acceso");
    }
  }

  return (
    <div className="container-lg">
      <div className="fw-bold text-center fs-2 mt-3 mb-0">
        RECUPERAR CONTRASEÑA
      </div>
      <div className="row g-3 mt-0 mb-4">
        <div className="row g-4 my-4">
          <div className="col">
            <span className="input-group-text fs-5"> CORREO ELECTRÓNICO </span>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control text-center"
              id="correo"
              value={email}
              onChange={handleEmail}
              placeholder={"INGRESA TU CORREO ELECTRÓNICO"}
            />
          </div>
        </div>
        <div className="d-grid gap-2 col-5 mx-auto my-3">
          <button
            id="boton-guardar"
            className="btn btn-success  fw-bold"
            type="button"
            onClick={handleRecuperarPassword}
          >
            OBTENER ENLACE
          </button>
        </div>
      </div>
    </div>
  );
};
