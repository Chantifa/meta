import React, { useState } from "react";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import SilentNavbar from "../SilentNavbar/index.js";
import {
  Container,
  FormWrap,
  FormContent,
  BlackContainer,
  Text,
  BackButton,
  Img,
} from "./HowToPlayElements.js";

function HowToPlay() {
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
          <h1 style={{ color: "white", margin: 20 }}>
            Meta Ping Pong Tutorial
          </h1>
          <FormContent>
            <BlackContainer>
              <Text>
                Welcome to the Tutorial of the the Meta Ping Pong game!
              </Text>
              <br />
              <Text>
                First of all, thank you for choosing our ping pong game! Let's
                navigate together through the entire app and help you learn the
                basics.
              </Text>
              <br />
              <Text>
                The first thing you see when you enter the app is the welcome
                page. You can either press any button you see, scroll down and
                up to other sections or choose the menu buttons.
              </Text>
              <br />
              <Img
                src={require("../../images/main.png").default}
                alt="main page"
              />
              <br />
              <Text>
                A function that is available to our page is a live chat. You can
                join the chatroom, type your name, your message and start
                chatting live with anyone else, who will join the application
                and this general chat! Try it out!
              </Text>
              <br />
              <Img
                src={require("../../images/chat.png").default}
                alt="main page"
              />
              <br />
              <Text>
                If you want to learn more about us, visit the about page.
              </Text>
              <br />
              <Text>
                If you are ready to play some ping pong, then you can select the
                get ready from the main menu and you will see the login screen.
                If you already have an account, then you can sign in, otherwise
                please select the red "register" button.
              </Text>
              <br />
              <Img
                src={require("../../images/login.png").default}
                alt="main page"
              />
              <br />
              <Text>
                Once you register, go to the login page again and log in with
                your credentials.
              </Text>
              <br />
              <Img
                src={require("../../images/registerTut.png").default}
                alt="main page"
              />
              <br />
              <Text>
                Now you can select the difficulty that you want for the game.
                The harder the game is, the faster the ball moves around the
                playground.
              </Text>
              <br />
              <Img
                src={require("../../images/diff.png").default}
                alt="main page"
              />
              <br />
              <Text>
                Now before we move into the game, let's recap the rules, which I
                am sure you have already read in the about section. Jeder
                Spieler muss sich zuerst registrieren und erhält dabei eine ID
                (diese ist nicht sichtbar), die UserId für den Benutzer ist die
                E-Mail-Adresse. Vor dem muss ein Spiel eröffnet werden und dabei
                muss zwischen den 3 Schwierigkeitsgraden (Easy, Middle, Heavy)
                gewählt werden. Das Spiel wurde nun eröffnet. 2 Spieloptionen:
                Spiel 1 gegen Computer: Dabei spielt man gegen eine fiktiven
                Spielgegner der Computer. Mit einem Paddle muss man den Ball auf
                die andere Seite zurückspielen. Wer zuerst 10 Punkte erreicht
                und 10 Bälle in den Hintergrund getroffen hat, hat gewonnen.
                Spiel 2 gegen Spielgegner: Dabei müssen die Spielgegner mit dem
                Ball in den Hintergrund spielen. Einer Spielt mit «up», «down»
                Ein anderer Spieler benutzt «S» und «W» Mit einem Paddle muss
                man den Ball auf die andere Seite zurückspielen. Wer zuerst 10
                Punkte erreicht und 10 Bälle in den Hintergrund getroffen hat,
                hat gewonnen.
              </Text>
              <br />
              <Text>
                When you select the difficulty and press next the game field
                will appear. Now you have either the option to play against the
                computer or a reaf player. If you play against the computer and
                you think that he is really good, you can press the "up" button
                to slow him down. It's ok to cheat a little, right? If you play
                against another player, the left player plays with the "w" and
                "s" and the other one with the arrows. The first one who will
                reach 10 goals wins! You can see the score at the top side of
                the board. If you want to go back to the main menu, then you can
                press the button at the bottom of the screen. The gamestyle
                appeas at the bottom of the screen aswell (if it's currently
                against the PC or against another player).
              </Text>
              <br />
              <Img
                src={require("../../images/game1.png").default}
                alt="main page"
              />
              <br />
              <Img
                src={require("../../images/gam2.png").default}
                alt="main page"
              />
              <br />
              <Text>Well, that's it. Have un playing the game!</Text>
              <br />
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

export default HowToPlay;
