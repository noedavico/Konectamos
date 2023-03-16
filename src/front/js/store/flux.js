import axios from "axios";

const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
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
                    console.log("Error loading message from backend", error)
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
                    // if (response.status === 200) {
                    localStorage.setItem("token", response.data.access_token);

                    setStore({
                        auth: true
                    });
                    return true;
                    // }
                } catch (error) {
                    console.log(error);
                    if (error.response.status === 401)
                        alert(error.response.data.msg)
                    return false;
                }
            },

        }
    };
};


export default getState;