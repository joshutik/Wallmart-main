
// import { useState, useEffect } from "react";
// import SliderToggle from "../SliderToggle/SliderToggle"; // Adjust the import path as needed
// import { Link } from "react-router-dom";
// import axios from "axios"; // Assuming you're using axios for API requests
// import './Withdrawal.css'

// const Withdrawal = () => {
//   const [selectedMethod, setSelectedMethod] = useState("wallet");
//   const [amount, setAmount] = useState("");
//   const [availableBalance, setAvailableBalance] = useState(0);
//   const [cryptoWallet, setCryptoWallet] = useState("");
//   const [walletAddress, setWalletAddress] = useState("");
//   const [withdrawalPassword, setWithdrawalPassword] = useState("");
//   const [bankName, setBankName] = useState("");
//   const [bankAccountNumber, setBankAccountNumber] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");

//   useEffect(() => {
//     // Fetch available balance from API or context
//     const fetchBalance = async () => {
//       try {
//         const token = localStorage.getItem("token"); // Replace with actual token
//         const response = await axios.get("https://example.com/api/balance", {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         });
//         setAvailableBalance(response.data.balance);
//       } catch (error) {
//         console.error("Error fetching balance:", error);
//       }
//     };
//     fetchBalance();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validate inputs
//     if (
//       selectedMethod === "crypto" &&
//       (!amount || !cryptoWallet || !walletAddress || !withdrawalPassword)
//     ) {
//       alert("Please fill in all fields for crypto withdrawal");
//       return;
//     }
//     if (
//       selectedMethod === "bank" &&
//       (!amount || !bankName || !bankAccountNumber || !phoneNumber || !withdrawalPassword)
//     ) {
//       alert("Please fill in all fields for bank withdrawal");
//       return;
//     }

//     // Submit withdrawal request
//     const withdraw = async () => {
//       try {
//         const token = localStorage.getItem("token"); // Replace with actual token
//         await axios.post(
//           "https://example.com/api/withdraw",
//           {
//             amount,
//             ...(selectedMethod === "crypto" && {
//               cryptoWallet,
//               walletAddress,
//               withdrawalPassword,
//             }),
//             ...(selectedMethod === "bank" && {
//               bankName,
//               bankAccountNumber,
//               phoneNumber,
//               withdrawalPassword,
//             }),
//           },
//           {
//             headers: {
//               Authorization: `Token ${token}`,
//             },
//           }
//         );
//         alert("Withdrawal successful");
//       } catch (error) {
//         console.error("Error processing withdrawal:", error);
//         alert("Error processing withdrawal");
//       }
//     };
//     withdraw();
//   };

