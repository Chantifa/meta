import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/DashboardStyle.css';
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
const SERVER = "http://127.0.0.1:5000/";

function Dashboard() {

    const navigate = useNavigate();

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("")

    const socket = io(SERVER);

    const loadMessages = async () => {

        // receive chat messages with .on (from chat room)
        socket.on('chat from server', (msg) => {
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
        //save input field to 'inputValue and send it to server using the room chat from frontend
        if(inputValue) {
            socket.emit('chat from client', inputValue);
            setInputValue("");
        }
    }

    const handleCreate = () => {
    navigate('/creategame');
    }

    return (
        <div>
            <h1 className="titleDash">Coronattack</h1>
            <h3 style={{color: "white", marginLeft: 80}}>Create or join a game</h3>
            
            <div>
                <button className="createJoinBtn" style={{backgroundColor: "#3bb359" }} onClick={handleCreate}>Create a new game</button>
                <button className="createJoinBtn" style={{backgroundColor: "#4aadbe" }}>Join a game</button>
            </div>

            <div>
                <h1 style={{color: "white"}}>Chat here</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} />
                    <button type="submit" className="send-button">Send</button>
                </form>
            </div>

            <br />
            <Link to="/" className="logoutBtn">Logout</Link>

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

