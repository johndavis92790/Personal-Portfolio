import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container fluid="md" className="mt-5">
      <Row className="align-items-center">
        <Col sm={4} className="p-5">
          <Image
            fluid
            roundedCircle
            src={require(`../../assets/small/john3.jpg`)}
            alt="John Davis"
          />
        </Col>
        <Col sm={8} className="p-5 mb-5">
          <h1 id="about">About Me</h1>
          <div>
            <p>
              My love of technology might trace back to my high school Java
              class or the time I built my first computer at age 12. After
              helping my family business achieve its highest revenues ever and
              successfully sell to new ownership, I look forward to joining an
              industry well-suited to my ideas, resourcefulness, and technical
              skills.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
