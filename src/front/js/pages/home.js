import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../component/index/home.css";
import { Portada } from "../component/index/portada";
import { Destacados } from "../component/index/destacados";
import { EresCuidador } from "../component/index/eresCuidador";
import { Reviews } from "../component/index/reviews";
import { Detallados } from "../component/index/detallado";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<Portada />
			<Detallados />
			<Destacados />
			<EresCuidador />
			<Reviews />
		</div>
	);
};
