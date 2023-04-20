import React from "react";
import { Avatar, Col, Row, Text } from "@nextui-org/react";
import Image from "./assets/Avatar.jpeg";

function ChatbotHeader() {
  return (
    <Row
      gap={1}
      style={{
        width: "100%",
        height: "5rem",
        backgroundColor: "#06371B",
        margin: "0",
        padding: "0",
        borderRadius: "15px 15px 0 0",
      }}
    >
      <Col css={{ display: "flex", margin: "1rem", position: "relative" }}>
        <Avatar squared src={Image} />
        <Text
          h6
          color="white"
          css={{
            fontFamily: "'Space Grotesk', sans-serif",
            marginLeft: "3rem",
            position: "absolute",
            top: "50%",
            msTransform: "translateY(-50%)",
            transform: "translateY(-50%)",
          }}
        >
          Chess Rule Chatbot
        </Text>
      </Col>
    </Row>
  );
}

export default ChatbotHeader;
