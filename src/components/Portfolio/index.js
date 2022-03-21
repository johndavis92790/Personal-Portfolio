import React from "react";
import Project from "../Project";
import { Container } from "react-bootstrap";

function Portfolio() {
  return (
    <Container fluid="md">
      <h1 id="portfolio" className="mt-5">
        Portfolio
      </h1>
      <Project></Project>
    </Container>
  );
}

export default Portfolio;
