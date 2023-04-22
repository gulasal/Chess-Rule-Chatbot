import { Button, Row } from "@nextui-org/react";
import "./ChatbotFooter.css";

const chatbotFooterStyle = {
  width: "100%",
  height: "4rem",
  backgroundColor: "#290E44",
  margin: "0",
  padding: "0",
  borderRadius: "0 0 15px 15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media(max-width: 768px)": {
    width: "100%",
  },
};

const ChatbotFooter = (props) => {
  // const ChatbotFooter = ({ addMessage }) => {
  //   const [inputValue, setInputValue] = useState("");

  //   const handleInputChange = (event) => {
  //     setInputValue(event.target.value);
  //   };

  //   const handleSendClick = () => {
  //     addMessage(inputValue);
  //     setInputValue("");
  //   };
  // };
  return (
    <Row css={chatbotFooterStyle}>
      <input
        className="messageInput"
        type="text"
        id="message"
        name="message"
        placeholder="Enter your message"
        style={{}}
        value={props.inputValue}
        onChange={props.handleInputChange}
      />
      <Button
        color="success"
        size="xs"
        css={{
          width: "3rem",
          height: "4rem",
          borderRadius: " 0 0 15px 0 ",
          "@media(max-width: 768px)": { width: "20%" },
        }}
        onClick={props.handleSendClick}
      >
        Send
      </Button>
    </Row>
  );
};

export default ChatbotFooter;
