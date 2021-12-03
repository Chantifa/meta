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
          <h1 style={{color:"white"}}>About this game</h1>
          <FormContent>
            <BlackContainer>
              <Text>
                bla bla bla bla
                <br />
                Have fun playing the game! :)
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
