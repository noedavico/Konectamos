import React, { useContext, useRef } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../component/home/home.css";
import { Destacados } from "../component/home/destacados";
import { EresCuidador } from "../component/home/eresCuidador";
import { Detallados } from "../component/home/detallado";
import { Banner1 } from "../component/home/banner.jsx";
import { Banner2 } from "../component/home/banner2.jsx";
import { BannerPortada } from "../component/home/bannerportada.jsx";
import { PerfilesRandom } from "../component/home/perfiles.jsx";
import { Reviews } from "../component/home/reviews";
import { Banner3 } from "../component/home/banner3.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const containerRef = useRef(null);
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (event) => {
    startX = event.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
    containerRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (event) => {
    const x = event.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Ajusta la velocidad del desplazamiento

    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    containerRef.current.style.cursor = "grab";
  };

  const handleMouseLeave = () => {
    containerRef.current.style.cursor = "grab";
  };

  return (
    <div className="text-center mt-0">
      <BannerPortada />
      <Detallados />
      <Banner1 />
      <Destacados />
      <Banner2 />
      <div className="container-fluid m-auto">
        <div
          ref={containerRef}
          className="row py-3 flex-nowrap overflow-hidden text-center m-4"
          style={{ overflowX: "auto", cursor: "grab" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {store?.allusers.length > 0 ? (
            store?.allusers.map((item, index) => (
              <PerfilesRandom
                key={item.id}
                id={item.id}
                nombre={item.nombre_completo}
                ciudad={item.ciudad}
                descripcion={item.descripcion}
                foto={item.foto?.foto_imagen}
                foto_alt={item.foto?.nombre}
                categoria={item.categoria}
              />
            ))
          ) : null}
        </div>
      </div>
      <EresCuidador />
      <Banner3/>
      <Reviews/>
    </div>
  );
};