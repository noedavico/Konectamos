import { Link, useParams, useNavigate } from 'react-router-dom'
import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/appContext'
import Logo from "../../img/Letras logo.png";



export const Navbar = () => {
	const { store, actions } = useContext(Context)
	const navigate = useNavigate()

	function handleLogout() {
		actions.logout()
		navigate("/")
	}
	return (
		<nav className=" navbar m-0 navbar-expand-lg ">
			<div className="row d-flex" style={{width: "85%"}}>
				<Link to="/">

					<img src={Logo} className="img-fluid ps-2" style={{ height: "130px" }} />
				</Link>
			</div>

			<button className="navbar-toggler  me-2 " id="boton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" ></span>
			</button>
			<div className="collapse navbar-collapse  navbar-expand  text-end  " id="navbarSupportedContent">
				<ul className="navbar-nav   mb-2 mb-lg-0">
					<li className="nav-item ">
						{store.auth ?
							<button className=" plain-button " onClick={handleLogout}> Logout</button> :
							<Link to={"/login"} className="plain-button ">Login</Link>}

					</li>
					<li className="nav-item ">
						<Link to="/registro">
							<button className="plain-button ">Registrarse</button>
						</Link>
					</li>
				</ul>
			</div>


		</nav>
	);
};