// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import SliderToggle2 from "../SliderToggle2/SliderToggle2";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./Recharge.css";

// const Recharge = () => {
//   const [selectedMethod, setSelectedMethod] = useState("wallet");
//   const [cryptoWallet, setCryptoWallet] = useState("");
//   const [walletAddress, setWalletAddress] = useState("");
//   const [amount, setAmount] = useState(30); // Assume default top-up amount is $30
//   const [qrCode, setQrCode] = useState(null);
//   const [paymentLink, setPaymentLink] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!cryptoWallet) {
//       alert("Please select a crypto wallet");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "https://example.com/api/generate-payment",
//         { cryptoWallet, amount },
//         {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         }
//       );
//       setQrCode(response.data.qrCode); // Assuming the response contains a QR code
//       setPaymentLink(response.data.paymentLink); // Assuming the response contains a payment link
//     } catch (error) {
//       console.error("Error generating payment:", error);
//       alert("Error generating payment");
//     }
//   };

//   const handleProceed = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.post(
//         "https://example.com/api/deduct-amount",
//         { amount },
//         {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         }
//       );
//       alert("Recharge successful");
//       setQrCode(null); // Close the popup after successful recharge
//     } catch (error) {
//       console.error("Error deducting amount:", error);
//       alert("Error processing recharge");
//     }
//   };

//   return (
//     <div className="container px-3">
//       <div className="row my-5">
//         <div className="col-auto">
//           <Link to={"/account"}>
//             <i className="bi bi-arrow-left fs-3 text-dark"></i>
//           </Link>
//         </div>
//         <div className="col-auto mx-auto">
//           <h1>Recharge Account</h1>
//         </div>
//       </div>
//       <SliderToggle2
//         selectedMethod={selectedMethod}
//         setSelectedMethod={setSelectedMethod}
//       />
//       <form className="px-2" onSubmit={handleSubmit} key={selectedMethod}>
//         {selectedMethod === "wallet" && (
//           <>
//             <div className="form-group my-3">
//               <label className="fw-bold fs-4 my-4" htmlFor="cryptowallet">
//                 Select Crypto Wallet
//               </label>
//               <select
//                 name="cryptowallet"
//                 id="cryptowallet"
//                 className="form-select py-3 rounded-4"
//                 value={cryptoWallet}
//                 onChange={(e) => setCryptoWallet(e.target.value)}
//                 required
//               >
//                 <option value="">Choose Wallet</option>
//                 <option value="USDT">USDT</option>
//                 <option value="BINANCE">BINANCE</option>
//                 <option value="TON">TON</option>
//                 <option value="BTC">BTC</option>
//                 <option value="TRX">TRX</option>
//               </select>
//             </div>
//             <div className="form-group my-3">
//               <label className="fw-bold fs-4 my-2" htmlFor="selectedwallet">
//                 Current Selected Wallet
//               </label>
//               <input
//                 type="text"
//                 className="form-control py-3 rounded-4 w-50 bg-dark text-light"
//                 value={cryptoWallet}
//                 readOnly
//               />
//               <p className="py-4">
//                 A scan code and Payment link will be generated to enable easy payment and better service to customers. Terms of use and Privacy Policy.
//               </p>
//             </div>
//             <div className="my-4 text-center">
//               <button
//                 className="rounded-pill py-2 w-75 border-0 draw-btn fw-bold text-light fs-5 my-5"
//                 type="submit"
//               >
//                 Generate Payment
//               </button>
//             </div>
//           </>
//         )}
//         {selectedMethod === "bank-payment" && (
//           <>
//             <div className="form-group my-3">
//               <label className="fw-bold fs-4 my-4" htmlFor="bankname">
//                 Bank Payment
//               </label>
//               <div>
//                 <Link
//                   to={"/"}
//                   className="btn w-100 rounded-4 border fw-bold bnk-de py-3"
//                 >
//                   Add Bank Details
//                 </Link>
//               </div>
//             </div>
//             <div className="form-group my-3">
//               <label className="fw-bold fs-4 my-4" htmlFor="accountNumber">
//                 Please Confirm CVC
//               </label>
//               <input
//                 type="text"
//                 className="form-control py-3 rounded-4 w-50 bg-dark"
//                 value={walletAddress}
//                 onChange={(e) => setWalletAddress(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group my-3">
//               <label className="fw-bold fs-4 my-4" htmlFor="phonenumber">
//                 Confirm Payment
//               </label>
//               <div className="w-75 ms-auto">
//                 <hr />
//                 <div className="d-flex justify-content-around">
//                   <h4>Amount</h4>
//                   <p className="fs-3">${amount}</p>
//                 </div>
//                 <hr />
//                 <div className="d-flex justify-content-around align-items-center py-0">
//                   <h4>Total</h4>
//                   <h4 className="">${amount}</h4>
//                 </div>
//                 <hr />
//               </div>
//             </div>
//             <div className="my-4 text-center mb-4">
//               <button
//                 className="rounded-pill py-2 w-75 border-0 draw-btn fw-bold text-light fs-5 my-5"
//                 type="submit"
//               >
//                 Proceed
//               </button>
//             </div>
//           </>
//         )}
//       </form>
//       {qrCode && (
//         <div className="popup">
//           <div className="popup-content">
//             <h3>Scan the QR Code or Copy the Payment Link</h3>
//             <img src={qrCode} alt="QR Code" />
//             <p>Payment Link: <a href={paymentLink} target="_blank" rel="noopener noreferrer">{paymentLink}</a></p>
//             <button onClick={() => setQrCode(null)}>Close</button>
//             <button onClick={handleProceed}>Proceed</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Recharge;

