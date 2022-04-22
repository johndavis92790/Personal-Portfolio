import React from "react";
import Pdf from "../../assets/resume2.pdf";
import { Container, Row, Col, Image } from "react-bootstrap";

function Resume() {
  return (
    <Container fluid="md" className="my-5">
      <Row>
        <Col sm={4}>
          <h1 id="resume">Resume</h1>
          {/* Link to my resume pdf file within the filesytem */}
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
            </ul>
            <p className="mt-3">Back-End Proficiencies:</p>
            <ul>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>REST API's</li>
              <li>MongoDB, Mongoose</li>
              <li>NoSQL</li>
              <li>MySQL, Sequelize</li>
            </ul>
          </div>
        </Col>
        <Col sm={8}>
          <Row>
            <Col sm={4}>
              <a href="https://www.credly.com/badges/6e081d40-2e89-4b54-b603-e1254e202632/public_url" target="_blank" rel="noreferrer">
                <Image
                  fluid
                  src={require(`../../assets/small/bootcamp.png`)}
                  alt="Boot Camp Certificate"
                />
              </a>
              

              
              
            </Col>
            <Col sm={7}>

              <p className="mt-5">
                Coding Bootcamp Full Stack Developer Certificate
                Issued by the University of Utah - April 2022
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
