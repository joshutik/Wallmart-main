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

// import PropTypes from "prop-types";
// import { Modal, Button } from "react-bootstrap";
// import "./BankDetailsModal.css"; // Assuming you add the CSS in a separate file

// const BankDetailsModal = ({ show, handleClose }) => {
//   return (
//     <Modal
//       show={show}
//       onHide={handleClose}
//       dialogClassName="modal-dialog w-100"
//     >
//       <Modal.Header closeButton>
//         <Modal.Title>Current Bank Details</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div className="row justify-content-center paym-card">
//           <div className="col-lg-5 col-md-6 col-sm-12">
//             <div className="text-center py-lg-5 py-4">
//               <p>Bank Name</p>
//               <p>Palm Pay</p>
//               <div className="w-75 me-lg-auto mx-auto">
//                 <hr className="horizontal border-3 text-white" />
//               </div>

//               <p>Account</p>
//               <p>165008977890 </p>
//             </div>
//           </div>
//           <div className="d-none w-75 me-lg-auto mx-auto d-none d-sm-block d-md-none">
//             <hr className="horizontal border-3 text-white" />
//           </div>
//           <div className="col-lg-5 col-md-6 col-sm-12">
//             <div className="text-center py-lg-5 py-4">
//               <p>Recipient</p>
//               <p>John Louis Vaqeuz </p>
//               <div className="w-75 me-lg-auto mx-auto">
//                 <hr className="horizontal border-3 text-white" />
//               </div>
//               <p>Account</p>
//               <p>$30.00 </p>
//             </div>
//           </div>
//         </div>
//         <div className="text-start my-4">
//           <label htmlFor="newBankName" className="text-start">
//             New bank Name
//           </label>
//           <input
//             type="text"
//             name="newBankName"
//             id="newBankName"
//             className="form-control rounded-3" placeholder="enter new bank name"
//           />
//         </div>
//         <div className="text-start my-4">
//           <label htmlFor="newRecipientName" className="text-start">
//             New Recipient Name
//           </label>
//           <input
//             type="text"
//             name="newRecipientName"
//             id="newRecipientName"
//             className="form-control rounded-3" placeholder="enter new Recipient Name"
//           />
//         </div>
//         <div className="text-start my-4">
//           <label htmlFor="newAccountNumber" className="text-start">
//             New Account Number
//           </label>
//           <input
//             type="number"
//             name="newAccountNumber"
//             id="newAccountNumber"
//             className="form-control rounded-3" placeholder="enter new Account Number"
//           />
//         </div>

//         <div className="my-4">
//           <button className=" btn change text-light">Submit</button>
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

import { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import "./BankDetailsModal.css";

const BankDetailsModal = ({ show, handleClose }) => {
  // Initial bank details
  const [bankDetails, setBankDetails] = useState({
    bankName: "Palm Pay",
    accountNumber: "165008977890",
    recipientName: "John Louis Vaqeuz",
    amount: "$30.00",
  });

  // State for input fields
  const [newBankName, setNewBankName] = useState("");
  const [newAccountNumber, setNewAccountNumber] = useState("");
  const [newRecipientName, setNewRecipientName] = useState("");

  // Function to handle form submission
  const handleSubmit = () => {
    setBankDetails({
      ...bankDetails,
      bankName: newBankName || bankDetails.bankName,
      accountNumber: newAccountNumber || bankDetails.accountNumber,
      recipientName: newRecipientName || bankDetails.recipientName,
    });

    // Clear the input fields
    setNewBankName("");
    setNewAccountNumber("");
    setNewRecipientName("");
  };

  return (
    <Modal show={show} onHide={handleClose} dialogClassName="modal-dialog w-100">
      <Modal.Header closeButton>
        <Modal.Title>Current Bank Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row justify-content-center paym-card">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="text-center py-lg-5 py-4">
              <p>Bank Name</p>
              <p>{bankDetails.bankName}</p>
              <div className="w-75 me-lg-auto mx-auto">
                <hr className="horizontal border-3 text-white" />
              </div>
              <p>Account</p>
              <p>{bankDetails.accountNumber}</p>
            </div>
          </div>
          <div className="d-none w-75 me-lg-auto mx-auto d-none d-sm-block d-md-none">
            <hr className="horizontal border-3 text-white" />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="text-center py-lg-5 py-4">
              <p>Recipient</p>
              <p>{bankDetails.recipientName}</p>
              <div className="w-75 me-lg-auto mx-auto">
                <hr className="horizontal border-3 text-white" />
              </div>
              <p>Amount</p>
              <p>{bankDetails.amount}</p>
            </div>
          </div>
        </div>
        <div className="text-start my-4">
          <label htmlFor="newBankName" className="text-start">
            New Bank Name
          </label>
          <input
            type="text"
            name="newBankName"
            id="newBankName"
            className="form-control rounded-3"
            placeholder="Enter new bank name"
            value={newBankName}
            onChange={(e) => setNewBankName(e.target.value)}
          />
        </div>
        <div className="text-start my-4">
          <label htmlFor="newRecipientName" className="text-start">
            New Recipient Name
          </label>
          <input
            type="text"
            name="newRecipientName"
            id="newRecipientName"
            className="form-control rounded-3"
            placeholder="Enter new recipient name"
            value={newRecipientName}
            onChange={(e) => setNewRecipientName(e.target.value)}
          />
        </div>
        <div className="text-start my-4">
          <label htmlFor="newAccountNumber" className="text-start">
            New Account Number
          </label>
          <input
            type="number"
            name="newAccountNumber"
            id="newAccountNumber"
            className="form-control rounded-3"
            placeholder="Enter new account number"
            value={newAccountNumber}
            onChange={(e) => setNewAccountNumber(e.target.value)}
          />
        </div>
        <div className="my-4">
          <button
            className="btn change text-light"
            onClick={handleSubmit}
          >
            Submit
          </button>
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
