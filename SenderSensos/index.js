const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, { cors: true });
require("dotenv").config({ path: ".env" });
const port = process.env.PORT || 3000;
const { encrypt } = require("./helpers/crypto");

const sensos = [
  {
    id: 1,
    tipo: "S1",
    senso: {
      humedad: 60,
      temperaturaC: 30,
      temperaturaF: 70,
    },
  },
  {
    id: 2,
    tipo: "S2",
    senso: {
      humedad: 60,
      celsius: 48,
    },
  },
  {
    id: 3,
    tipo: "S2",
    senso: {
      humedad: 60,
      celsius: 80,
    },
  },
  {
    id: 4,
    tipo: "S1",
    senso: {
      humedad: 49,
      temperaturaC: 49,
      temperaturaF: 90,
    },
  },
  {
    id: 5,
    tipo: "S2",
    senso: {
      humedad: 44,
      celsius: 48,
    },
  },
  {
    id: 6,
    tipo: "S1",
    senso: {
      humedad: 20,
      temperaturaC: 50,
      temperaturaF: 100,
    },
  },
];

io.on("connection", (socket) => {
  socket.on("join", (user) => {
    console.log("New user connected");
    console.log(user);
  });
  setInterval(() => {
    let numRan = parseInt(Math.random() * 6);
    const senso = sensos[numRan];
    const sensoEncrypted = encrypt(senso);
    socket.emit("message", sensoEncrypted);
    console.log(senso);
  }, 1000);
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log("Server running in port: " + port);
});
