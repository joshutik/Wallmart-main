// // InvitationModal.js
// // import React from 'react';
// import PropTypes from "prop-types";
// import { Modal, Button } from "react-bootstrap";
// import './InvitationModal.css'

// const InvitationModal = ({ show, handleClose }) => {
//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title className="text-center">Invitation Link</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div className="container-fluid">
//           <p className="text-start pt-3">Generate Invitation Link</p>

//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control"
//               value="34567"
//               readOnly
//             />
//             <button className="btn generate">Generate</button>
//           </div>
//           <div className="my-5">
//             <button className="btn copy py-2 w-75 text-light">Copy</button>
//           </div>
//         </div>
//       </Modal.Body>
//       {/* <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//       </Modal.Footer> */}
//     </Modal>
//   );
// };

// InvitationModal.propTypes = {
//   show: PropTypes.bool.isRequired,
//   handleClose: PropTypes.func.isRequired,
// };

// export default InvitationModal;




import { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import './InvitationModal.css';

const InvitationModal = ({ show, handleClose }) => {
  const [link, setLink] = useState("");

  const generateLink = () => {
    const newLink = `https://example.com/invite?code=${Math.random().toString(36).substr(2, 9)}`;
    setLink(newLink);
  };

  const copyLink = () => {
    if (link) {
      navigator.clipboard.writeText(link);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="text-center">Invitation Link</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container-fluid">
          <p className="text-start pt-3">Generate Invitation Link</p>

          <div className="form-group" style={{ position: 'relative' }}>
            <input
              type="text"
              className="form-control"
              value={link}
              readOnly
              style={{ borderRadius: "25px", paddingRight: "100px" }}
            />
            <button 
              className="btn generate" 
              onClick={generateLink}
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                height: '100%',
                borderRadius: "25px",
                backgroundColor: "#FFA500",
                color: "#fff"
              }}
            >
              Generate
            </button>
          </div>
          <div className="my-5">
            <button 
              className="btn copy py-2 w-75 text-light" 
              onClick={copyLink}
              style={{
                borderRadius: "25px",
                backgroundColor: "#FFA500",
              }}
            >
              Copy
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

InvitationModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default InvitationModal;