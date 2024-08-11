// WalletDetailsModal.js
// import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const WalletDetailsModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Wallet Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add your Wallet Details content here */}
        This is the content for the Wallet Details modal.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

WalletDetailsModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
  };

export default WalletDetailsModal;