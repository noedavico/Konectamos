import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./component/login.jsx";
import { Registro } from "./component/registro.jsx";
import { Registropag1 } from "./component/registropag1.jsx";
import { Registropag2 } from "./component/registropag2.jsx";
import { RegistroBienvenidos } from "./component/registrobienvenidos.jsx";
import { Perfilpublico } from "./component/perfilpublico.jsx";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/login/" element={<Login />} />
                        <Route path="/registro/" element={<Registro />} />
                        <Route path="/registrobienvenidos/" element={<RegistroBienvenidos/>} />
                        <Route path="/registropag1/" element={<Registropag1 />} />
                        <Route path="/registropag2/" element={<Registropag2 />} />
                        <Route path="/perfilpublico/" element={<Perfilpublico />} />
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
