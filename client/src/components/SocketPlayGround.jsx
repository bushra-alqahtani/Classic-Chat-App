import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useHistory } from 'react-router-dom';

import Chating from './Chating';
function SocketPlayGround() {

  
  const [socket] = useState(() => io(':8000'));
  const [user, setUser] = useState("");
  const [messages,setMessages]=useState([]);
 const history=useHistory();
  useEffect(() => {

    socket.on('message-from-server', msg => {
      console.log(msg);
      console.log(messages);
      setMessages(prevMessages => {
        return [...prevMessages, msg.msgData];
      })
    });

    return () => socket.disconnect(true);
  },[]);


    const clickStartButton = (user) => {
        socket.emit("new-client-logon", {"sender": "server", "time": new Date(), "message": `${user} has joined the chat`});
        history.push(Chating)
    }
 
  return (
    <div className="row justify-content-center m-4">
    <div className="col-6 border rounded p-5">
        <h4 className="pb-3">Get Started right now!</h4>
        <p className="text-left">I want to start chatting with the name:</p>
        <div className="row">
            <div className="col-10 pt-3">
                <input onChange={ (e) => setUser(e.target.value) }type="text" className="form-control"/>
            </div>
            <div className="col-auto pt-3">
                <button onClick={ (e) => clickStartButton(user) } className="btn btn-outline-success">Start Chatting</button>
            </div>
        </div>
    </div>
    <Chating socket={socket} user={user} messages={messages}/>
</div>
  );
}

export default SocketPlayGround