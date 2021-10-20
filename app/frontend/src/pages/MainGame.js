import {React, useState} from 'react';
import '../styles/MainGameStyle.css';

function MainGame() {

    const [scoreA, setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);


    return (
        <div>

            <div className="game">
                <div className="playground">
                    playground
                    <div className="paddle-hand-right">
                        paddlehand right
                    </div>
                    <div className="paddle-hand-left">
                        paddlehand left
                    </div>
                    <div className="paddleA" >
                        paddleA
                    </div>
                    <div className="paddleB" >
                        paddleB
                    </div>
                    <div className="ball">
                        ball
                    </div>
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
