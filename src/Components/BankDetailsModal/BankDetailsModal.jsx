// // BankDetailsModal.js
// // import React from 'react';
// import "./BankDetailsModal.css";
// import PropTypes from "prop-types";
// import { Modal, Button } from "react-bootstrap";

// const BankDetailsModal = ({ show, handleClose }) => {
//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Bank Details</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div className="container rounded-4 paym-card">
//           <div className="row justify-content-center">
//             <div className="col-lg-5 col-md-6 col-sm-12">
//               <div className="text-center py-lg-5 py-4">
//                 <p>Bank Name</p>
//                 <p>Palm Pay</p>
//                 <div className="w-75 me-lg-auto mx-auto">
//                   <hr className="horizontal border-3 text-white " />
//                 </div>

//                 <p>Account</p>
//                 <p>
//                   165008977890{" "}
//                   {/* <button
//                     className="btn btn-copy w-25 text-light"
//                     type="button"
//                     onClick={() => handleCopy("165008977890")}
//                   >
//                     Copy
//                   </button> */}
//                 </p>
//               </div>
//             </div>
//             <div className="d-none w-75 me-lg-auto mx-auto d-none d-sm-block d-md-none">
//               <hr className="horizontal border-3 text-white " />
//             </div>
//             <div className="col-lg-5 col-md-6 col-sm-12">
//               <div className="text-center py-lg-5 py-4">
//                 <p>Recipient</p>
//                 <p>John Louis Vaqeuz </p>
//                 <div className="w-75 me-lg-auto mx-auto">
//                   <hr className="horizontal border-3 text-white " />
//                 </div>
//                 <p>Account</p>
//                 <p>
//                   $30.00{" "}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={handleClose}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// BankDetailsModal.propTypes = {
//   show: PropTypes.bool.isRequired,
//   handleClose: PropTypes.func.isRequired,
// };

// export default BankDetailsModal;






import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import './BankDetailsModal.css'; // Assuming you add the CSS in a separate file

const BankDetailsModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog w-100">
      <Modal.Header closeButton>
        <Modal.Title>Bank Details</Modal.Title>
      </Modal.Header>
      <Modal.Body> 
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="text-center py-lg-5 py-4">
              <p>Bank Name</p>
              <p>Palm Pay</p>
              <div className="w-75 me-lg-auto mx-auto">
                <hr className="horizontal border-3 text-white" />
              </div>

              <p>Account</p>
              <p>
                165008977890{" "}
                <button className="btn btn-copy w-25 text-light" type="button">
                  Copy
                </button>
              </p>
            </div>
          </div>
          <div className="d-none w-75 me-lg-auto mx-auto d-none d-sm-block d-md-none">
            <hr className="horizontal border-3 text-white" />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="text-center py-lg-5 py-4">
              <p>Recipient</p>
              <p>John Louis Vaqeuz </p>
              <div className="w-75 me-lg-auto mx-auto">
                <hr className="horizontal border-3 text-white" />
              </div>
              <p>Account</p>
              <p>
                $30.00{" "}
                <button className="btn btn-copy w-25 text-light" type="button">
                  Copy
                </button>
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

BankDetailsModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default BankDetailsModal;

