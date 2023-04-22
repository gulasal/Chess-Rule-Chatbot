import React from "react";
import { Row } from "@nextui-org/react";

const chatbotBodyStyles = {
  width: "100%",
  height: "25rem",
  overflow: "hidden",
  display: "flex",
  flexDdirection: "column",
  padding: "1% 1.5rem",

  "@media (max-width: 768px)": {
    width: "100%",
    height: "calc(100vh - 9rem)",
  },
};

function ChatbotBody({ messages }) {
  return (
    <Row css={chatbotBodyStyles}>
      {messages && messages.length > 0 ? (
        messages.map((message, index) => (
          <Row
            className={`MessageWrapper ${
              message.sender === "user" ? "user" : "bot"
            }`}
            key={index}
            style={{
              alignSelf: message.sender === "user" ? "flex-end" : "flex-start",
            }}
          >
            <span>{message.text}</span>
          </Row>
        ))
      ) : (
        <Row className="Wrapper">
          <span>No messages yet</span>
        </Row>
      )}
    </Row>
  );
}

export default ChatbotBody;
