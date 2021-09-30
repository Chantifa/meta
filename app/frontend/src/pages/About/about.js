import React, { Component } from 'react';
import './style.css';


export class About extends Component {
    render() {
        return (
            <div className="container about ">
                <div className="row">
                    <div className="col-sm-1"/>
                    <div className="col-sm-9 mb-2">
                        <h1>Coronattack</h1>
                        <img className="float-start" src={require("../../img/corona.png")} alt="corona"/>
                        <img className="float-end" src={require("../../img/vaccination.png")} alt="vaccination"/>
                    </div>
                    <div className="col-sm-8">
                    </div>
                </div>
                    <div className="row">
                        <div className="col-sm-2"/>
                        <div className="col-sm-8 mb-2">
                            <b> Hi, we are Theo and Chantale</b>
                            <p>We are 2 computer science students of the FFHS. We programmed the game <b>"Coronattack"</b> within the module WebE (Web Development).
                                for this the following goals:</p>
                        </div>
                        <div className="col-sm-9">
                        </div>
                    </div>
                <div className="row">
                    <div className="col-sm-3"/>
                    <div className="col-sm-8 mb-2">
                        1. development of a game using following type of web technologies:
                        <li>round_based, or</li>
                        <li>educational or</li>
                        <li>data collector</li>
                    </div>
                    <div className="col-sm-9">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3"/>
                    <div className="col-sm-8 mb-2">
                        <p>2. The game mus have a client server architecture</p>
                        <p>3. The server and the client need to communicate over a text based protocol and the protocol needs to be readable</p>
                    </div>
                    <div className="col-sm98">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3"/>
                    <div className="col-sm-8 mb-2">
                        4. The server functionality must be defined within following criteria.
                        <li>the server checks the status during game and at the end there is a scoring scale</li>
                        <li>If all players leave the game, the server quits the game.</li>
                    </div>
                    <div className="col-sm-9">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3"/>
                    <div className="col-sm-8 mb-2">
                        <p>5. A client has following features:</p>
                        <li>It takes the user input over a graphical userinterface, GUI</li>
                        <li>it compares the local status of the game with the status of the server (sync)</li>
                        <li>it allows gamers to chat with each other.</li>
                    </div>
                    <div className="col-sm-9">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3"/>
                    <div className="col-sm-8 mb-2">
                        <p>6. Following aspects need to be respected: internationalizing, usability, accessibility, levels (game need to have minimum 3 levels), responsiveness</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3"/>
                    <div className="col-sm-8 mb-2">
                        <p>7. At the end of the project, there has to to be a complete distributiv game. (running game inclusive source code, installation manuel, manuel)</p>
                    </div>
                    <div className="col-sm-9">
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
