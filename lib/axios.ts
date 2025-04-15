import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openbrewerydb.org/v1",
});

export default api;

export const authApi = axios.create({
  baseURL: 'http://localhost:3001/auth',
  withCredentials: true,
});
