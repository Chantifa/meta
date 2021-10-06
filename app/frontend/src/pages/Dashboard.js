import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/DashboardStyle.css';
import socketClient from "socket.io-client";
const CHAT_SERVER = "http://127.0.0.1:3002/";

function Dashboard() {

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("")

    const socket = socketClient(CHAT_SERVER);

    const loadMessages = async () => {

        socket.on('chat message', function (msg) {
            const newMessageArray = [...messages];
            newMessageArray.push(msg);
            setMessages(newMessageArray);
        });
    }

    useEffect(() => {
        loadMessages();
    },
    // eslint-disable-next-line
        []) // [messages] -> it stacks but overflows

    const handleSubmit = (e) => {
        e.preventDefault();
        //save input field to 'chat message' and send it to server
        socket.emit('chat message', inputValue);
        setInputValue("");
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <div style={{backgroundColor: "blue", color: "white"}}>Game here</div>

            <div className="chatBox">
                <h1>Chat here</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        className="message-input"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} />
                    <button type="submit" className="send-button">Send</button>
                </form>
            </div>

            <Link to="/">Logout</Link>

            <div className="chatWindow">
                <ul>
                    {messages.map((message, index) => {
                        return <div key={index} className="liMessage">{message}</div>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Dashboard
