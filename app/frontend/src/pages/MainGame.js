import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import '../styles/MainGameStyle.css';

function MainGame(props) {

    //object to send through websockets - gameState

    const [gameState, setGameState] = useState( {
        scoreA: 0,
        scoreB: 0,
        ball: {
            speed: 50,
            x: 150,
            y: 100,
            directionX: 1,
            directionY: 1
        }
        //paddle A&B & playground here?
    } )

    // eslint-disable-next-line
    const [scoreA, setScoreA] = useState(0);
    // eslint-disable-next-line
    const [scoreB, setScoreB] = useState(0);

    // eslint-disable-next-line
    const [x, setX] = useState(0);
    const [y, setY] = useState(10);

    const Playground = styled.section`
        background-color: rgb(10, 46, 34);
        position: relative;
        width: 64rem;
        height: 32rem;
    `;
    const PaddleA = styled.div`
        background-color: rgb(0, 0, 0);
        top: 0;
        left: 0;
        position: absolute;
        width: 2rem;
        height: 4rem;
        left: ${({ x }) => x + 'rem'};
        top: ${({ y }) =>  y + 'rem'};
    `;

    /** 
     * 
      
      top: ${({ y }) => (y > 0 && y <= 28) && y + 'rem'}`;

     * 
     **/

    const PaddleHandLeft = styled.div`
    
        background-color: red;
        background-size: contain;
        width          : 1.875rem;
        height         : 32rem;
        position       : absolute;
        top            : 0;
        left: 3.125rem;
    
    `

    function increment(y) {
        return y + 1;
    }
    function decrement(y) {
        return y - 1;
    }

    /*const actionXMap = {
        ArrowLeft: decrement,
        ArrowRight: increment
    }*/

    const actionYMap = {
        ArrowDown: increment,
        ArrowUp: decrement
    }

    function handleKeyPress(e) {
        //const actionX = actionXMap[e.key];
        const actionY = actionYMap[e.key];
        //actionX && setX(actionX);
        actionY && setY(actionY);     
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
    }, 
    // eslint-disable-next-line
    [])

    return (
        <div>
            <div style={{ color: "white" }}>Game: {props.gameName}</div>
            <div style={{ color: "white" }}>PlayerA: {props.playerA}</div>
            <div className="game">
                <Playground>
                    <div className="paddle-hand-right"></div>
                    <PaddleHandLeft> 
                        <PaddleA x={x} y={y} />
                    </PaddleHandLeft>
                    <div className="paddleB"></div>
                    <div className="ball"></div>
                </Playground>
            </div>
            <div className="scoreboard">
                <div className="score"> A : {scoreA}</div>
                <div className="score"> B : {scoreB}</div>
            </div>

        </div>
    )
}

export default MainGame