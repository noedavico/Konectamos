import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Todoslosperfiles } from "../component/todoslosperfiles.jsx"; 


export const Perfiles = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="conatiner">
			
				<Todoslosperfiles />
			
		</div>
	);
};


