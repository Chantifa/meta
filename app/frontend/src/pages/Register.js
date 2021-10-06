import { React, useState } from 'react';
import { Link } from "react-router-dom";

function Register() {

    const [nickname, setnickname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [password2, setpassword2] = useState("");
    const [accountExists, setAccountExists] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { nickname, email, password, password2 };
        console.log(data);

        fetch('http://localhost:3001/users/register', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then((response) => {
            setAccountExists(response.emailExists);
        })
    }

    return (
        <div>
            <h1>Coronattack Register</h1>
            {accountExists && <h1 style={{color: "red"}}>This E-Mail adress is already registered</h1>}
            <form onSubmit={handleSubmit}>
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
                    <input type="submit" value="Register" />
                </div>

                <Link to="/login">Already registered? Login here</Link>
            </form>
        </div>
    )
}

export default Register;
