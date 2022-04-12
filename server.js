let app = require("express")();
let http = require("http").Server(app);
let io = require("socket.io")(http);
let port = 3001;

app.get("/", (res, req) => {
  res.send("Server Area")
})

io.on("connection", (socket) => {
  socket.on("send_data", (data) => {
    console.log(data)
    socket.broadcast.emit("push_data", { message: data.message })
  })
})

http.listen(port, () => {
  console.log(`Server is running: http://localhost${port}`)
})