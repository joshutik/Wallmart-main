
// import React from "react";
import PropTypes from "prop-types";
import "./SliderToggle2.css";

const SliderToggle = ({ selectedMethod, setSelectedMethod }) => {
  return (
    <div className="slider-toggle">
      <button
        className={`toggle-button rounded-start-5 ${selectedMethod === "crypto" ? "active" : ""}`}
        onClick={() => setSelectedMethod("wallet")}
      >
        Wallet Payment
      </button>
      <button
        className={`toggle-button rounded-end-5 ${selectedMethod === "bank-payment" ? "active" : ""}`}
        onClick={() => setSelectedMethod("bank-payment")}
      >
        Bank
      </button>
    </div>
  );
};

SliderToggle.propTypes = {
  selectedMethod: PropTypes.string.isRequired,
  setSelectedMethod: PropTypes.func.isRequired,
};

export default SliderToggle;