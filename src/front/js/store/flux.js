import axios from "axios";

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            categorias: [{ tipo: "Mayores", nombre: "Cuidado de Mayores" }, { tipo: "Niños", nombre: "Cuidado de Niños" }, { tipo: "Mascotas", nombre: "Cuidado de Mascotas" }],
            ciudades: [{ nombre: "Barcelona" }, { nombre: "Madrid" }, { nombre: "Valencia" }],
            listaCuidadores: [],
            message: null,
            demo: [{
                title: "FIRST",
                background: "white",
                initial: "white"
            },
            {
                title: "SECOND",
                background: "white",
                initial: "white"
            }
            ]
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getMessage: async () => {
                try {
                    // fetching data from the backend

                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
                    const data = await resp.json()
                    setStore({
                        message: data.message
                    })
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    alert(error)
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
                    demo: demo
                });
            },
            //funcion de logueo verifica el usario recibido desde el front 
            login: async (email, password) => {
                try {


                    let response = await axios.post(process.env.BACKEND_URL + "/api/login", {
                        email: email,
                        password: password
                    })
                    //La API valida que nombre de usuario y contraseña sean correctos y regresa un objeto token


                    localStorage.setItem("token", response.data.access_token);

                    setStore({
                        auth: true
                    });
                    return true;
                } catch (error) {

                    alert(error)
                }

            },
            // funcion para crear nuevo usuario 
            singup: async (email, password, nombre, apellido) => {

                try {


                    let response = axios.post(process.env.BACKEND_URL + "/api/user", {
                        nombre: nombre,
                        apellido: apellido,
                        email: email,
                        password: password
                    });

                    return true;
                } catch (error) {

                    alert(error)
                }
            },

            //fin
            validToken: async () => {
                let token = localStorage.getItem("token");
                try {
                    const response = await axios.get(process.env.BACKEND_URL + "/api/validtoken", {
                        headers: {
                            'Authorization': 'Bearer ' + token,
                        },
                    })

                    if (response.status === 200) {
                        setStore({
                            auth: response.data.isLogged
                        });
                        return true;
                    }
                } catch (error) {

                    if (error.response.status === 401)
                        alert(error.response.data.msg)
                    return false;
                }
            },
            //fin
            buscaListaCiudades: async () => {
                //TO-DO crear api /listaCiudades espera un array
                try {
                    const resp = axios.get(process.env.BACKEND_URL + "/api/listaCiudades")

                    if (resp.status === 200) {
                        setStore({
                            listaCuidadores: resp.data.lista
                        })
                    }
                } catch (err) {
                    alert(err.response.data.msg)
                }
            },
            //fin
            buscaCategoriaCiudad: async () => {
                //TO-DO crear api /buscaCuidador
                const ciudad = sessionStorage.getItem("ciudad");
                const categoria = sessionStorage.getItem("categoria");
                try {
                    if (categoria && ciudad) {
                        const resp = axios.get(process.env.BACKEND_URL + "/api/buscaCuidador", {
                            ciudad,
                            categoria
                        })

                        if (resp.status === 200) {
                            setStore({
                                listaCuidadores: resp.data.lista
                            })
                        }
                    }

                } catch (err) {
                    alert(err.response.data.msg || err)
                }
            },
            //fin
        }
    };
};


export default getState;