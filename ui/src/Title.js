import React from "react";
import { Container, Col, Row, Text } from "@nextui-org/react";

function Title() {
  return (
    <Container
      fluid
      css={{
        width: "60rem",
        height: "14rem",
        backgroundColor: "#00254D",
        borderRadius: "10px",
        opacity: 0.8,
        fontFamily: "'Space Grotesk', sans-serif",
        "@md": {},
      }}
    >
      <Row justify="center">
        <Text
          h6
          size={60}
          css={{
            color: "white",
            fontFamily: "'Space Grotesk', sans-serif",
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
        >
          Internet Technology Project
        </Text>
      </Row>
      <Row justify="center">
        <Col css={{ display: "flex", justifyContent: "center" }}>
          <Text
            h6
            color="#ff4ecd"
            css={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Croup Name: AGIM
          </Text>
        </Col>
      </Row>
      <Row
        justify="center"
        css={{
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
        }}
      >
        <Text color="#C3F4FD" size="$xs">
          Gulasal Kuchkarova
        </Text>
        <Text color="#C3F4FD" size="$xs">
          Michael Mutote
        </Text>
        <Text color="#C3F4FD" size="$xs">
          Ibrahim Hassib Mwazewe
        </Text>
        <Text color="#C3F4FD" size="$xs">
          Arnold Gueguim Zangue
        </Text>
      </Row>
    </Container>
  );
}

export default Title;
