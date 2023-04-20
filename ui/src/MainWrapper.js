import React from "react";
import Title from "./Title";
import ChatbotWrapper from "./ChatbotWrapper";

function MainWrapper() {
  return (
    <div
      style={{
        backgroundColor: "#EDF5FF",
        width: "100vw",
        height: "100vh",
        padding: "1rem",
        margin: "0",
      }}
    >
      <Title />
      <ChatbotWrapper />
    </div>
  );
}

export default MainWrapper;
