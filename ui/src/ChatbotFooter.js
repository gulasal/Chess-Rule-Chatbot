import { Container, Button, Row } from "@nextui-org/react";

const ChatbotFooter = () => {
  return (
    <Container
      css={{
        width: "100%",
        height: "4rem",
        backgroundColor: "#290E44",
        margin: "0",
        padding: "0",
        borderRadius: "0 0 15px 15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row>
        <input
          type="text"
          id="message"
          name="message"
          placeholder="Enter your message"
          style={{
            height: "4rem",
            borderRadius: "0 0 0 15px",
            width: "27rem",
            border: "none",
            paddingLeft: "0.5rem",
          }}
        />
        <Button
          color="success"
          size="xs"
          css={{ width: "3rem", height: "4rem", borderRadius: " 0 0 15px 0 " }}
        >
          Send
        </Button>
      </Row>
    </Container>
  );
};

export default ChatbotFooter;
