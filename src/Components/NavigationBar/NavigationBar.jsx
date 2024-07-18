// // mport React from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { HouseDoor, FileEarmarkText, Bell, Person } from 'react-bootstrap-icons';
// import './NavigationBar.css';

// const NavigationBar = () => {
//   return (
//     <Navbar bg="light" className="custom-navbar">
//       <Container className="justify-content-around">
//         <Nav className="d-flex align-items-center">
//           <Nav.Item className="nav-item" >
//             <Nav.Link href="#home" className="d-flex flex-column align-items-center">
//               <HouseDoor className="nav-icon home-icon" />
//               <span className="nav-text">Home</span>
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item className="nav-item">
//             <Nav.Link href="#record" className="d-flex flex-column align-items-center">
//               <FileEarmarkText className="nav-icon" />
//               <span className="nav-text">Record</span>
//             </Nav.Link>
//           </Nav.Item>
//         {/* </Nav> */}
//         <div className="nav-item grab-order">
//           <Nav.Link href="#grab-order" className="d-flex flex-column align-items-center">
//             <div className="grab-order-icon">
//               <HouseDoor />
//             </div>
//             <span className="nav-text">Grab Order</span>
//           </Nav.Link>
//         </div>
//         {/* <Nav className="d-flex align-items-center justify-content-between"> */}
//           <Nav.Item className="nav-item">
//             <Nav.Link href="#notification" className="d-flex flex-column align-items-center">
//               <Bell className="nav-icon" />
//               <span className="nav-text">Notification</span>
//             </Nav.Link>
//           </Nav.Item>
//           <Nav.Item className="nav-item">
//             <Nav.Link href="#profile" className="d-flex flex-column align-items-center">
//               <Person className="nav-icon" />
//               <span className="nav-text">Account Profile</span>
//             </Nav.Link>
//           </Nav.Item>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// };

// export default NavigationBar;

// import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HouseDoor, FileEarmarkText, Bell, Person } from 'react-bootstrap-icons';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <Navbar bg="light" className="custom-navbar">
      <Container className="justify-content-center">
        <Nav className="d-flex justify-content-around w-100">
          <Nav.Item className="nav-item">
            <Nav.Link href="#home" className="d-flex flex-column align-items-center">
              <HouseDoor className="nav-icon" />
              <span className="nav-text">Home</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link href="#record" className="d-flex flex-column align-items-center">
              <FileEarmarkText className="nav-icon" />
              <span className="nav-text">Record</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item grab-order">
            <Nav.Link href="#grab-order" className="d-flex flex-column align-items-center">
              <HouseDoor className="nav-icon grab-order-icon" />
              <span className="nav-text">Grab Order</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link href="#notification" className="d-flex flex-column align-items-center">
              <Bell className="nav-icon" />
              <span className="nav-text">Notification</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="nav-item">
            <Nav.Link href="#profile" className="d-flex flex-column align-items-center">
              <Person className="nav-icon" />
              <span className="nav-text">Account Profile</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;