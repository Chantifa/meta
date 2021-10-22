import { React } from "react";
import {
    Link
} from "react-router-dom";
import '../styles/HomeStyle.css';
import fight from '../images/fight.jpeg';

function Home() {

    const welcomeText = "Coronattack is a funny two player game, in which each player tries either to infect people with a virus, or save them by vaccinating them! Go to the 'About' page to learn more. Press the 'get Started' to begin your journey! ";

    return (
            <div className="manageHomeDivs">
                <h1 className="title">Coronattack</h1>
                <div className="middleHomeDiv">
                    <div className="welcomeTextStyle">{welcomeText}</div>
                    <img src={fight} alt="virus-fight" className="homeImage" />
                </div>
                <Link to="/login" className="loginLink">Get Started</Link>
            </div>
    )
}

export default Home;
