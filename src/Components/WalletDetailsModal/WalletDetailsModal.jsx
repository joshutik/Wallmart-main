
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Alert } from 'react-bootstrap';
import './WalletDetailsModal.css';

const WalletDetailsModal = ({ show, handleClose }) => {
  const [cryptoWallet, setCryptoWallet] = useState("");
  const [currentCryptoWalletAddress, setCurrentCryptoWalletAddress] = useState("");
  const [newCryptoWalletAddress, setNewCryptoWalletAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [flashMessage, setFlashMessage] = useState("");
  const [flashVariant, setFlashVariant] = useState("");

  const djangoHostname = import.meta.env.VITE_DJANGO_HOSTNAME;

  useEffect(() => {
    if (show) {
      const fetchWalletDetails = async () => {
        try {
          const response = await fetch(`${djangoHostname}/api/payments/crypto-wallets/1/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            const data = await response.json();
            setCurrentCryptoWalletAddress(data.wallet_address);
            setCryptoWallet(data.wallet_type);

          } else {
            setFlashVariant("danger");
            setFlashMessage("Failed to fetch wallet details.");
          }
        } catch (error) {
          console.error("Error:", error);
          setFlashVariant("danger");
          setFlashMessage("An error occurred while fetching wallet details.");
        }
      };

      fetchWalletDetails();
    }
  }, [show, djangoHostname]);

  const handleSubmit = async () => {
    if (!newCryptoWalletAddress) {
      setFlashVariant("warning");
      setFlashMessage("Please enter a new wallet address.");
      return;
    }

    setLoading(true);
    setFlashMessage(""); // Clear previous messages

    try {
      const response = await fetch(`${djangoHostname}/api/payments/crypto-wallets/1/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ wallet_address: newCryptoWalletAddress }),
      });

      if (response.ok) {
        setCurrentCryptoWalletAddress(newCryptoWalletAddress);
        setFlashVariant("success");
        setFlashMessage("Wallet address updated successfully!");
      } else {
        setFlashVariant("danger");
        setFlashMessage("Failed to update wallet address.");
      }
    } catch (error) {
      console.error("Error:", error);
      setFlashVariant("danger");
      setFlashMessage("An error occurred while updating wallet address.");
    }

    setLoading(false);
    //handleClose(); // Close the modal after submission
  };

  const handleCopy = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert("Address copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
      });
  };



  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Wallet Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Flash message */}
        {flashMessage && (
          <Alert variant={flashVariant} onClose={() => setFlashMessage("")} dismissible>
            {flashMessage}
          </Alert>
        )}

        <div className="my-3">
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
            <option value="TRC20">TRC20</option>
          </select>
        </div>
        <div className="my-3 text-start">
          <label className="my-2" htmlFor="walletaddress">
            Current Wallet Address
          </label>
          <input
            type="text"
            className="form-control py-3 rounded-4 w-100 text-dark border"
            value={currentCryptoWalletAddress}
            readOnly
          />
        </div>
        <div className="my-3 text-start">
          <label className="my-2" htmlFor="newwalletaddress">
            New Wallet Address
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control py-3 rounded-4 w-100 text-dark border"
              value={newCryptoWalletAddress}
              onChange={(e) => setNewCryptoWalletAddress(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              onClick={() => handleCopy(newCryptoWalletAddress)}
              title="Copy Address"
            >
              <i className="bi bi-clipboard"></i>
            </button>
          </div>
        </div>
        <div className="my-4">
          <button className="btn crpt text-light" onClick={handleSubmit} disabled={loading}>
            {loading ? "Updating..." : "Submit"}
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

WalletDetailsModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default WalletDetailsModal;

