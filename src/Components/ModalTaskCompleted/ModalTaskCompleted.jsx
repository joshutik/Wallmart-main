// // import React from 'react';
// import { Modal, Button } from 'react-bootstrap';

// const ModalTaskCompleted = ({ show, handleClose }) => {
//   return (
//     <Modal show={show} onHide={handleClose} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Task Completed</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <p>Task completed! Please contact the administrator.</p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="primary" onClick={handleClose}>
//           Okay
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default ModalTaskCompleted;

// import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ModalTaskCompleted = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Task Completed</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Task completed! Please contact the administrator.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Okay
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// PropTypes validation
ModalTaskCompleted.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ModalTaskCompleted;