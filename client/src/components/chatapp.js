import React from 'react';
import '../css/chatapp.css';
import io from 'socket.io-client';
import Chatloading  from '../components/chatloding';


const socket = io('http://localhost:8000');

var time = new Date();




 class Chatapp extends React.Component{
  state = {
    value: { min: 500, max: 36000 },
    loading:true
  };
  componentDidMount()
  {
      setTimeout(()=>{
        this.setState({loading:false})
      },4000)


  }

  constructor(){
    super();
  this. messagee=(()=>{
      
    
      socket.emit("typing",this.refs .handle.value);
    })
    socket.on("chat", data => {
      this.refs.feedback.innerHTML = "";
      this.refs.output.innerHTML += `<div class="speech-bubble">
      <strong>${data.handle}</strong>
      <p>${data.message} &nbsp;&nbsp;&nbsp;&nbsp; ${time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
  </div>`;
    });
    
  socket.on("typing", data => {
   this.refs.feedback.innerHTML = `<p><em>${data} is typing...</em></p>`;
    });
  
  }



    chatfun=()=>{
       
var message = this.refs.message.value;
var handle= this.refs.handle.value;
var btn= this.refs.send.value;
var output= this.refs.output.value;
var feedback= this.refs.feedback.value;
 console.log(message)



 socket.emit("chat", {

    message: message,
    handle: handle
  });

  
  





    }
  render()
  {
    
   if(this.state.loading)
   {
     return <div>< Chatloading/></div>

   }
else{
 return(
     <div>

<div className="mario-chat">
      <h2>Buyer With Supplier Chat </h2>
      <div className="chat-window">
        <div ref="output" className="output"></div>
        <div ref="feedback" className="feedback"></div>
      </div>
      <input ref="handle" type="text" placeholder="Name"  className="handle"/>
      <input ref="message" type="text" placeholder="Message" className="message" onKeyPress={this.messagee} />
    <center><button ref="send" className="btnn " onClick={this.chatfun}>Send</button></center>  
    </div>

     </div>
 )
   

  }


  }

 }
 export default Chatapp;