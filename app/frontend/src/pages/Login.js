import { React, useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/LogRegStyle.css';
import illVirus from '../images/illVirus.png';

function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordIsCorrect, setPasswordIsCorrect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { email, password };

        fetch('http://localhost:3001/users/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json",
        'Accept': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.test())
            .then((response) => {
                setPasswordIsCorrect(response.passwordIsCorrect);
                props.setPlayerA(response.username);
            })
    }


    return (
        <div>
            <h1 className="titleLogin">Login</h1>
            <img src={illVirus} alt="loginImage"/>
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
                    {!passwordIsCorrect && <input type="submit" value="Login" className="buttonNext" />}
                </div>
                <div>
                    <br />
                    {passwordIsCorrect && <Link to="/Dashboard" className="buttonNext" >Click here to log into the game</Link>}
                </div>
                <br />

                {!passwordIsCorrect && <Link to="/register" className="registerBtn">Register</Link>}
            </form>
        </div>
    )
}

export default Login;
