import { React, useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/LogRegStyle.css';
import illVirus from '../images/illVirus.png';
import axios from 'axios';

const Login = (props) => {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [passwordIsCorrect, setPasswordIsCorrect] = useState(false);
        const [playerA, setPlayerA] = useState("");

        const getAllValues = useCallback(async () => {
            const userData = await axios.get("/api/users/login");
            setEmail(userData.rows.map(row => row.email));
            setPassword(userData.rows.map(row => row.password));
            setPasswordIsCorrect(userData.rows.map(row => row.passwordIsCorrect));
            setPlayerA(userData.rows.map(row => row.playerA))
        }, []);

        const loginuser = useCallback(
            async e => {
                e.preventDefault();
                await axios.post("/api/users/login", {
                    email,
                    password
                });
                setEmail("");
                setPassword("");
                getAllValues();
            },

            [
                email,
                password,
                getAllValues
            ]
        );

        useEffect(() => {
            getAllValues();
            // eslint-disable-next-line
        }, []);

        const data = { email, password };
        console.log(data);

        return (
            <div>
                <h1 className="titleLogin">Login</h1>
                <img src={illVirus} alt="loginImage" />
                <form onSubmit={loginuser}>
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
                        {passwordIsCorrect && playerA && <Link to="/Dashboard" className="buttonNext" >Click here to log into the game</Link>}
                    </div>
                    <br />

                    {!passwordIsCorrect && <Link to="/register" className="registerBtn">Register</Link>}
                </form>
            </div>
        )
    }

export default Login;
