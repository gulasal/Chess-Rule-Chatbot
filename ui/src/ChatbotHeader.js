import React from "react";
import { Avatar, Row, Text } from "@nextui-org/react";
import Image from "./assets/Avatar.jpeg";

const chatbotHeaderStyle = {
  width: "100%",
  height: "5rem",
  backgroundColor: "#290E44",
  margin: "0",
  padding: "0",
  borderRadius: "15px 15px 0 0",
  "@media(max-width: 768px)": {
    width: "100%",
  },
};

const textStyle = {
  fontFamily: "'Space Grotesk', sans-serif",
  marginLeft: "3rem",
  position: "absolute",
  top: "50%",
  msTransform: "translateY(-50%)",
  transform: "translateY(-50%)",
};

function ChatbotHeader() {
  return (
    <Row css={chatbotHeaderStyle}>
      <Row css={{ display: "flex", margin: "1rem", position: "relative" }}>
        <Avatar squared src={Image} />
        <Text h6 color="white" css={textStyle}>
          Chess Rule Chatbot
        </Text>
      </Row>
    </Row>
  );
}

export default ChatbotHeader;