// import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import SliderToggle2 from "../SliderToggle2/SliderToggle2";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./Recharge.css";

// const Recharge = ({ selectedAmount }) => {
//   const [selectedMethod, setSelectedMethod] = useState("wallet");
//   const [cryptoWallet, setCryptoWallet] = useState("");
//   const [showQRModal, setShowQRModal] = useState(false);

//   useEffect(() => {
//     const fetchBalance = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         await axios.get("https://example.com/api/balance", {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         });
//       } catch (error) {
//         console.error("Error fetching balance:", error);
//       }
//     };
//     fetchBalance();
//   }, []);

//   const handleGeneratePayment = (e) => {
//     e.preventDefault();
//     if (!cryptoWallet) {
//       alert("Please select a crypto wallet");
//       return;
//     }
//     setShowQRModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowQRModal(false);
//   };

//   return (
//     <div className="container px-3">
//       <div className="row my-5">
//         <div className="col-auto">
//           <Link to={"/account"}>
//             <i className="bi bi-arrow-left fs-3 text-dark"></i>
//           </Link>
//         </div>
//         <div className="col-auto mx-auto">
//           <h1>Recharge Account</h1>
//         </div>
//       </div>
//       <SliderToggle2
//         selectedMethod={selectedMethod}
//         setSelectedMethod={setSelectedMethod}
//       />
//       <form
//         className="px-2"
//         onSubmit={handleGeneratePayment}
//         key={selectedMethod}
//       >
//         {selectedMethod === "wallet" && (
//           <>
//             <div className="form-group my-3">
//               <label className="fw-bold fs-4 my-4" htmlFor="cryptowallet">
//                 Select Crypto wallet
//               </label>
//               <select
//                 name="cryptowallet"
//                 id="cryptowallet"
//                 className="form-select py-3 rounded-4"
//                 value={cryptoWallet}
//                 onChange={(e) => setCryptoWallet(e.target.value)}
//                 required
//               >
//                 <option value="">Choose Wallet</option>
//                 <option value="USDT">USDT</option>
//                 <option value="BINANCE">BINANCE</option>
//                 <option value="TON">TON</option>
//                 <option value="BTC">BTC</option>
//                 <option value="TRX">TRX</option>
//               </select>
//             </div>
//             <div className="form-group my-3">
//               <label className="fw-bold fs-4 my-2" htmlFor="walletaddress">
//                 Current Selected Wallet
//               </label>
//               <input
//                 type="text"
//                 className="form-control py-3 rounded-4 w-50 bg-dark text-light"
//                 value={cryptoWallet}
//                 readOnly
//               />
//               <p className="py-4">
//                 A scan code and Payment link will be generated for easy payment
//                 and better service to customers. Terms of use and Privacy Policy.
//               </p>
//             </div>
//             <div className="my-4 text-center">
//               <button
//                 className="rounded-pill py-2 w-75 border-0 draw-btn fw-bold text-light fs-5 my-5"
//                 type="submit"
//               >
//                 Generate Payment
//               </button>
//             </div>
//           </>
//         )}
//       </form>

