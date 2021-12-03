import React, { useState } from "react";
import Sidebar from "../Sidebar";
import SilentNavbar from "../SilentNavbar/index.js";
import Footer from "../Footer";

import {
  Container,
  FormWrap,
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
          <h1 style={{ color: "white" }}>About this game</h1>
          <FormContent>
            <BlackContainer>
              <Text>
                We are two computer science students at the FFHS (Fern
                Fachhochschule Schweiz) in the 7th semester, in which we
                complete the "web engineering" module. In this module we should
                develop a multiplayer game with a chat function. We decided on
                the game "Meta", which is based on a ping-pong game.
                <br />
                The name "Meta" was inspired from the new name of the facebook
                combany "Metaverse", which comes from the Greek prefix and
                preposition meta, which means "after" or "beyond. That's why we
                focused on also developing a modern site.
                <br />
                It is a dual player game and can be played on different levels
                of difficulty (ball of different speeds).
                <br />
                Meta is one of the first “Pong” computer games ever to be
                developed.
                <br />
                This simple "tennis-like" game features two rackets and a ball.
                <br />
                The goal is to defeat your opponent by being the first to win 10
                points. A player gets a point as soon as the opponent misses a
                ball. The game can be played with two human players or one
                player against a computer controlled paddle. Have fun playing
                the game!
              </Text>
              <Text>
                <h1>The Rules of the game</h1>
                <h3>
                  Each player has to register first and receives an ID (this is
                  not visible), the UserId for the user is the email address.{" "}
                </h3>
                <br />
                <h3>
                  Before starting a game, you select one of the three
                  difficulties(easy, medium, hard).{" "}
                </h3>
                <br />
                <h3>
                  Once the game starts, you can choose to play either: against
                  the Computer (AI){" "}
                </h3>
                <h4>
                  You play against a fictional opponent on the computer. With a
                  paddle you have to move the ball to the other side play back.
                  Whoever reaches 10 points first wins. You earn points by
                  achieving a goal, hit the edge of the opponents screen.{" "}
                </h4>
                <h4>
                  Game 2 is against real players: The opponents must with the
                  Playing ball in the background. One plays with «up», «down»
                  Another player uses "S" and "W" and the goal is to return the
                  ball to the other side by hitting it with the paddle. The
                  first one who reaches 10 points wins!{" "}
                </h4>
              </Text>
              <br />
              <Text>Have fun playing the game!</Text>
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
