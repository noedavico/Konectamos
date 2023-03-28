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
            perfil: {
                descripcion: "",
                experiencia: "",
                tarifa: "",
                plus_tarifa: "",
                numero_telefono: "",
                fecha_nacimiento: "",
                genero: "",
                educacion: "",
                redes_sociales: "",
                tipo_servicios: [],
                idiomas: [],
                aptitudes: "",
                foto: null,
                direccion: {
                    calle: "",
                    ciudad: "",
                    provincia: "",
                    codigo_postal: null,
                }
            },
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
            /**
             * funcion de logueo verifica el usario recibido desde el front
             * La API valida que nombre de usuario y contraseña sean correctos y regresa un objeto token
             * @param {string} email 
             * @param {string} password 
             * @returns 
             */
            login: async (email, password) => {
                try {
                    let response = await axios.post(
                        process.env.BACKEND_URL + "/api/login", {
                        email: email,
                        password: password,
                    }
                    );
                    //

                    localStorage.setItem("token", response.data.access_token);

                    setStore({
                        auth: true,
                    });
                    return true;
                } catch (error) {
                    alert(error);
                }
            },
            // fin
            /**
             * funcion para crear nuevo usuario
             * @param {string} email 
             * @param {string} password 
             * @param {string} nombre 
             * @param {string} apellido 
             * @returns 
             */
            singup: async (email, password, nombre, apellido) => {
                try {
                    let response = await axios.post(process.env.BACKEND_URL + "/api/user", {
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
            /**
             * checkea si el token sigue siendo valido
             * @returns 
             */
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
            /**
             * funcion para configurar el tipo de categoria del usuario
             * @param {string} tipo 
             * @returns 
             */
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
                    if (response.status >= 200 && response.status < 300)
                        return true
                    return false
                } catch (error) {
                    if (error.response.status >= 400) alert(error);
                }
            },
            //fin
            /**
             * funcion para enviar una nueva contraseña
             * @param {string} email 
             * @returns 
             */
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
                    if (error?.response?.status >= 400) {
                        alert(error?.response?.data?.msg);
                    }
                    return false;
                }
            },
            //fin
            /**
             * funcion para traer los datos de todos los usuarios
             */
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
            /**
             * funcion para traer datos de 1 usuario
             * @param {number} uid 
             */
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
            loadUser: async () => {

                const token = localStorage.getItem("token");
                try {
                    let response = await axios.post(
                        process.env.BACKEND_URL + "/api/user_info",
                        getStore()?.perfil,
                        {
                            headers: {
                                withCredentials: true,
                                Authorization: `Bearer ${token}`,
                            }
                        }
                    );
                    return true;
                } catch (error) {
                    alert(error);
                }
            },

            /**
             * funcion para crear perfil 
             * @returns 
             */
            creacionPerfil: async () => {
                const token = localStorage.getItem("token");
                try {
                    let response = await axios.post(
                        process.env.BACKEND_URL + "/api/user_info",
                        getStore()?.perfil,
                        {
                            headers: {
                                withCredentials: true,
                                Authorization: `Bearer ${token}`,
                            }
                        }
                    );
                    return true;
                } catch (error) {
                    alert(error);
                }
            }, //fin
            /**
             * funcion para añadir datos vista 1
             * @param {number} numTelefono 
             * @param {Date} fechaNacimiento 
             * @param {string} genero 
             * @param {FormData} foto 
             */
            creacionPerfil1: async (numTelefono, fechaNacimiento, genero, foto) => {
                try {
                    setStore({
                        perfil: {
                            numero_telefono: parseInt(numTelefono),
                            fecha_nacimiento: fechaNacimiento,
                            genero: genero,
                            foto: foto,
                        },
                    })
                } catch (error) {
                    alert(error);
                }
            }, //fin
            /**
             * funcion para añadir datos vista 2
             * @param {string} calle 
             * @param {string} ciudad 
             * @param {string} provincia 
             * @param {number} codigoPostal 
             */
            creacionPerfil2: async (calle, ciudad, provincia, codigoPostal) => {
                try {
                    setStore({
                        perfil: {
                            direccion: {
                                calle: calle,
                                ciudad: ciudad,
                                provincia: provincia,
                                codigo_postal: codigoPostal
                            }
                        }
                    })
                } catch (error) {
                    alert(error);
                }
            }, //fin

            /**
             * funcion para añadir datos vista 3
             * @param {string} arrayIdiomas 
             * @param {string} experiencia 
             * @param {string} educacion 
             * @param {Array<string>} tipoServicios 
             */
            creacionPerfil3: async (arrayIdiomas, experiencia, educacion, tipoServicios, tarifa, plus) => {

                console.log(arrayIdiomas, experiencia, educacion, tipoServicios);
                try {
                    setStore({
                        perfil: {
                            idiomas: arrayIdiomas,
                            experiencia: experiencia,
                            educacion: educacion,
                            tipo_servicios: tipoServicios,
                            tarifa: tarifa,
                            plus: plus
                        },
                    })
                } catch (error) {
                    alert(error);
                }
            }, //fin

            /**
             * funcion para añadir datos vista 4
             * @param {string} aptitudes 
             * @param {string} presentacion 
             * @param {number} tarifa 
             * @param {number} plus 
             */
            creacionPerfil4: async (aptitudes, presentacion) => {
                try {
                    setStore({
                        perfil: {
                            aptitudes: aptitudes,
                            presentacion: presentacion
                        },
                    })
                } catch (error) {
                    alert(error);
                }
            }, //fin

            /**
             * funcion para crear direccion
             * @returns 
             */
            perfilDireccion: async () => {
                const token = localStorage.getItem("token");
                try {
                    let response = await axios.post(
                        process.env.BACKEND_URL + "/api/direccion",
                        getStore()?.perfil?.direccion,
                        {
                            headers: {
                                withCredentials: true,
                                Authorization: `Bearer ${token}`,
                            }
                        }
                    );
                    return true;
                } catch (error) {
                    alert(error);
                }
            }, //fin
            /**
             * funcion para subir foto
             * @returns 
             */
            subirFoto: async () => {
                const token = localStorage.getItem("token");
                try {
                    let response = await axios.post(
                        process.env.BACKEND_URL + "/api/subirfoto", foto, {
                        headers: {
                            withCredentials: true,
                            Authorization: `Bearer ${token}`,
                            "Content-Type": 'multipart/form-data'
                        },
                    }
                    );
                    if (response.status >= 200 && response.status < 300) return true
                    return false
                } catch (error) {
                    console.log(error);
                    if (error.response?.status >= 400) alert(error.response.data.msg);
                }
            },// fin
            /**
             * funcion para crear categoria del usuario
             */
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
                    if (response.status >= 200 && response.status < 300) return true
                    return false
                } catch (error) {
                    if (error.response.status >= 400) alert(error.response.data.msg);
                }
            }, //fin
            /**
             * funcion para cerrar sesion
             */
            logout: () => {
                localStorage.removeItem("token")
                setStore({
                    auth: false
                })
            }, //fin

        },
    };
};
export default getState;