import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const MyNavBar = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        data-bs-theme="dark"
        id="nav-edit"
      >
        <Container fluid>
          <Link to="/">
            <img
              src="/logos/music.svg"
              alt="Logo dell'app"
              className="img-fluid svg-logo"
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-flex justify-content-between"
          >
            <Nav className=" d-flex align-items-center ms-5">
              <Link to="/" className=" text-decoration-none me-2 text-light ">
                Home
              </Link>
              <Link
                to="/novità"
                className=" text-decoration-none me-2 text-light"
              >
                Novità
              </Link>
              <Link
                to="/radio"
                className=" text-decoration-none me-2 text-light"
              >
                Radio
              </Link>
              <Link
                to="/favourites"
                className=" text-decoration-none me-2 text-light"
              >
                Favourites Songs
              </Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <div className="box-logo">
              <img
                src="/logos/apple.svg"
                alt="logo del sito"
                className="svg-logo"
              />
            </div>
            <Button className=" btn btn-danger">Accedi</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavBar;