//       {showQRModal && (
//         <div className="modal show d-block" tabIndex="-1" role="dialog">
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Payment Details</h5>
//                 <button
//                   type="button"
//                   className="close"
//                   onClick={handleCloseModal}
//                 >
//                   <span>&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body text-center">
//                 <p>Amount to recharge: ${selectedAmount}</p>
//                 <div className="qr-code">
//                   {/* Replace with actual QR code generation logic */}
//                   <img src="path_to_qr_code_image" alt="QR Code" />
//                 </div>
//                 <p>Or copy the payment link:</p>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value="https://example.com/payment-link"
//                   readOnly
//                 />
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={handleCloseModal}
//                 >
//                   Close
//                 </button>
//                 <button type="button" className="btn btn-primary">
//                   Proceed
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// Recharge.propTypes = {
//   selectedAmount: PropTypes.number.isRequired,
// };

// export default Recharge;

import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SliderToggle2 from "../SliderToggle2/SliderToggle2";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Recharge.css";

const Recharge = () => {
  const [selectedMethod, setSelectedMethod] = useState("wallet");
  const [cryptoWallet, setCryptoWallet] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [showQrModal, setShowQrModal] = useState(false); // State for QR modal
  const [showBankModal, setShowBankModal] = useState(false); // State for Bank Details modal

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedMethod === "crypto" && (!cryptoWallet || !walletAddress)) {
      alert("Please fill in all fields for crypto recharge");
      return;
    }
    if (selectedMethod === "bank-payment" && (!walletAddress || !amount)) {
      alert("Please fill in all fields for bank payment");
      return;
    }

    if (selectedMethod === "crypto") {
      // Show QR code modal
      setShowQrModal(true);
    } else {
      // Handle bank payment
      // Logic for bank payment submission
      alert("Bank payment details submitted");
    }
  };

  return (
    <div className="container px-3">
      <div className="row my-5">
        <div className="col-auto">
          <Link to={"/homepage"}>
            <i className="bi bi-arrow-left fs-3 text-dark"></i>
          </Link>
        </div>
        <div className="col-auto mx-auto">
          <h1>Recharge Account</h1>
        </div>
      </div>
      <SliderToggle2
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
      />
      <form
        className="px-2"
        onSubmit={handleSubmit}
        key={selectedMethod} // Force re-render when method changes
      >
        {selectedMethod === "wallet" && (
          <>
            <div className="form-group my-3">
              <label className="fw-bold fs-4 my-4" htmlFor="cryptowallet">
                Select Crypto Wallet
              </label>
              <select
                name="cryptowallet"
                id="cryptowallet"
                className="form-select py-3 rounded-4"
                value={cryptoWallet}
                onChange={(e) => setCryptoWallet(e.target.value)}
                required
              >
                <option value="">Choose Wallet</option>
                <option value="USDT">USDT</option>
                <option value="BINANCE">BINANCE</option>
                <option value="TON">TON</option>
                <option value="BTC">BTC</option>
                <option value="TRX">TRX</option>
              </select>
            </div>
            <div className="form-group my-3">
              <label className="fw-bold fs-4 my-2" htmlFor="walletaddress">
                Current Selected Wallet
              </label>
              <input
                type="text"
                className="form-control py-3 rounded-4 w-50 bg-dark text-light"
                value={cryptoWallet} // Display selected crypto wallet
                readOnly
              />
              <p className="py-4">
                Walmart will generate a scan code and Payment link that can
                enable easy payment and better service to customers. Terms of
                use and Privacy Policy.
              </p>
            </div>
            <div className="my-4 text-center">
              <button
                className="rounded-pill py-2 w-75 border-0 draw-btn fw-bold text-light fs-5 my-5"
                type="submit"
              >
                Generate Payment
              </button>
            </div>
          </>
        )}
        {selectedMethod === "bank-payment" && (
          <>
            <div className="form-group my-3">
              <label className="fw-bold fs-4 my-4" htmlFor="bankname">
                Bank Payment
              </label>
              <div>
                <Link
                  to="#"
                  onClick={() => setShowBankModal(true)} // Open Bank Details modal
                  className="btn w-100 rounded-4 border fw-bold bnk-de py-3"
                >
                  Add Bank Card
                </Link>
              </div>
            </div>
            <div className="form-group my-3">
              <label className="fw-bold fs-4 my-4" htmlFor="accountNumber">
                Please Confirm CVC
              </label>
              <input
                type="text"
                className="form-control py-3 rounded-4 w-50"
                id="accountNumber"
                placeholder="CVC"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group my-3">
              <label className="fw-bold fs-4 my-4" htmlFor="amount">
                Confirm Payment
              </label>
              <div className="w-75 ms-auto">
                <hr />
                <div className="d-flex justify-content-around">
                  <h4>Amount</h4>
                  <p className="fs-3">${amount}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-around align-items-center py-0">
                  <h4>Total</h4>
                  <h4>${amount}</h4>
                </div>
                <hr />
              </div>
            </div>
            <div className="my-4 text-center mb-4">
              <button
                className="rounded-pill py-2 w-75 border-0 draw-btn fw-bold text-light fs-5 my-5"
                type="submit"
              >
                Proceed
              </button>
            </div>
          </>
        )}
      </form>

      {/* QR Code Modal */}
      {showQrModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">QR Code for Payment</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowQrModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Scan the QR code or copy the payment link to complete the
                  recharge:
                </p>
                <div className="text-center">
                  {/* Placeholder for QR code */}
                  <img
                    src="path-to-qr-code"
                    alt="QR Code"
                    className="img-fluid"
                  />
                  <p>Or copy the link below:</p>
                  <input
                    type="text"
                    className="form-control"
                    value="https://example.com/payment-link"
                    readOnly
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowQrModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bank Details Modal */}
      {showBankModal && (
        <div className="modal show d-block " tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content w-100">
              <div className="modal-header">
                <h5 className="modal-title">Add Bank Card</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowBankModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="form-group my-3">
                    {/* <label
                      className="fw-bold fs-4 my-2"
                      htmlFor="fullName"
                    >
                      Account Number
                    </label> */}
                    <input
                      type="text"
                      className="form-control py-3 rounded-4"
                      id="fullName"
                      placeholder="Full Name*"
                    />
                  </div>
                  <div className="form-group my-3">
                    <input
                      type="number"
                      className="form-control py-3 rounded-4"
                      id="creditCardNumber"
                      placeholder="Credit Card Number*"
                    />
                  </div>
                  <div className="form-group my-3">
                    {/* <label className="fw-bold fs-4 my-2" htmlFor="ifscCode">
                      IFSC Code
                    </label> */}
                    <input
                      type="number"
                      className="form-control py-3 rounded-4"
                      id="expiringDate"
                      placeholder="expiring Date*"
                    />
                  </div>
                  <div className="form-group my-3">
                    {/* <label className="fw-bold fs-4 my-2" htmlFor="ifscCode">
                      IFSC Code
                    </label> */}
                    <input
                      type="number"
                      className="form-control py-3 rounded-4"
                      id="expiringDate"
                      placeholder="CVC*"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowBankModal(false)}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => alert("Bank details saved")}
                  >
                    Save Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Recharge.propTypes = {
  selectedMethod: PropTypes.string.isRequired,
};

export default Recharge;

// import { useState } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import SliderToggle2 from "../SliderToggle2/SliderToggle2";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./Recharge.css";

// const Recharge = () => {
//   const [selectedMethod, setSelectedMethod] = useState("wallet");
//   const [cryptoWallet, setCryptoWallet] = useState("");
//   const [walletAddress, setWalletAddress] = useState("");
//   const [amount, setAmount] = useState(""); // Amount from top-up
//   const [showQrModal, setShowQrModal] = useState(false); // State for QR modal
//   const [showBankModal, setShowBankModal] = useState(false); // State for Bank Details modal

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (selectedMethod === "crypto" && (!cryptoWallet || !walletAddress)) {
//       alert("Please fill in all fields for crypto recharge");
//       return;
//     }
//     if (selectedMethod === "bank-payment" && (!walletAddress || !amount)) {
//       alert("Please fill in all fields for bank payment");
//       return;
//     }

//     if (selectedMethod === "crypto") {
//       // Show QR code modal
//       setShowQrModal(true);
//     } else {
//       // Handle bank payment
//       // Logic for bank payment submission
//       alert("Bank payment details submitted");
//     }
//   };

//   return (
//     <div className="container px-3">
//       <div className="row my-5">
//         <div className="col-auto">
//           <Link to={"/"}>
//             <i className="bi bi-arrow-left fs-3 text-dark"></i>
//           </Link>
//         </div>
//         <div className="col-auto mx-auto">
//           <h1>Recharge Account</h1>
//         </div>
//       </div>
//       <SliderToggle2
//         selectedMethod={selectedMethod}
//         setSelectedMethod={setSelectedMethod}
//       />
//       <form
//         className="px-2"
//         onSubmit={handleSubmit}
//         key={selectedMethod} // Force re-render when method changes
//       >
//         {selectedMethod === "wallet" && (
//           <>
//             <div className="form-group my-3">
//               <label className="fw-bold fs-4 my-4" htmlFor="cryptowallet">
//                 Select Crypto Wallet
//               </label>
//               <select
//                 name="cryptowallet"
//                 id="cryptowallet"
//                 className="form-select py-3 rounded-4"
//                 value={cryptoWallet}
//                 onChange={(e) => setCryptoWallet(e.target.value)}
//                 required
//               >
//                 <option value="">Choose Wallet</option>
//                 <option value="USDT">USDT</option>
//                 <option value="BINANCE">BINANCE</option>
//                 <option value="TON">TON</option>
//                 <option value="BTC">BTC</option>
//                 <option value="TRX">TRX</option>
//               </select>
//             </div>
//             <div className="form-group my-3">
//               <label className="fw-bold fs-4 my-2" htmlFor="walletaddress">
//                 Current Selected Wallet
//               </label>
//               <input
//                 type="text"
//                 className="form-control py-3 rounded-4 w-50 bg-dark text-light"
//                 value={cryptoWallet} // Display selected crypto wallet
//                 readOnly
//               />
//               <p className="py-4">
//                 Walmart will generate a scan code and Payment link that can
//                 enable easy payment and better service to customers. Terms of
//                 use and Privacy Policy.
//               </p>
//             </div>
//             <div className="my-4 text-center">
//               <button
//                 className="rounded-pill py-2 w-75 border-0 draw-btn fw-bold text-light fs-5 my-5"
//                 type="submit"
//               >
//                 Generate Payment
//               </button>
//             </div>
//           </>
//         )}
//         {selectedMethod === "bank-payment" && (
//           <>
//             <div className="form-group my-3">
//               <label className="fw-bold fs-4 my-4" htmlFor="bankname">
//                 Bank Payment
//               </label>
//               <div>
//                 <Link
//                   to="#"
//                   onClick={() => setShowBankModal(true)} // Open Bank Details modal
//                   className="btn w-100 rounded-4 border fw-bold bnk-de py-3"
//                 >
//                   Add Bank Details
//                 </Link>
//               </div>
//             </div>
//             <div className="form-group my-3">
//               <label className="fw-bold fs-4 my-4" htmlFor="accountNumber">
//                 Please Confirm CVC
//               </label>
//               <input
//                 type="text"
//                 className="form-control py-3 rounded-4 w-50" placeholder="CVC"
//                 value={walletAddress}
//                 onChange={(e) => setWalletAddress(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group my-3">
//               <label className="fw-bold fs-4 my-4" htmlFor="amount">
//                 Confirm Payment
//               </label>
//               <div className="w-75 ms-auto">
//                 <hr />
//                 <div className="d-flex justify-content-around">
//                   <h4>Amount</h4>
//                   <p className="fs-3">${amount}</p>
//                 </div>
//                 <hr />
//                 <div className="d-flex justify-content-around align-items-center py-0">
//                   <h4>Total</h4>
//                   <h4 className="">${amount}</h4>
//                 </div>
//                 <hr />
//               </div>
//             </div>
//             <div className="my-4 text-center mb-4">
//               <button
//                 className="rounded-pill py-2 w-75 border-0 draw-btn fw-bold text-light fs-5 my-5"
//                 type="submit"
//               >
//                 Proceed
//               </button>
//             </div>
//           </>
//         )}
//       </form>

//       {showQrModal && (
//         <div className="modal show d-block" tabIndex="-1" role="dialog">
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">QR Code for Payment</h5>
//                 <button
//                   type="button"
//                   className="close"
//                   onClick={() => setShowQrModal(false)}
//                 >
//                   <span>&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <p>Scan the QR code or copy the payment link to complete the recharge:</p>
//                 <div className="text-center">
//                   {/* Placeholder for QR code */}
//                   <img src="path-to-qr-code" alt="QR Code" className="img-fluid" />
//                   <p>Or copy the link below:</p>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value="https://example.com/payment-link"
//                     readOnly
//                   />
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={() => setShowQrModal(false)}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {showBankModal && (
//         <div className="modal show d-block" tabIndex="-1" role="dialog">
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Add Bank Details</h5>
//                 <button
//                   type="button"
//                   className="close"
//                   onClick={() => setShowBankModal(false)}
//                 >
//                   <span>&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <p>Enter your bank details below:</p>
//                 <div className="form-group">
//                   <label className="fw-bold fs-4 my-2" htmlFor="bankName">
//                     Bank Name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control py-3 rounded-4"
//                     id="bankName"
//                     placeholder="Bank Name"
//                   />
//                 </div>
//                 <div className="form-group my-3">
//                   <label className="fw-bold fs-4 my-2" htmlFor="accountNumber">
//                     Account Number
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control py-3 rounded-4"
//                     id="accountNumber"
//                     placeholder="Account Number"
//                   />
//                 </div>
//                 <div className="form-group my-3">
//                   <label className="fw-bold fs-4 my-2" htmlFor="routingNumber">
//                     Routing Number
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control py-3 rounded-4"
//                     id="routingNumber"
//                     placeholder="Routing Number"
//                   />
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={() => setShowBankModal(false)}
//                 >
//                   Close
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-primary"
//                 >
//                   Save Details
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// Recharge.propTypes = {
//   // Define any prop types if needed
// };

// export default Recharge;
