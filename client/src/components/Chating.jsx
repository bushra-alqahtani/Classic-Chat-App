import React, { useState } from 'react';


function Chating(props) {
    const {socket, messages, user} = props;
    const [newMessage, setNewMessage] = useState("");

    const submitNewMessage = (newMessage) => {
        socket.emit("new-client-msg", {"sender": user, "time": new Date(), "message": newMessage});
        setNewMessage("");
    }


  return (
    <div   className="row justify-content-center m-4">
    <div className="col-6 border rounded" style={{height:'400px'}}>
        <div style={{overflow:"scroll",height: '340px'}} className="row-col p-2">
           
            <div className="h-100">
                {/* if the sende was server */}
                {messages.map((msg, idx) => 
                    msg.sender === "server" ?
                        <div className="py-2" style={{textAlign: 'right', fontStyle: 'italic', color: 'gray'}}>
                            {msg.message}
                        </div>  
                        :
                        msg.sender === user ?
                            <div className="d-flex flex-row-reverse py-1">
                                {/* if the sende was user added ar new user added to chat */}
                                <div className="col-auto rounded-top rounded-left p-2" style={{background: "#CCC9F2"}}>
                                    {msg.message}
                                </div>
                            </div> 
                            :
                            <div className="py-1">
                                <div style={{textAlign: 'left', fontSize: 'small', color: 'gray'}}>{msg.sender}</div>
                                <div className="d-flex flex-row">
                                    <div className="col-auto rounded-top rounded-right p-2" style={{background: '#DADEE0'}}>
                                        {msg.message}
                                    </div>
                                </div> 
                            </div>                      
                )}
            </div>
        </div>
      
      {/* ===============================================input form and submit================================================ */}
        <div className="row" style={{height: '60px'}}>
            <div className="col pt-2">
                <input value={newMessage} onChange={ (e) => setNewMessage(e.target.value) } type="text" className="form-control"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 pt-2">
                <button onClick={ (e) => submitNewMessage(newMessage) } className="btn btn-outline-primary"> send </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Chating;