import React from "react";
import Project from "../../components/Project";
import { Container } from "react-bootstrap";

function Portfolio() {
  return (
    // Parent page to my projects componenets
    <Container fluid="md" className="mb-5">
      <h1 id="portfolio" className="mt-5">
        Recent Projects
      </h1>
      <Project></Project>
    </Container>
  );
}

export default Portfolio;
