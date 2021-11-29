import { React, useState } from "react";
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "../pages/Home.js";
import Login from "../pages/Login.js";
import Register from "../pages/Register.js";
import Dashboard from "../pages/Dashboard.js";
import CreateGame from "../pages/CreateGame.js";
import MainGame from "../pages/MainGame.js";
import Notfound from "../pages/Notfound.js";

function RoutingLogic() {

    const [gameName, setGameName] = useState("");
    const [playerA, setPlayerA] = useState("");

    return (
        <Router>
            <Routes>
                <Route exact path="/" component={Home}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/login" render={(props) => (
                    <Login {...props} playerA={playerA} setPlayerA={setPlayerA} />
                )} />
                <Route path="/creategame" render={(props) => (
                    <CreateGame {...props} gameName={gameName} setGameName={setGameName} />
                )}
                />
                <Route path="/maingame" render={(props) => (
                    <MainGame {...props} gameName={gameName} playerA={playerA} />
                )} />
                <Route path="/maingame/:id" render={(props) => (
                    <MainGame {...props} gameName={gameName} playerA={playerA} />
                )} />
                <Route path="*" component={Notfound} status={404} />
            </Routes>
        </Router>
    )
}

export default RoutingLogic;


