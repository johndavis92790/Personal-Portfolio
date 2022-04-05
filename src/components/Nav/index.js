import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/about">
          <span style={{ cursor: "pointer" }} className="navTextName mx-3">
            John Davis
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              <span className="navText mx-3">About Me</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              <span className="navText mx-3">Contact</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio">
              <span className="navText mx-3">Portfolio</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/resume">
              <span className="navText mx-3">Resume</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
