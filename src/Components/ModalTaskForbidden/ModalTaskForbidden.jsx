import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ModalTaskForbidden = ({ showF, handleCloseF, messageF }) => {
  return (
    <Modal show={showF} onHide={handleCloseF} centered>
      <Modal.Header closeButton>
        <Modal.Title> {messageF}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <p>{messageF}</p> */}
      </Modal.Body>
      <Modal.Footer>
      <Button variant="primary" onClick={handleCloseF}>
        Okay
      </Button>
      </Modal.Footer>
    </Modal>
  );
};

// PropTypes validation
ModalTaskForbidden.propTypes = {
  showF: PropTypes.bool.isRequired,
  handleCloseF: PropTypes.func.isRequired,
};

export default ModalTaskForbidden;