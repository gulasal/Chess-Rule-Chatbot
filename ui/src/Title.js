import React from "react";
import { Row, Text } from "@nextui-org/react";

const titleStyle = {
  width: "60rem",
  height: "14rem",
  backgroundColor: "#00254D",
  borderRadius: "10px",
  opacity: 0.8,
  fontFamily: "'Space Grotesk', sans-serif",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",

  "@media(max-width: 768px)": {
    display: "none",
  },
};

function Title() {
  return (
    <Row css={titleStyle} justify="center">
      <Row justify="center" align="center">
        <Text
          h1
          size={30}
          css={{
            color: "white",
            fontFamily: "'Space Grotesk', sans-serif",
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
            "@media (max-width: 767px)": {},
            "@media (max-width: 500px)": {},
          }}
        >
          Internet Technology Project
        </Text>
      </Row>
      <Row justify="center" align="center">
        <Text
          h5
          color="#ff4ecd"
          css={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Croup Name: AGIM
        </Text>
      </Row>
      <Row
        justify="center"
        css={{
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
        }}
      >
        <Text color="#C3F4FD" size="$sm">
          Gulasal Kuchkarova
        </Text>
        <Text color="#C3F4FD" size="$sm">
          Michael Mutote
        </Text>
        <Text color="#C3F4FD" size="$sm">
          Ibrahim Hassib Mwazewe
        </Text>
        <Text color="#C3F4FD" size="$sm">
          Arnold Gueguim Zangue
        </Text>
      </Row>
    </Row>
  );
}

export default Title;
