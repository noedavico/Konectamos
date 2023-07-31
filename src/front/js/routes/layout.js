import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../component/utils/scrollToTop";

import { Home } from "../pages/home.jsx";
import { Perfiles } from "../pages/allprofile.jsx";
import { Single } from "../pages/profiledetails.jsx";
import injectContext from "../store/appContext";
import { Navbar } from "../shared/navbar.js";
import { Footer } from "../shared/footer.js";
import { Login } from "../pages/login.jsx";
import { Registro } from "../pages/registro.jsx";
import { Registropag1 } from "../component/registro/registropag1.jsx";
import { Registropag2 } from "../component/registro/registropag2.jsx";
import { RegistroBienvenidos } from "../component/registro/registrobienvenidos.jsx";
import { Password } from "../pages/password.jsx";
import { Crearperfil1 } from "../component/formperfil/crearperfil1.jsx";
import { Crearperfil2 } from "../component/formperfil/crearperfil2.jsx";
import { Crearperfil3 } from "../component/formperfil/crearperfil3.jsx";
import { Crearperfil4 } from "../component/formperfil/crearperfil4.jsx";
import { Crearperfil5 } from "../component/formperfil/crearperfil5.jsx";
import { Crearperfil6 } from "../component/formperfil/crearperfil6.jsx";
import { Crearperfil7 } from "../component/formperfil/crearperfil7.jsx";



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
            <Route path="/crearperfil/1" element={<Crearperfil1 />} />
            <Route path="/crearperfil/2" element={<Crearperfil2 />} />
            <Route path="/crearperfil/3" element={<Crearperfil3 />} />
            <Route path="/crearperfil/4" element={<Crearperfil4 />} />
            <Route path="/crearperfil/ninios" element={<Crearperfil5 />} />
            <Route path="/crearperfil/mayores/" element={<Crearperfil6 />} />
            <Route path="/crearperfil/mascotas/" element={<Crearperfil7 />} />
            <Route path="/perfiles/:perfil" element={<Perfiles />} />
            <Route path="/" element={<Home />} />
            <Route path="/perfildetallado/:id" element={<Single />} />
            <Route path="/*" element={<h1> Not found! </h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