//   return (
//     <div className="container">
//       <div className="row my-5">
//         <div className="col-auto">
//           <Link to={"/account"}>
//             <i className="bi bi-arrow-left fs-3 text-dark"></i>
//           </Link>
//         </div>
//         <div className="col-auto mx-auto">
//           <h1>Withdrawal</h1>
//         </div>
//       </div>
//       <div>
//         <SliderToggle selectedMethod={selectedMethod} setSelectedMethod={setSelectedMethod} />
//       </div>
//       <div>
//         <form className="px-2" onSubmit={handleSubmit}>
//           <div className="row">
//             <div className="col-auto">
//               <div className="form-group my-3">
//                 <label className="fw-bold fs-4 my-2" htmlFor="withdrawal">
//                   Enter Amount
//                 </label>
//                 <input
//                   className="form-control py-3"
//                   type="number"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                   min="0"
//                   step="0.01"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="col-auto">
//               <div className="form-group my-3">
//                 <label className="fw-bold fs-4 my-2" htmlFor="availableBalance">
//                   Available for withdrawal
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control py-3 bg-secondary border-dark border-5 avia-bal"
//                   value={availableBalance}
//                   readOnly
//                 />
//               </div>
//             </div>
//           </div>
//           {selectedMethod === "crypto" && (
//             <>
//               <div className="form-group my-3">
//                 <label className="fw-bold fs-4 my-2" htmlFor="cryptowallet">
//                   Select Crypto wallet
//                 </label>
//                 <select
//                   name="cryptowallet"
//                   id="cryptowallet"
//                   className="form-select"
//                   value={cryptoWallet}
//                   onChange={(e) => setCryptoWallet(e.target.value)}
//                   required
//                 >
//                   <option value="">Choose Wallet</option>
//                   <option value="USDT">USDT</option>
//                   <option value="BINANCE">BINANCE</option>
//                   <option value="TON">TON</option>
//                   <option value="BTC">BTC</option>
//                   <option value="TRX">TRX</option>
//                 </select>
//               </div>
//               <div className="form-group my-3">
//                 <label className="fw-bold fs-4 my-2" htmlFor="walletaddress">
//                   Recipient Wallet Address
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control py-3"
//                   value={walletAddress}
//                   onChange={(e) => setWalletAddress(e.target.value)}
//                   required
//                 />
//               </div>
//             </>
//           )}
//           {selectedMethod === "bank" && (
//             <>
//               <div className="form-group my-3">
//                 <label className="fw-bold fs-4 my-2" htmlFor="bankname">
//                   Bank Name
//                 </label>
//                 <input
//                   type="text"
//                   name="bankname"
//                   className="form-control py-3"
//                   value={bankName}
//                   onChange={(e) => setBankName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group my-3">
//                 <label className="fw-bold fs-4 my-2" htmlFor="accountNumber">
//                   Bank Account Number
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control py-3"
//                   value={bankAccountNumber}
//                   onChange={(e) => setBankAccountNumber(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group my-3">
//                 <label className="fw-bold fs-4 my-2" htmlFor="phonenumber">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   className="form-control py-3"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   required
//                 />
//               </div>
//             </>
//           )}
//           <div className="form-group my-3">
//             <label className="fw-bold fs-4 my-2" htmlFor="withdrawalPassword">
//               Enter Withdrawal Password
//             </label>
//             <input
//               type="password"
//               className="form-control py-3"
//               value={withdrawalPassword}
//               onChange={(e) => setWithdrawalPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="my-4 text-center">
//             <button
//               className="rounded-pill py-2 w-75 border-0 draw-btn fw-bold text-light fs-5"
//               type="submit"
//             >
//               Withdraw Now
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Withdrawal;



import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import axios from "axios";
import SliderToggle from "../SliderToggle/SliderToggle";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Withdrawal.css'

