import React from "react";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

const GlobalHeader = () => (
  <Container fluid>
    <Header>
      <Heading>汉子</Heading>
    </Header>
  </Container>
);

const Header = styled.header`
  padding: 2rem 0;
  text-align: center;
`;

const Heading = styled.h1`
  color: #61dafb;
`;

export default GlobalHeader;
