import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import "./ChatRoomElements.css";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import SilentNavbar from "../SilentNavbar/index.js";

const BackButton = styled(LinkRouter)`
background: #000;
padding: 10px;
border-radius: 4px;
color: #25b3ac;
font-size: 20px;
cursor: pointer;
text-align: center;
text-decoration: none;
margin: 30px;
`;

function ChatRoom() {
  const [state, setState] = useState({ message: "", name: "" });
  const [chat, setChat] = useState([]);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:4000");
    socketRef.current.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
    return () => socketRef.current.disconnect();
  }, [chat]);

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    const { name, message } = state;
    socketRef.current.emit("message", { name, message });
    e.preventDefault();
    setState({ message: "", name });
  };

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3 style={{color: "#2f72da"}}>
          {name}: <span style={{color: "black"}}>{message}</span>
        </h3>
      </div>
    ));
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("ISOPEN---> ", isOpen);
  };


  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SilentNavbar toggle={toggle} />
      <div className="card">
      <form onSubmit={onMessageSubmit} className="chatForm">
        <h1 className="head">Messenger</h1>
        <div className="name-field">
          <TextField
            name="name"
            onChange={(e) => onTextChange(e)}
            value={state.name}
            variant="outlined"
            label="Name"
          />
        </div>
        <div>
          <TextField
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
          />
        </div>
        <button className="buttonChat">Send Message</button>
      </form>
      <div className="render-chat">
        <h1 className="head">Chat Log</h1>
        {renderChat()}
      </div>
    </div>
    <div>
      <BackButton to="/"> Back </BackButton>
    </div>
    <br />
      <Footer />
    </div>
  );
}

export default ChatRoom;
