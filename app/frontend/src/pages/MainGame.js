import {React, useState} from 'react';
import '../styles/MainGameStyle.css';

function MainGame(props) {

    const [scoreA, setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);

    return (
        <div>
            <div style={{color: "white"}}>Game: {props.gameName}</div>
            <div className="game"> 
                <div className="playground">
                    <div className="paddle-hand-right"></div>
                    <div className="paddle-hand-left"></div>
                    <div className="paddleA"></div>
                    <div className="paddleB"></div>
                    <div className="ball"></div>
                </div>
            </div>
            <div className="scoreboard">
                <div className="score"> A : {scoreA}</div>
                <div className="score"> B : {scoreB}</div>
            </div>

        </div>
    )
}

export default MainGame
