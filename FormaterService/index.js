const { io } = require("socket.io-client");
const {formater} =require("./components/formater");
const {sender} = require("./components/senderRabbit")
const socket = io("http://localhost:3000");
socket.emit("join",{username: "Any User"});

// Humedad, temperatura
socket.on("message", (message)=>{
    const senso = formater(message);
    sender(senso);
})
