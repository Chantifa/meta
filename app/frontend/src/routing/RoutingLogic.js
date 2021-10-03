import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from '../pages/Home.js';
import Login from '../pages/Login.js';
import Register from '../pages/Register.js';
import Dashboard from '../pages/Dashboard.js';

function RoutingLogic() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    )
}

export default RoutingLogic;
