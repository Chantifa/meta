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
                        <img className="float-start" src="../../../../img/corona.jpg" alt="corona"/>
                        <img className="float-end" src="../../../../img/vaccination.jpg" alt="vaccination"/>
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
                        <div className="col-sm-8">
                        </div>
                    </div>
                <div className="row">
                    <div className="col-sm-4"/>
                    <div className="col-sm-4 mb-2">
                        1. development of a game using folowing type of web technologies:
                        <li>Runden-basiert, oder</li>
                        <li>Educational oder</li>
                        <li>Datensammler</li>
                    </div>
                    <div className="col-sm-5">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4"/>
                    <div className="col-sm-4 mb-2">
                        <p>2. Das Spiel muss eine Client/Server Architektur haben</p>
                        <p>3. Der Server und die Clients kommunizieren über ein Text-basiertes Protokoll. Das
                            Protokoll muss lesbar sein.</p>
                    </div>
                    <div className="col-sm-5">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4"/>
                    <div className="col-sm-4 mb-2">
                        <p>2. Das Spiel muss eine Client/Server Architektur haben</p>
                        <p>3. Der Server und die Clients kommunizieren über ein Text-basiertes Protokoll. Das
                            Protokoll muss lesbar sein.</p>
                    </div>
                    <div className="col-sm-5">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4"/>
                    <div className="col-sm-4 mb-2">
                        4. Die Server-Funktionalität ist wie folgt definiert:
                        <li>Er verwaltet den Spielverlauf (überprüft und stellt sicher, dass alle Spielzüge
                            regelkonform sind, erkennt das Ende des Spiels, zählt Punkte, etc.)</li>
                        <li>Wenn alles Spieler das Spiel verlassen, dann beendet der Server das Spiel.</li>
                    </div>
                    <div className="col-sm-5">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4"/>
                    <div className="col-sm-4 mb-2">
                        <p>5. Ein Client hat folgende Eigenschaften:</p>
                        <li>Er nimmt Benutzereingaben durch eine grafische Schnittstelle (graphical
                            userinterface, GUI) entgegen</li>
                        <li>Er gleicht den lokalen Status eines Spiels mit dem Status des Servers ab (Synchronisation)</li>
                        <li>Er erlaubt den Spielern eines Spiels zu chatten.</li>
                    </div>
                    <div className="col-sm-5">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4"/>
                    <div className="col-sm-4 mb-2">
                        <p>6. Folgende Aspekte sollen beachtet werden: Internationalisierung, Usability,
                            Accessability, Levels (das Spiel muss mind. 3 Levels haben), Responsiveness</p>
                    </div>
                    <div className="col-sm-5">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4"/>
                    <div className="col-sm-4 mb-2">
                        <p>7. Am Ende des Projekts muss eine komplette Distribution des Spiels abgegeben werden
                            (lauffähiges Spiel inklusive Quellcode, Installationsanleitung, Handbuch)</p>
                    </div>
                    <div className="col-sm-5">
                    </div>
                </div>
            </div>
        )
    }

}

export default About;