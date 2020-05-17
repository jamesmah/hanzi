import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GlobalHeader from "../../components/GlobalHeader";

const Home = () => (
  <>
    <GlobalHeader />
    <Container fluid>
      <Body>
        <Link to="/radicals">
          <Button variant="primary">Radicals</Button>
        </Link>
      </Body>
    </Container>
  </>
);

const Body = styled.div`
  text-align: center;
`;

export default Home;
