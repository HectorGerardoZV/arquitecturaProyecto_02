const axios = require("axios")

const axiosClient = axios.create({
    baseURL: process.env.URL_API_USER
})

module.exports = axiosClient;