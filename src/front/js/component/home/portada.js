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
        <div  className="conatiner my-5 mt-md-0 container fondoclaro p-3 shadow border rounded">
            <div className="row flex-row">
            <div className="col-lg-6 col-sm-12">
            <div className="titular">
                <h3>Deja a los tuyos en buenas manos</h3>
                <h4>¡cuidadores a un click y cerca de ti! </h4>
            </div>
            <div className="row conten-justify-center item-aling-center flex-row">
                
                    <div className="conatiner col-lg-8 col text-primary m-4">
                        <div className="m-4 fondoclaro rounded-pill">
                            <SearchBar placeholder={`Tipo de Ayuda (${store?.categorias.length} disponibles)`} data={store?.categorias} inputId="categoria" setState={setCategoria} />
                        </div>
                    </div>
                    <div className="container col-lg-8 text-primary m-4 ">
                        <div className="m-4 rounded-pill">
                            <SearchBar placeholder={`Ciudad (${store?.ciudades.length} disponibles)`} data={store?.ciudades} type={"nombre"} inputId="ciudad" setState={setCiudad} />
                        </div>
                    </div>
            </div>
        </div>
            <div className="col-lg-6 col-sm-12">
                <img src={Familia} className="img-fluid" style={{width:"50%"}} alt="Imagen de familia"  />
            </div>
        </div > 
    </div>
    
    );
};
