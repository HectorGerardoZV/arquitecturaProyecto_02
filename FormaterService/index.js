const { io } = require("socket.io-client");
const {formater} =require("./components/formater");
const {sender} = require("./components/senderRabbit")
const socket = io("http://localhost:3333");
require("dotenv").config({path: ".env"});
socket.emit("join",{username: "Any User"});

// Humedad, temperatura
socket.on("message", (message) => {
  const senso = formater(message);
  sender(senso);
});
