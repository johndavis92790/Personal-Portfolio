import React from "react";
import { Container, Navbar } from "react-bootstrap";

import { FaGithub, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <Container>
      <Navbar fixed="bottom" expand="lg">
        <Container>
          <Navbar.Brand className="m-auto" id="footer">
            <a
              className="m-3 icons"
              href="https://github.com/johndavis92790"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={50} />
            </a>
            <a
              className="m-3 icons"
              href="https://www.linkedin.com/in/john-w-davis-3b518482/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={50} />
            </a>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
    // <section>
    //   <h1 id="footer">Footer</h1>
    //   <div>
    //     {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" />
    //     <FontAwesomeIcon icon="fa-brands fa-github" /> */}
    //   </div>
    // </section>
  );
}

export default Footer;
