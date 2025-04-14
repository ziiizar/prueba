import axios from "axios";

const api = axios.create({
    baseURL: "https://api.openbrewerydb.org/v1"
})

export default api;
