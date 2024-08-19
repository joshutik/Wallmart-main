

import { useState, useEffect } from 'react';
import './GrabOrder.css';
import diamond from '../assets/diamond-icon.png';
import data from '../assets/data-icon.png';
import semilogo from '../assets/walmart-semi-logo.png';
import { Circle } from 'rc-progress';
import Modal1 from '../Modal/Modal1';
import ModalTaskCompleted from '../ModalTaskCompleted/ModalTaskCompleted'; // Import the new modal
import axios from 'axios';
import NavigationBar from '../NavigationBar/NavigationBar';
import NavigationBar2 from '../NavigationBar2/NavigationBar2';

const GrabOrder = () => {
  // State variables
  const djangoHostname = import.meta.env.VITE_DJANGO_HOSTNAME;

  const [balance, setBalance] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [user_level, setUserLevel] = useState("VIP1");
  const [progress, setProgress] = useState(0);
  const [commission1, setCommission1] = useState(0);
  const [commission2, setCommission2] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showTaskCompletedModal, setShowTaskCompletedModal] = useState(false); // State for the task completed modal
  const [grabAttempts, setGrabAttempts] = useState(0); // New state for tracking grabs
  const amount = 10; // Default amount

  // Handler for the "Start grabbing" button click
  const handleGrabClick = () => {
    if (grabAttempts < 3) {
      if ((user_level === "VIP1" && orderCount < 3) ||  (user_level === "VIP2" && orderCount < 2) || (user_level === "VIP3" && orderCount < 12)) {
        setShowModal(true); // Show the payment modal
        setGrabAttempts(prev => prev + 1); // Increment grab attempts
      } else {
        setShowTaskCompletedModal(true); // Show the task completed modal
      }
    } else {
      setShowTaskCompletedModal(true); // Show the task completed modal after 3 attempts
    }
  };

  const handlePay = async () => {
    if (orderCount < 3 && balance >= amount) {
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
        setBalance(balance - amount);
        setOrderCount(orderCount + 1);
        setProgress(progress + 33.3333);
        setCommission2(commission2 + commissionAmount); // Add the commission to the commission state
      } catch (error) {
        console.error("Error during payment:", error);
        // Handle error (show message to the user, etc.)
      }
    }
    setShowModal(false); // Hide the modal after payment
  };

  const handleClose = () => {
    setShowModal(false); // Hide the grab modal
  };

  const handleTaskCompletedClose = () => {
    setShowTaskCompletedModal(false); // Hide the task completed modal
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user_id');

        const response = await axios.get(`${djangoHostname}/api/accounts/users/${user}/`, {
          headers: {
            'Authorization': `Token ${token}`
          }
        });

        const data = response.data;

        setCommission1(data.commission1); // Assuming the response contains a commission1 field
        setCommission2(data.commission2); // Assuming the response contains a commission2 field
        setUserLevel(data.level); // Assuming the response contains a level field
        setBalance(data.balance); // Assuming the response contains a balance field
        setOrderCount(data.grabbed_orders_count); // Assuming the response contains an orderCount field
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [djangoHostname]);

  return (
    <div className="container-fluid pb-5 mb-5 pt-5">
      <NavigationBar2/>
      <h1 className="text-center fw-bold my-5">Order</h1>
      <div className="container py-5">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
            <div className="card parent-card rounded-5 p-4 border-0">
              <div className="child-card w-75 py-3 px-5 border-0 mx-auto text-light rounded-5">
                <div className="icon pb-3">
                  <img src={diamond} alt="diamond-icon" />
                </div>
                <p className="text-light h4">
                  Current Balance <i className="bi bi-chevron-right"></i>
                </p>
                <div>
                  <p className="current-balance fw-bold fs-2">
                    $ <span className="display-1 fw-bold">{balance}</span> USD
                  </p>
                </div>
                <div className="text-end">
                  <img src={semilogo} alt="semi-logo" className="img-fluid w-25" />
                </div>
              </div>
              <hr className="w-75 mx-auto my-5" />
              <div className="fw-bold fs-4 d-flex justify-content-between px-4">
                <div>
                  <img src={data} alt="data-icon" className="img-fluid" />
                </div>
                <p>Yesterday Commission</p>
              </div>
              <div className="px-4">
                <p className="commission fw-bold fs-1">${commission1}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="card parent-card h-50 border-0 rounded-5">
              <div className="card parent-card rounded-5 p-4 border-0">
                <div className="w-50 mx-auto ">
                  <div className="rounded-circle position-relative w-100 p-1 bg-light">
                    <Circle
                      percent={progress}
                      strokeWidth={10}
                      strokeColor="#FFAD31"
                      strokeLinecap="square"
                      trailWidth={10}
                      trailColor="#EEE"
                      gapPosition="bottom"
                    />
                    <h2 className="order-count position-absolute top-50 start-0 end-0 translate-middle-y display-4 w-75 mx-4 my-3 fw-bold text-center">
                      Order <span id="count">{orderCount}</span>
                    </h2>
                  </div>
                </div>
                <hr className="w-75 mx-auto my-5" />
                <div className="fw-bold fs-4 d-flex justify-content-between px-4">
                  <div>
                    <img src={data} alt="data-icon" className="img-fluid" />
                  </div>
                  <p>Today Commission</p>
                </div>
                <div className="px-4">
                  <p className="commission fw-bold fs-1">${commission2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            className="btn w-75 py-3 fw-bold rounded-pill fs-2 grab text-light"
            onClick={handleGrabClick}
            // disabled={balance < amount}
          >
            Start grabbing
          </button>
        </div>
      </div>
      <Modal1 show={showModal} handleClose={handleClose} user_level={user_level} amount={amount} balance={balance} orderCounts={orderCount}/>
      <ModalTaskCompleted show={showTaskCompletedModal} handleClose={handleTaskCompletedClose} />
      <NavigationBar/>
    </div>
  );
};

export default GrabOrder;