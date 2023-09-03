const express = require("express");
const dotenv = require("dotenv");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

dotenv.config();
const server = http.createServer(app);

const roomUserCounts = {};

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    const room = data;

    if (!roomUserCounts[room]) {
      roomUserCounts[room] = 0;
    }

    if (roomUserCounts[room] >= 2) {
      socket.emit("room_full", { room });
      console.log(`Room Full: ${socket.id} joined room: ${data}`)
      return;
    }

    roomUserCounts[room]++;

    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    console.log(data);
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});
