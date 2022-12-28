import React, { useState } from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope } from "react-icons/fa";

import { validateEmail } from "../../utils/helpers";
import emailjs from '@emailjs/browser';
import { SuccessModal } from "./successModal";
import { ErrorModal } from "./errorModal";

//contact page, form does not do anything with the information yet
function Contact() {
  const [formState, setFormState] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const [successModalShow, setSuccessModalShow] = useState(false);
  const [errorModalShow, setErrorModalShow] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const { from_name, reply_to, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      if (e.target[0].value === "" || e.target[1].value === "" || e.target[2].value === "") {
        setErrorModalShow(true);
        return;
      } else {
        emailjs.send('service_dgn1h1v', 'template_sjfdcwy', formState, '0r7oVBNyL-i10sXda')
          .then(() => {
            console.log('CONTACT FORM SUCCESS!');
            setSuccessModalShow(true);
          }, (error) => {
            console.log('CONTACT FORM FAILED', error);
          });
      }
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "reply_to") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("This email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        if (e.target.name === "from_name") {
          setErrorMessage(`Name is required.`);
        } else if (e.target.name === "reply_to") {
          setErrorMessage(`Email is required.`);
        } else {
          setErrorMessage(`Message is required.`);
        }
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  return (
    <>
      <SuccessModal
        show={successModalShow}
        onHide={() => {
          setSuccessModalShow(false);
          window.location.reload(false);
        }}
      />
      <ErrorModal
        show={errorModalShow}
        onHide={() => setErrorModalShow(false)}
      />
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
    </>
  );
}

export default Contact;
