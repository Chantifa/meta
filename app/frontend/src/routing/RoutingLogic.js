import { React, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from '../pages/Home.js';
import Login from '../pages/Login.js';
import Register from '../pages/Register.js';
import Dashboard from '../pages/Dashboard.js';
import CreateGame from "../pages/CreateGame.js";
import MainGame from "../pages/MainGame.js";

function RoutingLogic() {

    const [gameName, setGameName] = useState("");

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/login" component={Login} />
                <Route path="/creategame" render={(props) => (
                    <CreateGame {...props} gameName={gameName} setGameName={setGameName} />
                )}
                />
                <Route path="/maingame" render={(props) => (
                    <MainGame {...props} gameName={gameName} />
                )} />
            </Switch>
        </Router>
    )
}

export default RoutingLogic;
