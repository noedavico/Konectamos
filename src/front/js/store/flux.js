import axios from "axios";

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            url: "https://3001-noedavico-proyectofinal-5cj8mpn8pod.ws-eu90.gitpod.io",
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
                    const store = getStore();
                    const urlapi = store.url;

                    let response = await axios.post(urlapi + "/api/login", {
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
                    const store = getStore();
                    const urlapi = store.url;

                    let response = axios.post(urlapi + "/api/user", {
                        nombre: nombre,
                        apellido: apellido,
                        email: email,
                        password: password
                    });
                    return true;
                } catch (error) {

                    alert(error)
                }
            }
            //fin
        }
    };
};


export default getState;