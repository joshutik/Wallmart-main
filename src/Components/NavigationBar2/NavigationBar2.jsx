import Container from "react-bootstrap/Container";
import CountryCode from "../CountryCode/CountryCode";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo1 from "../assets/wallmart-logo.png";

function NavigationBar2() {
  return (
    <Navbar expand="lg" className="nave">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo1} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <div className="notification d-flex align-items-center">
            <div className="country">
              <CountryCode />
            </div>
            <Nav.Link href="#">
              <i className="bi bi-bell-fill fs-1"></i>{" "}
            </Nav.Link>
            
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar2;