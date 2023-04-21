import React from "react";
import Title from "./Title";
import ChatbotWrapper from "./ChatbotWrapper";
import { Container } from "@nextui-org/react";

function MainWrapper() {
  return (
    <Container
      fluid
      className="MainWrapp"
      css={{
        backgroundColor: "#EDF5FF",
        width: "100vw",
        height: "100vh",
        padding: "1rem",
        margin: "0",
      }}
    >
      <Title />
      <ChatbotWrapper />
    </Container>
  );
}

export default MainWrapper;
