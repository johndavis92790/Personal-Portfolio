import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation(props) {
  const { setNavSelection } = props;

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <span
            style={{ cursor: "pointer" }}
            className="navTextName mx-3"
            onClick={() => setNavSelection("about")}
          >
            John Davis
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <span
                className="navText mx-3"
                onClick={() => setNavSelection("about")}
              >
                About Me
              </span>
            </Nav.Link>
            <Nav.Link>
              <span
                className="navText mx-3"
                onClick={() => setNavSelection("contact")}
              >
                Contact
              </span>
            </Nav.Link>
            <Nav.Link>
              <span
                className="navText mx-3"
                onClick={() => setNavSelection("portfolio")}
              >
                Portfolio
              </span>
            </Nav.Link>
            <Nav.Link>
              <span
                className="navText mx-3"
                onClick={() => setNavSelection("resume")}
              >
                Resume
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
