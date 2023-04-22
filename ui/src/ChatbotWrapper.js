import ChatbotHeader from "./ChatbotHeader";
import ChatbotBody from "./ChatbotBody";
import { Row } from "@nextui-org/react";
import ChatbotFooter from "./ChatbotFooter";
import React, { useState } from "react";

const chatbotWrapperStyles = {
  width: "30rem",
  height: "34rem",
  backgroundColor: "#EADCF8",
  borderRadius: "15px",
  marginTop: "1rem",
  marginBottom: "0.5rem",
  padding: "0",
  display: "flex",
  flexDirection: "column",

  "@media(max-width: 768px)": {
    width: "100%",
    height: "100%",
  },
};
function ChatbotWrapper() {
  const [messages, setMessages] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleNewUserMessage = (newMessage) => {
    // Add user message to messages state
    setMessages((prevState) => [
      ...prevState,
      { text: newMessage, sender: "user" },
    ]);

    // If user says "hi", respond with a greeting and a question
    if (newMessage.toLowerCase() === "hi") {
      setMessages((prevState) => [
        ...prevState,
        { text: "Hi! How can I assist you today?", sender: "bot" },
      ]);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendClick = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
    }
  };
  return (
    <Row css={chatbotWrapperStyles}>
      <ChatbotHeader />
      <ChatbotBody messages={messages} />
      <ChatbotFooter
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleSendClick={handleSendClick}
        onSendClick={handleNewUserMessage}
      />
    </Row>
  );
}

export default ChatbotWrapper;
