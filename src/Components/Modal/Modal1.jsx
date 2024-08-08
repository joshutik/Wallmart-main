// import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./Modal1.css";
import axios from 'axios';
import { FaTimes } from "react-icons/fa"; // Import the "X" icon from react-icons

const Modal1 = ({ show, handleClose, amount, orderCount, balance, orderCounts }) => {
  if (!show) return null;
  const djangoHostname = import.meta.env.VITE_DJANGO_HOSTNAME;

  

  const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString();
  const commissionAmount = amount * 0.2;


  const handlePay = async () => {
   
    // if (orderCounts < 3 && balance >= amount) {
    if (balance >= amount) {

       
        const commissionAmount = amount * 0.2; // 20% commission
        const authToken = localStorage.getItem('token'); // Replace with the actual token

        try {
            // Send data to the backend with the authorization token in the headers
            await axios.post(`${djangoHostname}/api/orders/order-grabbings/`, {
                order: 1,
                amount: amount,
                commission: commissionAmount
            }, {
                headers: {
                    'Authorization': `Token ${authToken}`
                }
            });

            // Update state after successful payment
            // setBalance(balance - amount);
            // setOrderCount(orderCount + 1);
            window.location.reload()
            setProgress(progress + 33.3333);
            
            // setCommission(commission + commissionAmount); // Add the commission to the commission state
        } catch (error) {
            console.error("Error during payment:", error);
            // Handle error (show message to the user, etc.)
        }
    }
    // setShowModal(false); // Hide the modal after payment
};

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={handleClose} className="modal-close-btn">
          <FaTimes />
        </button>
        <div className="time text-end d-flex justify-content-evenly">
          <p>Date: {formattedDate}</p>
          <p>Time: {formattedTime}</p>
        </div>
        <div className="d-flex justify-content-between px-4">
          <p className="pro-amount fw-bold fs-3">${amount}</p>
          <span className="fw-bold fs-3 mt-0">X2</span>
        </div>
        <div className="d-flex justify-content-between my-0 mx-2">
          <div>
            <p className="total-amount fw-bold">Total order Amount</p>
            <p className="total-amount text-start fs-4 fw-bold mt-0">${amount}</p>
          </div>
          <div>
            <h4 className="fw-bold commi">Commission</h4>
            <h4 className="fw-bold commi text-end">${commissionAmount.toFixed(2)}</h4>
          </div>
        </div>
        <div className="modal-buttons">
          <button
            onClick={handlePay}
            className="btn rounded-pill border-0 fs-4"
          >
            Grab
          </button>
        </div>
      </div>
    </div>
  );
};

// Define prop types for the Modal1 component
Modal1.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  // handlePay: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Modal1;