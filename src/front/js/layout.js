import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Perfiles } from "./pages/perfiles.jsx";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Login } from "./component/login.jsx";
import { Registro } from "./component/registro.jsx";
import { Registropag1 } from "./component/registropag1.jsx";
import { Registropag2 } from "./component/registropag2.jsx";
import { RegistroBienvenidos } from "./component/registrobienvenidos.jsx";
import { Password } from "./pages/password";
import { Crearperfil1 } from "./component/formperfil/crearpefil1.jsx";
import { Crearperfil2 } from "./component/formperfil/crearperfil2.jsx";
import { Crearperfil3 } from "./component/formperfil/crearperfil3.jsx";
import { Crearperfil4 } from "./component/formperfil/crearperfil4.jsx";
import { Crearperfil5 } from "./component/formperfil/crearperfil5.jsx";
import { Crearperfil6 } from "./component/formperfil/crearperfil6.jsx";
import { Crearperfil7 } from "./component/formperfil/crearperfil7.jsx";



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
            <Route
              path="/registrobienvenidos/"
              element={<RegistroBienvenidos />}
            />
            <Route path="/registropag1/" element={<Registropag1 />} />
            <Route path="/registropag2/" element={<Registropag2 />} />
            <Route path="/recuperar_password/" element={<Password />} />
            <Route path="/crearperfil1/" element={<Crearperfil1 />} />
            <Route path="/crearperfil2/" element={<Crearperfil2 />} />
            <Route path="/crearperfil3/" element={<Crearperfil3 />} />
            <Route path="/crearperfil4/" element={<Crearperfil4 />} />
            <Route path="/crearperfil5/" element={<Crearperfil5 />} />
            <Route path="/crearperfil6/" element={<Crearperfil6 />} />
            <Route path="/crearperfil7/" element={<Crearperfil7 />} />
            <Route element={<Perfiles />} path="/perfiles/:perfil" />
            <Route element={<Home />} path="/" />
            <Route element={<Single />} path="/perfildetallado/:id" />
            <Route element={<h1> Not found! </h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
