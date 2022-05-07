const axios = require("axios")

const axiosClient = axios.create({
    baseURL: process.env.URL_API_AUTH
})

module.exports = axiosClient;