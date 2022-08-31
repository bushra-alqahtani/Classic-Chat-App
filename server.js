const express = require("express");
const app = express();

const cors = require("cors")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./server/config/mongoose.config")

const userRoutesFunction = require("./server/routes/user.routes");
userRoutesFunction(app);
// ============config our server ================
const server=app.listen(8000, () => console.log("Our application is running on port 8000"));
const io=require("socket.io")(server,{cors:true});

io.on("connection",socket=>{//event lisener
    console.log("Nice to meet you.(shake hand)");//all user get socket id
    socket.emit("welcome","hello")
    // socket.on("message",data=>{
    //     socket.broadcast.emit("new_message",data);
    //     console.log("i am server and i receved the =>",data);
    // });
    socket.on("new-client-logon", (data) => {
       console.log(data);
       io.emit("message-from-server", {"msgData": data});
    })
    
    socket.on("new-client-msg", (data) => {
       console.log(data);
       io.emit("message-from-server", {"msgData": data});
    })
});

 // console log what whas sent from the client

