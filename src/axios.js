import axios from "axios";

const instance = axios.creat({
    baseUrl : "http://localhost:8001"
})

export default instance;