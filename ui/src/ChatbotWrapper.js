import ChatbotHeader from "./ChatbotHeader";
import ChatbotBody from "./ChatbotBody";
import { Container } from "@nextui-org/react";
import ChatbotFooter from "./ChatbotFooter";

function ChatbotWrapper() {
  return (
    <Container
      fluid
      css={{
        width: "30rem",
        height: "34rem",
        backgroundColor: "#EADCF8",
        borderRadius: "15px",
        marginTop: "1rem",
        marginBottom: "0.5rem",
        padding: "0",
        "@xs": { marginTtop: "17%" },
      }}
    >
      <ChatbotHeader />
      <ChatbotBody />
      <ChatbotFooter />
    </Container>
  );
}

export default ChatbotWrapper;
