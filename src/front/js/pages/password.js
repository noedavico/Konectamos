import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Password = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  async function handleRecuperarContraseña(e) {
    let recover = await actions.recover_password(email);
    if (recover) {
      setEmail("");
      alert(
        "Se ha enviado un correo electrónico con instrucciones para modificar su contraseña"
      );
      navigate("/login");
    }
  }

  return (
    <div className="container col-lg-6 col-md-8 col-sm-12 shadow-lg p-3 mb-5 rounded text-white m-auto ">
      <div className="fondo border rounded">
        <div className=" text-center fs-3 my-2  p-3">RECUPERAR CONTRASEÑA</div>
        <div className="row g-3 m-auto  fondo">
          <div className="row justify-content-center">
            <div className="col-6">
              <input
                type="text"
                className="form-control text-center"
                id="correo"
                value={email}
                placeholder={"Ingresa tu Correo electrónico"}
                onChange={handleEmail}
              />
            </div>
          </div>
          <div className="d-grid gap-2 col-4 mx-auto my-3">
            <button
              id="boton-guardar"
              className="btn  btn-primary text-white"
              type="button"
              onClick={handleRecuperarContraseña}
            >
              Recuperar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
