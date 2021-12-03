import React, { useState } from "react";
import Sidebar from "../Sidebar";
import SilentNavbar from "../SilentNavbar/index.js";
import Footer from "../Footer";

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  BlackContainer,
  Text,
  BackButton,
} from "./AboutElements.js";

function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("ISOPEN---> ", isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SilentNavbar toggle={toggle} />
      <Container>
        <FormWrap>
          <Icon>About this game</Icon>
          <FormContent>
            <BlackContainer>
              <Text>
              <div className="pagecenter about">
              <p>Hi, we are Theo and Chantale</p>
                <p>Wir sind 2 Informatik Studenten der FFHS und haben das Spiel im Rahmen des Modules WebE (Web Entwicklung) programmiert
                dazu mussten folgende Ziele in 4 Meilensteine Erreicht werden:</p>
                <div>
                    1. Entwicklung eins Spiels mittels Web-Technologien vom folgenden Typ
                    <li>a. Runden-basiert, oder</li>
                    <li>b. Educational oder</li>
                    <li>c. Datensammler</li>
                </div>
                 <div>
                <li>    2. Das Spiel muss eine Client/Server Architektur haben</li>
                <li>    3. Der Server und die Clients kommunizieren über ein Text-basiertes Protokoll. Das
                    Protokoll muss lesbar sein.</li>
                 </div>
                <div>
                4. Die Server-Funktionalität ist wie folgt definiert:
                    <li>a. Er verwaltet den Spielverlauf (überprüft und stellt sicher, dass alle Spielzüge
                    regelkonform sind, erkennt das Ende des Spiels, zählt Punkte, etc.)</li>
                    <li>b. Wenn alles Spieler das Spiel verlassen, dann beendet der Server das Spiel.</li>
                </div>
                <div>
                5. Ein Client hat folgende Eigenschaften:
                    <li>a. Er nimmt Benutzereingaben durch eine grafische Schnittstelle (graphical
                    userinterface, GUI) entgegen</li>
                    <li>b. Er gleicht den lokalen Status eines Spiels mit dem Status des Servers ab (Synchronisation)</li>
                    <li>c. Er erlaubt den Spielern eines Spiels zu chatten.</li>
                </div>
                <li>    6. Folgende Aspekte sollen beachtet werden: Internationalisierung, Usability,
                    Accessability, Levels (das Spiel muss mind. 3 Levels haben), Responsiveness</li>
                <li>    7. Am Ende des Projekts muss eine komplette Distribution des Spiels abgegeben werden
                    (lauffähiges Spiel inklusive Quellcode, Installationsanleitung, Handbuch)</li>
            </div>

              </Text>
              Î
            </BlackContainer>
          </FormContent>
        </FormWrap>
        <br />
        <BackButton to="/"> Back </BackButton>
      </Container>
      <Footer />
    </>
  );
}

export default About;
