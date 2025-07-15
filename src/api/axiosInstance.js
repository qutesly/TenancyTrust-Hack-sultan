import axios from "axios";


const api = axios.create({
    baseURL: "https://web-production-f6fa0.up.railway.app/api",
    // headers: {
    //     "Content-Type": "application/json",
    // }
})

export default api;