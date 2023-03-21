import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import { SearchBar } from "../SearchBar/SearchBar";

import Familia from "../../../img/familia.png";

export const Portada = () => {
    const { store, actions } = useContext(Context)
    const [ciudad, setCiudad] = useState("")
    const [categoria, setCategoria] = useState("")

    const searchCuidador = async () => {

        if (sessionStorage.getItem("categoria") && sessionStorage.getItem("ciudad")) {
            console.log("pasa");
            await actions.buscaCategoriaCiudad()
            useNavigate("/login") //TO-DO posiblemente se ira a otra url
        }
    }

    useEffect(() => {
    }, [ciudad, categoria])

    return (
        <div id="portada" className="mt-5 mt-md-0 container" >
            <div className="titular">
                <h1>Deja a los tuyos en buenas manos</h1>
                <h2>¡cuidadores a un click y cerca de ti! </h2>
            </div>
            <div id="buscador" className="mx-auto py-5 px-3 justify-content-between align-items-center bg-secondary bg-opacity-75 bg-opacity-md-50 position-absolute bottom-50 start-50 w-75">
                <div className="row mb-5 align-items-center">
                    <div className="col-12 col-lg-6 p-auto">
                        <h4>¿Qué tipo de ayuda necesitas?</h4>
                        <div className="m-4">
                            <SearchBar placeholder={`Tipo de Ayuda (${store?.categorias.length} disponibles)`} data={store?.categorias} inputId="categoria" setState={setCategoria} />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 p-auto mt-5 mt-lg-0">
                        <h4>Dinos tu ciudad</h4>
                        <div className="m-4">
                            <SearchBar placeholder={`Ciudad (${store?.ciudades.length} disponibles)`} data={store?.ciudades} type={"nombre"} inputId="ciudad" setState={setCiudad} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-reverse">
                <img src={Familia} alt="Imagen de familia" />
            </div>
        </div >
    );
};
