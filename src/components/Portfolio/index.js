import React from "react";
import Project from "../Project";
import { Container } from "react-bootstrap";

function Portfolio() {
  return (
    <Container fluid="md" className="mb-5">
      <h1 id="portfolio" className="mt-5">
        Recent Projects
      </h1>
      <Project></Project>
    </Container>
  );
}

export default Portfolio;
