import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../component/home/home.css";
import { Portada } from "../component/home/portada";
import { Destacados } from "../component/home/destacados";
import { EresCuidador } from "../component/home/eresCuidador";
import { Reviews } from "../component/home/reviews";
import { Detallados } from "../component/home/detallado";

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
