import React from "react";
import Pdf from "https://www.davisdeveloper.com/resume.pdf";
import { Container, Row, Col } from "react-bootstrap";

function Resume() {
  return (
    <Container fluid="md" className="mt-5">
      <Row>
        <Col>
          <h1 id="resume">Resume</h1>
          <a href={Pdf} target="_blank" rel="noreferrer">
            <p className="mt-3">View my resume</p>
          </a>
          <div>
            <p className="mt-3">
              Top Languages/Technologies:
            </p>
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Node.js</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