const Withdrawal = () => {
  const [selectedMethod, setSelectedMethod] = useState("crypto");
  const [amount, setAmount] = useState("");
  const [availableBalance, setAvailableBalance] = useState(0);
  const [cryptoWallet, setCryptoWallet] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [withdrawalPassword, setWithdrawalPassword] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("https://example.com/api/balance", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setAvailableBalance(response.data.balance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };
    fetchBalance();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      selectedMethod === "crypto" &&
      (!amount || !cryptoWallet || !walletAddress || !withdrawalPassword)
    ) {
      alert("Please fill in all fields for crypto withdrawal");
      return;
    }
    if (
      selectedMethod === "bank" &&
      (!amount || !bankName || !bankAccountNumber || !phoneNumber || !withdrawalPassword)
    ) {
      alert("Please fill in all fields for bank withdrawal");
      return;
    }

    const withdraw = async () => {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          "https://example.com/api/withdraw",
          {
            amount,
            ...(selectedMethod === "crypto" && {
              cryptoWallet,
              walletAddress,
              withdrawalPassword,
            }),
            ...(selectedMethod === "bank" && {
              bankName,
              bankAccountNumber,
              phoneNumber,
              withdrawalPassword,
            }),
          },
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        alert("Withdrawal successful");
      } catch (error) {
        console.error("Error processing withdrawal:", error);
        alert("Error processing withdrawal");
      }
    };
    withdraw();
  };

  console.log("Selected Method:", selectedMethod);
  console.log("Crypto Wallet:", cryptoWallet);
  console.log("Wallet Address:", walletAddress);
  console.log("Bank Name:", bankName);
  console.log("Bank Account Number:", bankAccountNumber);
  console.log("Phone Number:", phoneNumber);

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-auto">
          <Link to={"/account"}>
            <i className="bi bi-arrow-left fs-3 text-dark"></i>
          </Link>
        </div>
        <div className="col-auto mx-auto">
          <h1>Withdrawal</h1>
        </div>
      </div>
      <SliderToggle selectedMethod={selectedMethod} setSelectedMethod={setSelectedMethod} />
      <form
        className="px-2"
        onSubmit={handleSubmit}
        key={selectedMethod} // Force re-render when method changes
      >
        <div className="row">
          <div className="col-auto">
            <div className="form-group my-3">
              <label className="fw-bold fs-4 my-2" htmlFor="withdrawal">
                Enter Amount
              </label>
              <input
                className="form-control py-3"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>
          <div className="col-auto">
            <div className="form-group my-3">
              <label className="fw-bold fs-4 my-2" htmlFor="availableBalance">
                Available for withdrawal
              </label>
              <input
                type="number"
                className="form-control py-3 bg-secondary border-dark border-5 avia-bal"
                value={availableBalance}
                readOnly
              />
            </div>
          </div>
        </div>
        {selectedMethod === "crypto" && (
          <>
            <div className="form-group my-3">
              <label className="fw-bold fs-4 my-2" htmlFor="cryptowallet">
                Select Crypto wallet
              </label>
              <select
                name="cryptowallet"
                id="cryptowallet"
                className="form-select py-3"
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
                Recipient Wallet Address
              </label>
              <input
                type="text"
                className="form-control py-3"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                required
              />
            </div>
          </>
        )}
        {selectedMethod === "bank" && (
          <>
            <div className="form-group my-3">
              <label className="fw-bold fs-4 my-2" htmlFor="bankname">
                Bank Name
              </label>
              <input
                type="text"
                name="bankname"
                className="form-control py-3"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                required
              />
            </div>
            <div className="form-group my-3">
              <label className="fw-bold fs-4 my-2" htmlFor="accountNumber">
                Bank Account Number
              </label>
              <input
                type="number"
                className="form-control py-3"
                value={bankAccountNumber}
                onChange={(e) => setBankAccountNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group my-3">
              <label className="fw-bold fs-4 my-2" htmlFor="phonenumber">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control py-3"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </>
        )}
        <div className="form-group my-3">
          <label className="fw-bold fs-4 my-2" htmlFor="withdrawalPassword">
            Enter Withdrawal Password
          </label>
          <input
            type="password"
            className="form-control py-3"
            value={withdrawalPassword}
            onChange={(e) => setWithdrawalPassword(e.target.value)}
            required
          />
        </div>
        <div className="my-4 text-center">
          <button
            className="btn rounded-pill py-2 w-75 border-0 draw-btn fw-bold text-light fs-5"
            type="submit"
          >
            Withdraw Now
          </button>
        </div>
      </form>
    </div>
  );
};

Withdrawal.propTypes = {
  selectedMethod: PropTypes.string.isRequired,
};

export default Withdrawal; 



// import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Select from 'react-select';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const Withdrawal = () => {
//   const [selectedMethod, setSelectedMethod] = useState("crypto");
//   const [amount, setAmount] = useState("");
//   const [availableBalance, setAvailableBalance] = useState(0);
//   const [cryptoWallet, setCryptoWallet] = useState("");
//   const [walletAddress, setWalletAddress] = useState("");
//   const [withdrawalPassword, setWithdrawalPassword] = useState("");
//   const [bankName, setBankName] = useState("");
//   const [bankAccountNumber, setBankAccountNumber] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");

//   useEffect(() => {
//     const fetchBalance = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("https://example.com/api/balance", {
//           headers: {
//             Authorization: `Token ${token}`,
//           },
//         });
//         setAvailableBalance(response.data.balance);
//       } catch (error) {
//         console.error("Error fetching balance:", error);
//       }
//     };
//     fetchBalance();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       selectedMethod === "crypto" &&
//       (!amount || !cryptoWallet || !walletAddress || !withdrawalPassword)
//     ) {
//       alert("Please fill in all fields for crypto withdrawal");
//       return;
//     }
//     if (
//       selectedMethod === "bank" &&
//       (!amount || !bankName || !bankAccountNumber || !phoneNumber || !withdrawalPassword)
//     ) {
//       alert("Please fill in all fields for bank withdrawal");
//       return;
//     }

