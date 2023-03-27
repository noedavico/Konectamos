import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import "./SearchBar.css";

export const SearchBar = ({ placeholder, data, setState, inputId = "buscador" }) => {
    // const { actions } = useContext(Context)
    const [filtraData, setFiltraData] = useState([]);
    const [nuevaEntrada, setNuevaEntrada] = useState("");

    const handleFiltro = (e) => {
        const buscaEntrada = e.target.value;
        setNuevaEntrada(buscaEntrada);
        const nuevoFiltro = data.filter((value) => {
            return value["nombre"].toLowerCase().includes(buscaEntrada.toLowerCase());
        });

        if (buscaEntrada === "") {
            console.log(
                filtraData
            );
            setFiltraData([]);
        } else {
            console.log(2);
            setFiltraData(nuevoFiltro);
        }
    };

    const handleInputText = (e) => {
        data = e.target.dataset
        setNuevaEntrada(data.servicio)
        setState(data.servicio)
        sessionStorage.setItem(inputId, data?.session || data?.servicio)
        e.target.closest(".dataResult").style.display = "none"
    }

    const clearInput = () => {
        setFiltraData([]);
        setNuevaEntrada("");
    };

    return (
        <div className="search position-relative w-100">
            <div className="searchInputs position-absolute top-50 start-50 translate-middle w-100">
                <input
                    type="text"
                    id={inputId}
                    placeholder={placeholder}
                    value={nuevaEntrada}
                    onChange={handleFiltro}
                />
                <div className="searchIcon">
                    {filtraData.length === 0 ? (
                        <i className="fa-solid fa-search"></i>
                    ) : (
                        <i id="clearBtn"
                            className="fa-regular fa-trash-can"
                            onClick={clearInput}
                        ></i>
                    )}
                </div>
            </div>
            {
                filtraData.length != 0 && (
                    <div className="dataResult position-absolute top-100 start-50 translate-middle-x w-100">
                        {filtraData.slice(0, 15).map((value, key) => {
                            return (
                                <div className="dataItem border-bottom" key={key} onClick={handleInputText}>
                                    <p className="my-1 w-100 text-start" data-servicio={value?.nombre} data-session={value?.tipo} >{value.nombre}</p>
                                </div>
                            );
                        })}
                    </div>
                )
            }
        </div >
    );
};
