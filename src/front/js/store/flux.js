import axios from "axios";

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            allusers: [],
            cuidadoresPeques: [],
            cuidadoresMascotas: [],
            cuidadoresMayores: [],
            infoDetallada: [],
            message: null,
            categorias: [{
                tipo: "Mayores",
                nombre: "Cuidado de Mayores"
            }, {
                tipo: "Niños",
                nombre: "Cuidado de Niños"
            }, {
                tipo: "Mascotas",
                nombre: "Cuidado de Mascotas"
            }],
            ciudades: [{
                nombre: "Barcelona"
            }, {
                nombre: "Madrid"
            }, {
                nombre: "Valencia"
            }],
            demo: [{
                title: "FIRST",
                background: "white",
                initial: "white",
            },
            {
                title: "SECOND",
                background: "white",
                initial: "white",
            },
            ],
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getMessage: async () => {
                try {
                    // fetching data from the backend

                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({
                        message: data.message,
                    });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    alert(error);
                }
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo,
                });
            },
            //funcion de logueo verifica el usario recibido desde el front
            login: async (email, password) => {
                try {
                    let response = await axios.post(
                        process.env.BACKEND_URL + "/api/login", {
                        email: email,
                        password: password,
                    }
                    );
                    //La API valida que nombre de usuario y contraseña sean correctos y regresa un objeto token

                    localStorage.setItem("token", response.data.access_token);

                    setStore({
                        auth: true,
                    });
                    return true;
                } catch (error) {
                    alert(error);
                }
            },
            // funcion para crear nuevo usuario
            singup: async (email, password, nombre, apellido) => {
                try {
                    let response = axios.post(process.env.BACKEND_URL + "/api/user", {
                        nombre: nombre,
                        apellido: apellido,
                        email: email,
                        password: password,
                    });
                    return true;
                } catch (error) {
                    alert(error);
                }
            },

            //fin
            validToken: async () => {
                const token = localStorage.getItem("token");
                try {
                    let response = await axios.get(
                        process.env.BACKEND_URL + "/api/validtoken", {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                    );

                    if (response.status === 200) {
                        setStore({
                            auth: response.data.isLogged,
                        });
                        return true;
                    }
                } catch (error) {
                    if (error.response.status === 401) alert(error);
                    return false;
                }
            },
            //fin
            tipoUsuario: async (tipo) => {
                const token = localStorage.getItem("token");
                try {
                    let response = await axios.put(
                        process.env.BACKEND_URL + "/api/tipoUsuario", {
                        tipo: tipo,
                    }, {
                        headers: {
                            withCredentials: true,
                            Authorization: `Bearer ${token}`,
                        },
                    }
                    );
                    if (response.status >= 200 & response.status < 300) return true
                    return false
                } catch (error) {
                    if (error.response.status >= 400) alert(error);
                }
            },
            //fin
            password_recovery: async (email) => {
                try {
                    let response = await axios.post(
                        process.env.BACKEND_URL + "/api/loosepassword", {
                        email: email,
                    }
                    );
                    console.log(response);

                    return true;
                } catch (error) {
                    console.log(error);
                    if (error.response.status >= 400) {
                        alert(error.response.data.msg);
                    }
                    return false;
                }
            },
            //fin
            loadUsuarios: async () => {
                try {
                    let response = await axios.get(
                        process.env.BACKEND_URL + "/api/all_users"
                    );
                    let cuidadorPeques = response.data.results.filter(
                        (item) => item.categoria === "peques"
                    );

                    setStore({
                        cuidadoresPeques: cuidadorPeques,
                    });
                    let cuidadorMascota = response.data.results.filter(
                        (item) => item.categoria === "mascota"
                    );
                    setStore({
                        cuidadoresMascotas: cuidadorMascota,
                    });
                    let cuidadorMayor = response.data.results.filter(
                        (item) => item.categoria === "mayores"
                    );
                    setStore({
                        cuidadoresMayores: cuidadorMayor,
                    });
                    setStore({
                        allusers: response.data.results,
                    });
                } catch (error) {
                    console.log(error);
                    //   alert(error.response.data.msg);
                }
            }, //fin

            loadInfoDetallada: async (uid) => {
                try {
                    let response = await axios.get(
                        `${process.env.BACKEND_URL}/api/user_info/${uid}`
                    );
                    setStore({
                        infoDetallada: response.data.results,
                    });


                } catch (error) {
                    console.log(error);
                    //   alert(error.response.data.msg);
                }
            }, //fin

            // funcion para crear perfil 
            creacionPerfil: async (numTelefono, fechaNacimiento, genero) => {
                try {
                    let response = axios.post(process.env.BACKEND_URL + "/api/user_info", {
                        numero_telefono: numTelefono,
                        fecha_nacimiento: fechaNacimiento,
                        genero: genero,

                    });
                    return true;
                } catch (error) {
                    alert(error);
                }
            }, //fin
            perfilDireccion: async (calle, ciudad, provincia, codigoPostal) => {
                try {
                    let response = axios.post(process.env.BACKEND_URL + "/api/direccion", {
                        calle: calle,
                        ciudad: ciudad,
                        provincia: provincia,
                        codigo_postal: codigoPostal
                    });
                    return true;
                } catch (error) {
                    alert(error);
                }
            }, //fin
            setDescripcion: async (lista, presentacion, tarifa, plus) => {
                const token = localStorage.getItem("token");
                try {
                    let response = await axios.post(
                        process.env.BACKEND_URL + "/api/descripcion", {
                        tipoPersona: lista,
                        descripcion: presentacion,
                        tarifa: tarifa,
                        plus: plus
                    }, {
                        headers: {
                            withCredentials: true,
                            Authorization: `Bearer ${token}`,
                        },
                    }
                    );
                    if (response.status >= 200 & response.status < 300) return true
                    return false
                } catch (error) {
                    if (error.response.status >= 400) alert(error.response.data.msg);
                }
            },// fin
            subirFoto: async (foto) => {
                const token = localStorage.getItem("token");
                try {
                    let response = await axios.post(
                        process.env.BACKEND_URL + "/api/subcategoria", foto, {
                        headers: {
                            withCredentials: true,
                            Authorization: `Bearer ${token}`,
                            "Content-Type": 'multipart/form-data'
                        },
                    }
                    );
                    if (response.status >= 200 & response.status < 300) return true
                    return false
                } catch (error) {
                    if (error.response.status >= 400) alert(error.response.data.msg);
                }
            },// fin
            setCategoria: async (categoria) => {
                const token = localStorage.getItem("token");
                try {
                    let response = await axios.post(
                        process.env.BACKEND_URL + "/api/subcategoria", {
                        subCategoria: categoria,
                    }, {
                        headers: {
                            withCredentials: true,
                            Authorization: `Bearer ${token}`,
                        },
                    }
                    );
                    if (response.status >= 200 & response.status < 300) return true
                    return false
                } catch (error) {
                    if (error.response.status >= 400) alert(error.response.data.msg);
                }
            }, //fin
        },
    };
};
export default getState;