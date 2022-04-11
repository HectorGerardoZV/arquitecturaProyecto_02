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

export  {clientSensors,clientSensos,clientAlamrs};