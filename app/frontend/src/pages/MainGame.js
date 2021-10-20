import React from 'react';
import '../styles/MainGameStyle.css';

function MainGame() {
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
                <div className="score"> A : <span id="score-a">0</span></div>
                <div className="score"> B : <span id="score-b">0</span></div>
            </div>

        </div>
    )
}

export default MainGame
