import React from 'react';
import {
    Link
} from "react-router-dom";

function Login() {
    return (
        <div>
            <h1>Coronattack Login</h1>
            <form action="/users/login" method="POST">
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>

                <Link to="/register">Register</Link>
            </form>
        </div>
    )
}

export default Login;
