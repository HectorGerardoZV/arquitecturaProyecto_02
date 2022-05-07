import axios from "axios";

const clientSensors  = axios.create({
    baseURL: import.meta.env.VITE_REST_SENSORS
});
const clientSensos  = axios.create({
    baseURL: import.meta.env.VITE_REST_SENSOS
});
const clientAlamrs  = axios.create({
    baseURL: import.meta.env.VITE_REST_ALARMS
});
const clientUsers=axios.create({
    baseURL: import.meta.env.VITE_REST_USERS
});
const clienteAuh = axios.create({
    baseURL: import.meta.env.VITE_REST_AUTH
})
export  {clientSensors,clientSensos,clientAlamrs, clientUsers,clienteAuh};