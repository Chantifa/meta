import {React, useState} from 'react';
import { Link } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordIsCorrect, setPasswordIsCorrect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { email, password };
        console.log(data);

        fetch('http://localhost:3001/users/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then((response) => {
            setPasswordIsCorrect(response.passwordIsCorrect);
        })
    }

    return (
        <div>
            <h1>Coronattack Login</h1>
            {passwordIsCorrect && <h1>pass is correct</h1>}
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
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
