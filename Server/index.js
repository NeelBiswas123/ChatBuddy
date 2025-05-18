import { Server } from "socket.io";
import http from "http";

const server = http.createServer();
const allowedOrigins = ["http://127.0.0.1:5500", "http://127.0.0.1:5501"]; // Allow both ports (use if you dont want everything on line 9)

const io = new Server(server, {
  cors: {
    origin: "*", // ( caution type :- allowed origins on "* " if u want only 1 or 2 specific port)
    methods: ["GET", "POST"]
  }
});

console.log(`WebSocket server allowing connections from ${allowedOrigins}`);



// Change from "user" to full object (to store username and version)
const users = {};

io.on('connection', socket => {

// new user joined event
    socket.on("New-user-joined", ({ username, version }) => {
        console.log("User:", username, "joined", "in", version);
        users[socket.id] = { username, version };

        // Join the correct room
        socket.join(version);

        // Notify others in the same room
        socket.to(version).emit("User-joined", username);
    });

// for sending message event
    socket.on("send", message => {
        const user = users[socket.id];
        if (user) {
            socket.to(user.version).emit("receive", { username: user.username, message: message });
        }
    });

// if user left chat 
    socket.on("disconnect", () => {
        const user = users[socket.id];
        if (user) {
            socket.to(user.version).emit("left", user.username);
            delete users[socket.id];
        }
    });

});

// Start the server
server.listen(7000, () => {
  console.log("Socket server is running on port 7000");
});
