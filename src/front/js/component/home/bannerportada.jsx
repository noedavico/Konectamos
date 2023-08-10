import Banner from "../../../../front/img/fondo.jpg";
import Bannermovil from "../../../../front/img/fondo.jpg";
import React from "react";
import { Filtrados } from "../search/filtrados.jsx";

export const BannerPortada = () => {
  return (
    <>
      <div
        className="container-fluid d-block  vh-100 d-none d-md-block position-relative "
        style={{
          backgroundImage: `url("")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "500px",
        }}
      >
        <div className="col-lg-7 col-md-10 position-absolute p-5  m-auto top-50 start-0">
          <Filtrados />
        </div>
      </div>
      <div
        className="container-fluid position-relative d-md-none d-block w-100  "
        style={{
          backgroundImage: `url(${Bannermovil})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "400px",
        }}
      >
        <div className="col-12 position-absolute py-4 bottom-0 start-0">
          <Filtrados />
        </div>
      </div>
    </>
  );
};
