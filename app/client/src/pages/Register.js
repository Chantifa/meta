import { Link } from "react-router-dom";
import '../styles/LogRegStyle.css';
import smileygmtrans from '../images/smileygmtrans.png';
import axios from 'axios';
import {React, useCallback, useState, useEffect } from "react";

const Register = () => {

    const [nickname, setnickname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [password2, setpassword2] = useState("");
    const [accountExists, setAccountExists] = useState(false);

    const getAllValues = useCallback(async () => {
        // we will use nginx to redirect it to the proper URL
        const userData = await axios.get("/api/users/register");
        setValues(userData.data.rows.map(row => [row.nickname, row.email, row.password, row.password2]));
    }, []);

    const saveUser = useCallback(
        async e => {
            e.preventDefault();
            await axios.post("/api/users/register", {
                    nickname,
                    email,
                    password
            });
            
                setnickname("");
                setemail("");
                setpassword("");
                getAllValues();
            },
            [nickname,email, password, getAllValues]
        );
    
        useEffect(() => {
            getAllValues();
            // eslint-disable-next-line
          }, []);
    
        const data = { nickname, email, password, password2 };
        console.log(data);

    return (
        <div>
            <h1 className="titleLogin">Register</h1>
            <div className="imgReg">
                <img src={smileygmtrans} alt="regImg"/>
            </div>
            {accountExists && <h1 style={{color: "red"}}>This E-Mail adress is already registered</h1>}
            <form onSubmit={saveUser}>
                <div>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Name"
                    value={nickname} 
                    onChange={(e) => setnickname(e.target.value)} 
                    required />
                </div>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email} 
                        onChange={(e) => setemail(e.target.value)}
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
                        onChange={(e) => setpassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="password2"
                        name="password2"
                        placeholder="Confirm Password"
                        value={password2} onChange={(e) => setpassword2(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input type="submit" value="Register" className="buttonNext" />
                </div>
                <br />
                <Link to="/login" className="registerBtn">Already registered? Login here</Link>
            </form>
        </div>
  );
};

export default Register;
