import React from "react";
import { Container, Row } from "@nextui-org/react";

function ChatbotBody(messages) {
  return (
    <Container
      fluid
      className="ChatBody"
      style={{
        width: "100%",
        height: "25rem",
        overflow: "hidden",
        display: "flex",
        flexDdirection: "column",
        padding: "1% 1.5rem",
        "@xs": "",
      }}
    >
      <Row className="Wrapper">
        <span>hi</span>
      </Row>
      <Row className="MessageWrapper hide">hi</Row>
    </Container>
  );
}

export default ChatbotBody;
