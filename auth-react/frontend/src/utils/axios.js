import axios from "axios";


const api = axios.create({
    baseURL:import.meta.env.VITE_SERVER_BACKEND,
    withCredentials:true
});

// api.interceptors.response.use(
//     (response)=>response,
//     (error)=>{
//         if(error.response?.status == 401){
//             window.dispatchEvent(new Event("logout"));
//         }
//         return Promise.reject(error)
//     }
// );



export default api