//     const withdraw = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         await axios.post(
//           "https://example.com/api/withdraw",
//           {
//             amount,
//             ...(selectedMethod === "crypto" && {
//               cryptoWallet,
//               walletAddress,
//               withdrawalPassword,
//             }),
//             ...(selectedMethod === "bank" && {
//               bankName,
//               bankAccountNumber,
//               phoneNumber,
//               withdrawalPassword,
//             }),
//           },
//           {
//             headers: {
//               Authorization: `Token ${token}`,
//             },
//           }
//         );
//         alert("Withdrawal successful");
//       } catch (error) {
//         console.error("Error processing withdrawal:", error);
//         alert("Error processing withdrawal");
//       }
//     };
//     withdraw();
//   };

//   const options = [
//     { value: 'USDT', label: <><i className="fab fa-usd"></i> USDT</> },
//     { value: 'BINANCE', label: <><i className="fab fa-binance"></i> BINANCE</> },
//     { value: 'TON', label: <><i className="fab fa-ton"></i> TON</> },
//     { value: 'BTC', label: <><i className="fab fa-btc"></i> BTC</> },
//     { value: 'TRX', label: <><i className="fab fa-trx"></i> TRX</> },
//   ];

//   return (
//     <div className="container">
//       <div className="row my-5">
//         <div className="col-auto">
//           <Link to={"/account"}>
//             <i className="bi bi-arrow-left fs-3 text-dark"></i>
//           </Link>
//         </div>
//         <div className="col-auto mx-auto">
//           <h1>Withdrawal</h1>
//         </div>
//       </div>
//       <div>
//         <form className="px-2" onSubmit={handleSubmit}>
//           <div className="row">
//             <div className="col-auto">
//               <div className="form-group my-3">
//                 <label className="fw-bold fs-4 my-2" htmlFor="withdrawal">
//                   Enter Amount
//                 </label>
//                 <input
//                   className="form-control py-3"
//                   type="number"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                   min="0"
//                   step="0.01"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="col-auto">
//               <div className="form-group my-3">
//                 <label className="fw-bold fs-4 my-2" htmlFor="availableBalance">
//                   Available for withdrawal
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control py-3 bg-secondary border-dark border-5 avia-bal"
//                   value={availableBalance}
//                   readOnly
//                 />
//               </div>
//             </div>
//           </div>
//           {selectedMethod === "crypto" && (
//             <>
//               <div className="form-group my-3">
//                 <label className="fw-bold fs-4 my-2" htmlFor="cryptowallet">
//                   Select Crypto wallet
//                 </label>
//                 <Select
//                   name="cryptowallet"
//                   id="cryptowallet"
//                   className="form py-3"
//                   value={options.find(option => option.value === cryptoWallet)}
//                   onChange={(option) => setCryptoWallet(option.value)}
//                   options={options}
//                   required
//                 />
//               </div>
//               <div className="form-group my-3">
//                 <label className="fw-bold fs-4 my-2" htmlFor="walletaddress">
//                   Recipient Wallet Address
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control py-3"
//                   value={walletAddress}
//                   onChange={(e) => setWalletAddress(e.target.value)}
//                   required
//                 />
//               </div>
//             </>
//           )}
//           {selectedMethod === "bank" && (
//             <>
//               <div className="form-group my-3">
//                 <label className="fw-bold fs-4 my-2" htmlFor="bankname">
//                   Bank Name
//                 </label>
//                 <input
//                   type="text"
//                   name="bankname"
//                   className="form-control py-3"
//                   value={bankName}
//                   onChange={(e) => setBankName(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group my-3">
//                 <label className="fw-bold fs-4 my-2" htmlFor="accountNumber">
//                   Bank Account Number
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control py-3"
//                   value={bankAccountNumber}
//                   onChange={(e) => setBankAccountNumber(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="form-group my-3">
//                 <label className="fw-bold fs-4 my-2" htmlFor="phonenumber">
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   className="form-control py-3"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   required
//                 />
//               </div>
//             </>
//           )}
//           <div className="form-group my-3">
//             <label className="fw-bold fs-4 my-2" htmlFor="withdrawalPassword">
//               Enter Withdrawal Password
//             </label>
//             <input
//               type="password"
//               className="form-control py-3"
//               value={withdrawalPassword}
//               onChange={(e) => setWithdrawalPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="my-4 text-center">
//             <button
//               className="rounded-pill py-2 w-75 border-0 draw-btn fw-bold text-light fs-5"
//               type="submit"
//             >
//               Withdraw Now
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Withdrawal;