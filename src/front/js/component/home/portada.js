import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import { SearchBar } from "../SearchBar/SearchBar";

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
        <div id="portada" className="mt-5 mt-md-0 container p-0 object-fit-cover position-relative d-block" >
            <div className="titular">
                <h1>Deja a los tuyos en buenas manos</h1>
                <h2>¡cuidadores a un click y cerca de ti! </h2>
            </div>
            <div id="buscador" className="mx-auto justify-content-between align-items-center bg-secondary bg-opacity-75 bg-opacity-md-50 position-absolute bottom-50 start-50 w-75">
                <div className="row justify-content-around align-items-center mx-auto mb-lg-1 mt-0 p-2 pb-md-5 pt-0 g-2 g-lg-4">
                    {store?.categorias.map((item, key) => key < 3 ? <button key={key} className="col-auto btn btn-primary py-2 px-5 px-md-1" >{item.nombre}</button> : "")}
                </div>
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

            <div className="bg-image-overlay"></div>
        </div >
    );
};
