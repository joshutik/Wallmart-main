// BankDetailsModal.js
// import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const BankDetailsModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Bank Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add your Bank Details content here */}
        This is the content for the Bank Details modal.
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