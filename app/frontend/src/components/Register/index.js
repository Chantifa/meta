import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./RegisterElements.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Register() {
  const [nickname, setnickname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [password2, setpassword2] = useState("");
  const [accountExists, setAccountExists] = useState(false);
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { nickname, email, password, password2 };
    console.log(data);

    fetch(`http://localhost:3001/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        setAccountExists(response.emailExists);
        setRegistered(response.registered);

        if(response.emailExists){
          setnickname("");
          setemail("");
          setpassword("");
          setpassword2("");
        }
      });
  };

  return (
    <div>
      <Navbar />
      <h1 className="titleLogin">Register</h1>
      {accountExists && (
        <h1 style={{ color: "red" }}>
          This E-Mail adress is already registered
        </h1>
      )}
      {!registered && (
        <form onSubmit={handleSubmit} className="regForm">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={nickname}
              onChange={(e) => setnickname(e.target.value)}
              className="regInput"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="regInput"
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
              className="regInput"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password2"
              name="password2"
              placeholder="Confirm Password"
              value={password2}
              onChange={(e) => setpassword2(e.target.value)}
              className="regInput"
              required
            />
          </div>
          <div>
            <input type="submit" value="Register" className="buttonNext" />
          </div>
        </form>
      )}

      {registered && (
        <div className="buttonLogIn">
          <Link to="/login" className="buttonLogInAlign">
            Click here to log into the game
          </Link>
          
        </div>
      )}
      {!registered && (
        <Link to="/login">
          <button className="registerBtn">
            Already registered? Login here
          </button>
        </Link>
      )}
      <Footer />
    </div>
  );
}

export default Register;
