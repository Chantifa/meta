import React from 'react';
import { useHistory } from "react-router-dom";
import '../styles/CreateGame.css';

function CreateGame(props) {

    // es muss hier eine gameID generiert werden, die auch zum Pfad angefügt wird
    // zB game1 mit der ID 12345 -> /dashboard/12345
    // game difficulty -> as state in einem späteren Zeitpunkt

    const history = useHistory();

    const handleCancel = () => {
        let path = '/dashboard';
        history.push(path);
    }

    const handleSubmit = () => {
        let path = '/maingame'
        history.push(path);
    }

    return (
        <div style={{ color: "white" }}>
            Create Game

            <form>

                <label>Game Name: </label>
                <input type="text" name="gamename" value={props.gameName} onChange={(e) => props.setGameName(e.target.value)} required />
                <div>
                    <button className="diffBtn">easy</button>
                    <button className="diffBtn">medium</button>
                    <button className="diffBtn">hard</button>
                </div>
                <br />
                <div>
                    <button className="createGameBtn" onClick={handleSubmit}>create game</button>
                    <button className="cancelBtn" onClick={handleCancel}>cancel</button>
                </div>
            </form>
        </div>
    )
}

export default CreateGame;
