import http from "http";
// import WebSocket from "ws";
import { Server } from "socket.io";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const httpServer = http.createServer(app);
// const server = app.listen(3000, handleListen);

// const wss = new WebSocket.Server({ server });
const wsServer = new Server(httpServer);
wsServer.on("connection", (socket) => {
  socket.on("join_room", (roomName, done) => {
    socket.join(roomName);
  });
});

// const handleListen = () => console.log(`Listening on http://localhost:3000`);
// app.listen(3000, handleListen);
const PORT = 3001; // 사용할 포트 번호
httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
