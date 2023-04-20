import React from "react";
import ChatbotHeader from "./ChatbotHeader";
import ChatbotBody from "./ChatbotBody";
import { Container } from "@nextui-org/react";

function ChatbotWrapper() {
  return (
    <Container
      css={{
        width: "30rem",
        height: "34rem",
        backgroundColor: "#C8F9DD",
        borderRadius: "10px",
        marginTop: "1rem",
        marginBottom: "0.5rem",
        padding: "0",
      }}
    >
      <ChatbotHeader />
      <ChatbotBody />
    </Container>
  );
}

export default ChatbotWrapper;
