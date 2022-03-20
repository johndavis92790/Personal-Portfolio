import React from "react";
import Project from "../Project";
import { Container } from "react-bootstrap";

function Portfolio() {
  return (
    <Container fluid="md">
      <section>
        <h1 id="portfolio">Portfolio</h1>
        <div>
          <Project></Project>
        </div>
      </section>
    </Container>
  );
}

export default Portfolio;
