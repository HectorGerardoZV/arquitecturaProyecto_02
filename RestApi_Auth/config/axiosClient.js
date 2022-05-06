const axios = require("axios")

const axiosClient = axios.create({
    baseURL: "http://localhost:1324"
})

module.exports = axiosClient;