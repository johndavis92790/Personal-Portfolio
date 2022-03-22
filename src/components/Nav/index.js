import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation(props) {
  const {
    setAboutSelected,
    setContactSelected,
    setPortfolioSelected,
    setResumeSelected,
  } = props;

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <span
            style={{ cursor: "pointer" }}
            className="navTextName mx-3"
            onClick={() => {
              setPortfolioSelected(false);
              setContactSelected(false);
              setAboutSelected(true);
              setResumeSelected(false);
            }}
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
                onClick={() => {
                  setPortfolioSelected(false);
                  setContactSelected(false);
                  setAboutSelected(true);
                  setResumeSelected(false);
                }}
              >
                About Me
              </span>
            </Nav.Link>
            <Nav.Link>
              <span
                className="navText mx-3"
                onClick={() => {
                  setPortfolioSelected(false);
                  setContactSelected(true);
                  setAboutSelected(false);
                  setResumeSelected(false);
                }}
              >
                Contact
              </span>
            </Nav.Link>
            <Nav.Link>
              <span
                className="navText mx-3"
                onClick={() => {
                  setPortfolioSelected(true);
                  setContactSelected(false);
                  setAboutSelected(false);
                  setResumeSelected(false);
                }}
              >
                Portfolio
              </span>
            </Nav.Link>
            <Nav.Link>
              <span
                className="navText mx-3"
                onClick={() => {
                  setPortfolioSelected(false);
                  setContactSelected(false);
                  setAboutSelected(false);
                  setResumeSelected(true);
                }}
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
