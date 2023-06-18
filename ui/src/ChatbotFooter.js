import { Button, Row } from "@nextui-org/react";
import * as S from "./style";
import { useState } from "react";

const ChatbotFooter = ({ handleInput }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendClick = () => {
    handleInput(inputValue);
    setInputValue("");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendClick();
    }
  };
  return (
    <Row css={S.chatbotFooterStyle}>
      <input
        style={S.FooterInputStyle}
        type="text"
        id="message"
        name="message"
        placeholder="Enter your message"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <Button
        color="success"
        size="xs"
        css={S.buttonStyles}
        onClick={handleSendClick}
      >
        Send
      </Button>
    </Row>
  );
};

export default ChatbotFooter;
