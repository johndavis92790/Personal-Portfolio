import React, { useState } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope } from "react-icons/fa";

import { validateEmail } from "../../utils/helpers";
import emailjs from '@emailjs/browser';

//contact page, form does not do anything with the information yet
function Contact() {
  const [formState, setFormState] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { from_name, reply_to, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }

    emailjs.send('service_dgn1h1v', 'template_sjfdcwy', formState, '0r7oVBNyL-i10sXda')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });

  };

  const handleChange = (e) => {
    console.log("Target", e.target);
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("This email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <Container fluid="md" className="my-5">
      <Row>
        <Col sm={4}>
          <h1 className="mb-3">Contact me</h1>
          <h3 className="mb-4">John Davis, Web Developer</h3>

          <h5 className="icons mb-3">
            <FaPhone size={40} className="icons" />
            &nbsp;&nbsp;&nbsp;801-633-6013
          </h5>

          <h5 className="icons">
            <FaEnvelope size={40} className="icons" />
            &nbsp;&nbsp;&nbsp;johndavis92790@gmail.com
          </h5>
        </Col>
        <Col sm={4}>
          <Form id="contact-form" className="m-4" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="from_name"
                defaultValue={from_name}
                onBlur={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="reply_to"
                defaultValue={reply_to}
                onBlur={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                placeholder="Message"
                name="message"
                rows="3"
                defaultValue={message}
                onBlur={handleChange}
              />
            </Form.Group>
            {errorMessage && (
              <div>
                <p>{errorMessage}</p>
              </div>
            )}
            <Button
              className="button-color mb-5"
              data-testid="button"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
