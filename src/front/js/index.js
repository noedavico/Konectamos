//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
<<<<<<< HEAD
import Layout from "../js/routes/layout";
=======
import Layout from "./layout";
>>>>>>> bec942461dc5d0c3aed32226d9f1e749a6c3e2f8

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
