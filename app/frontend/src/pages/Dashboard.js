import React from 'react';
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <h1>Game here</h1>
            <h1>Chat here</h1>
            <Link to="/">Logout</Link>
        </div>
    )
}

export default Dashboard
