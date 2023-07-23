import http from "http";
// import WebSocket from "ws";
import Server from "socket.io";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

// const server = http.createServer(app);
const server = app.listen(3000, handleListen);

// const wss = new WebSocket.Server({ server });
// const wsServer = new Server(httpServer);

const handleListen = () => console.log(`Listening on http://localhost:3000`);
app.listen(3000, handleListen);
