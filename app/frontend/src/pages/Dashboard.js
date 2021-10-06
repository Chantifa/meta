import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/DashboardStyle.css';
import socketClient from "socket.io-client";
const SERVER = "http://127.0.0.1:3002";

function Dashboard() {

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("")

    const socket = socketClient(SERVER);

    socket.on('connection', () => {
        //console.log(`I'm connected with the back-end`);
        socket.on('chat message', (msg) => {
            console.log('message: ' + msg);
        });
    });

    const loadMessages = async () => {

        socket.on('chat message', function (msg) {
            const addMessage = [...messages];
            addMessage.push(msg);
            setMessages(addMessage);
        });

    }

    useEffect(() => {
        loadMessages();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('chat message', inputValue);
        setInputValue("");
        console.log("SUBMITTED ---> ", inputValue);
        //console.log("Static Messages from backend ----->", messages)
    }


    return (
        <div>
            <h1>Dashboard</h1>
            <h1>Game here</h1>

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
