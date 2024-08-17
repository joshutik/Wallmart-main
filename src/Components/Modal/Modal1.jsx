import { useState } from "react";
import PropTypes from "prop-types";
import "./Modal1.css";
import axios from 'axios';
import { FaTimes } from "react-icons/fa";
import logage from '/src/Components/assets/logage.png';
import headphone from '/src/Components/assets/headphone.png';
import smartwatch from '/src/Components/assets/smartwatch.png';

const Modal1 = ({ show, handleClose, amount, balance }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // State to track successful payment

  // const images = [
  //   "/src/Components/assets/logage.png",
  //   "/src/Components/assets/headphone.png",
  //   "/src/Components/assets/smartwatch.png",
  //   // Add more images as needed
  // ];

  const images = [logage, headphone, smartwatch];

  

  if (!show) return null;

  const djangoHostname = import.meta.env.VITE_DJANGO_HOSTNAME;
  const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString();
  const commissionAmount = amount * 0.2;

  const handlePay = async () => {
    if (balance >= amount) {
        setIsLoading(true);
        const authToken = localStorage.getItem('token'); 

        try {
            await axios.post(`${djangoHostname}/api/orders/order-grabbings/`, {
                order: 1,
                amount: amount,
                commission: commissionAmount
            }, {
                headers: {
                    'Authorization': `Token ${authToken}`
                }
            });

            setIsSuccess(true); // Set success state when request is successful
            window.location.reload(); // Refresh the page

            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

        } catch (error) {
            console.error("Error during payment:", error);
        } finally {
            setIsLoading(false);
        }
    }
  };

  // Disable button if the payment was successful and the page is not yet reloaded
  const isButtonDisabled = isLoading || isSuccess;

  return (
    <div className="modal-overlay ">
      <div className="modal-content py-5">
        <button onClick={handleClose} className="modal-close-btn">
          <FaTimes />
        </button>
        {/* Display the current image */}
        <div className="time text-end d-flex justify-content-evenly">
          <p>Date: {formattedDate}</p>
          <p>Time: {formattedTime}</p>
        </div>
        <div className="image-container">
          <img src={images[currentImageIndex]} alt="Grab items" className="img-fluid w-50" />
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

        <div className="modal-buttons pb-sm-5">
          <button
            onClick={handlePay}
            className="btn rounded-pill border-0 fs-4"
            disabled={isButtonDisabled} // Disable button based on loading or success state
          >
            {isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : "Grab"}
          </button>
        </div>
      </div>
    </div>
  );
};

Modal1.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Modal1;
