import React from 'react'

function MainGame() {
    return (
        <div style={{ color: "white" }}>
            Main Game

            <div className="game">
                <div className="playground">
                    <div className="paddle-hand right"></div>
                    <div className="paddle-hand left"></div>
                    <div className="paddleA" ></div>
                    <div className="paddleB" ></div>
                    <div className="ball"></div>
                </div>
                <div className="scoreboard">
                    <div className="score"> A : <span id="score-a">0</span></div>
                    <div className="score"> B : <span id="score-b">0</span></div>
                </div>
            </div>

        </div>
    )
}

export default MainGame
