
import PropTypes from "prop-types";  // Import PropTypes
import Container from "react-bootstrap/Container";
import CountryCode from '../CountryCode/CountryCode';
import Navbar from "react-bootstrap/Navbar";
import logo1 from "../assets/wallmart-logo.png";

function DashNav({ toggleSidebar }) {  // Accept toggleSidebar as a prop
  return (
    <Navbar expand="md" className="nave bg-light w-100 fixed-top d-block">
      <Container>
        <Navbar.Brand href="#" className="d-none d-md-block">
          <img src={logo1} alt="Logo" />
        </Navbar.Brand>
        <div className="d-block d-md-none d-flex align-items-center ms-auto text-end">
          <CountryCode />
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleSidebar} />
        </div>
        <div className="d-none d-md-block d-flex align-items-center country">
          <CountryCode />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Your Navbar content goes here */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


DashNav.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};
export default DashNav;