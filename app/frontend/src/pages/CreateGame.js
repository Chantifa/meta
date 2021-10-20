import {React, useState} from 'react';
import '../styles/CreateGame.css';

function CreateGame() {

    const [gameName, setGameName] = useState("");

    return (
        <div style={{ color: "white" }}>
            Create Game

            
            <form>
                <label>Game Name: </label>
                <input type="text" name="gamename" value={gameName} onChange={(e) => setGameName(e.target.value)}  />
                <div>
                    <button className="diffBtn">easy</button>
                    <button className="diffBtn">medium</button>
                    <button className="diffBtn">hard</button>
               </div>
               <br />
               <div>
                    <button className="createGameBtn">create game</button>
                    <button className="cancelBtn">cancel</button>
               </div>
            </form>
        </div>
    )
}

export default CreateGame;
