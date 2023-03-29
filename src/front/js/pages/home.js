import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../component/home/home.css";
// import { Portada } from "../component/home/portada";
import { Destacados } from "../component/home/destacados";
import { EresCuidador } from "../component/home/eresCuidador";
import { Reviews } from "../component/home/reviews";
import { Detallados } from "../component/home/detallado";
import { Banner1 } from "../component/home/banner.jsx";
import { Banner2 } from "../component/home/banner2.jsx";
import { BannerPortada } from "../component/home/bannerportada.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-0">
			
			<BannerPortada />
			<Detallados />
			<Banner1/>
			<Destacados />
			<EresCuidador />
			<Banner2/>
			<div className="conatiner m-auto">
			<div className=" row flex-nowrap overflow-auto border text-center  m-4">
					{store?.allusers.length > 0 ? store?.allusers.map((item, index)=> 
					<PerfilesRandom key={item.id} 
					id={item.id}
					nombre={item.nombre_completo}
					ciudad={item.ciudad}
					descripcion={item.descripcion}
					foto={item.foto?.foto_imagen}
					foto_alt={item.foto?.nombre}
					categoria={item.categoria}
					/>): null}
					</div>
				</div>
			<Reviews />
		</div>
	);
};
