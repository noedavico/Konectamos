import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/Log.png";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light ">
			<div className="container">
				<Link to="/">
				<img src={Logo}  className="img-fluid m-auto " style={{height: "130px"}} />
				</Link>
				<div className="ml-auto">
				<span className="navbar-brand  decoration-text-none mb-0 h1">Categorias</span>
					<Link to="/login">
						<button className="btn btn-primary mx-1">Acceder</button>
					</Link>
					<Link to="/registro2">
					<button className="btn btn-primary mx-1">Registrarse</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};