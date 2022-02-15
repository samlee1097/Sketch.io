const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const PORT = process.env.PORT || 3001;
app.use(cors());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, './client/build', 'index.html'));
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["https://sketch-io.vercel.app/", "http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

let userList={};

io.on("connection", (socket) => {
  
  socket.on("join_private_room", (data) => {
    socket.join(data.gameId);  

    if (!userList[data.gameId] || userList[data.gameId].length === 0){
      userList[data.gameId] = [{...data, owner: true}];
    } else {
      userList[data.gameId].push(data);
    }
    console.log(userList[data.gameId])
    io.to(data.gameId).emit('display_user', userList[data.gameId]);
  });

  socket.on("send_message", (data) => {    
    socket.to(data.gameId).emit("receive_message", data);
  });

  socket.on("user_leaves", (data) => {
    socket.leave(data.gameId);
    userList[data.gameId] = userList[data.gameId]?.filter((user) => user.socketId !== socket.id);

    console.log(userList[data.gameId])
    io.to(data.gameId).emit('display_user', userList[data.gameId]);
  })

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(PORT, () => {
  console.log("SERVER RUNNING");
});