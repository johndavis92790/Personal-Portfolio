import React from "react";
import Pdf from "../../assets/pdf/resume.pdf";
import { Container, Row, Col } from "react-bootstrap";

function Resume() {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <h1 id="resume">Resume</h1>
          <a href={Pdf} target="_blank" rel="noreferrer">
            Resume
          </a>
          <div>
            <p>
              Top Languages/Technologies: Javascript, React, Express.js,
              MongoDB, Node.js, HTML, CSS.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
