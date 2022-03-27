import React from "react";
import Pdf from "../../assets/resume2.pdf";
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
            <p className="mt-3">Front-End Proficiencies:</p>
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Bulma</li>
            </ul>
            <p className="mt-3">Back-End Proficiencies:</p>
            <ul>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>REST API's</li>
              <li>MongoDB, Mongoose</li>
              <li>MySQL, Sequelize</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
