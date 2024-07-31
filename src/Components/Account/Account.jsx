// import React from "react";
// import { Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
import profile from "../assets/profile.png";
import { Circle } from "rc-progress";
import diamond from "../assets/diamond-icon.png";
import "./Account.css"; // Make sure to create and style this CSS file
import { Link } from "react-router-dom";
import axios from 'axios';

const Account = () => {
  const djangoHostname = import.meta.env.VITE_DJANGO_HOSTNAME;

  const [invite_code, setInvite_code] = useState(0);
  const [balance, setBalance] = useState(0);
  const [phone, setPhone] = useState(0);


  const progress = 50; // Example progress value

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('user_id')
        const user_invitation_code = localStorage.getItem('user_invitation_code')
    
        const response = await axios.get(`${djangoHostname}/api/accounts/users/${user}/`, {
         
          headers: {
            'Authorization': `Token ${token}`
          }
        });

        const data = response.data;
        // console.log(data)

        setInvite_code(user_invitation_code); // Assuming the response contains a balance field
        setBalance(data.balance); // Assuming the response contains a balance field
        setPhone(data.phone); // Assuming the response contains a balance field

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-fluid dashboard-container">
      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-3 col-md-4 pl-4 sidebar">
          <div className="profile-section text-center py-5">
            <img src={profile} className="img-fluid" alt="Profile" />
            <div className="profile-info px-5">
              <p>
                <strong>Number:</strong> {phone}
              </p>
              <p>
                <strong>Invitation code:</strong> {invite_code}
              </p>
            </div>
          </div>
          <hr />
          <nav className="nav flex-column account-section fw-bold py-5">
            <li>
              <a className="nav-link" href="#">
                <i className="bi bi-person-workspace fs-3"></i> Account
                information
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <i className="bi bi-file-earmark-text fs-3"></i> Order record
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <i className="bi bi-cash-stack fs-3"></i> Recharge record
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <i className="bi bi-wallet2 fs-3"></i> Withdrawal record
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <i className="bi bi-envelope-paper-fill fs-3"></i> Invite friend
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <i className="bi bi-box-arrow-right fs-3 my-2"></i> Log out
              </a>
            </li>
          </nav>
        </div>

        {/* Main Content */}
        <div className="col-lg-9 px-0">
          <div className="main-content pt-5 pb-5">
            <div className="d-flex justify-content-between ms-5 text-light pb-5">
              <div>
                <h2 className="fs-1 fw-bold">Hey JAMES,</h2>
                <p>Welcome back! Ready to grab and get commission.</p>
              </div>
              <div className="w-50 text-end me-5">
                <button className="btn btn-outline-light">
                  <i className="bi bi-camera"></i> Change cover
                </button>
              </div>
            </div>

            <div className="card text-center balance-card rounded-5 w-75 mx-auto">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-sm-12 text-light">
                    <div className="text-start py-3">
                      <img src={diamond} alt="Diamond" className="img-fluid" />
                    </div>
                    <h4 className="border border-3 py-2 text-light rounded-pill fs-5">
                      Account Balance
                    </h4>
                    <p className="fw-bold display-3 text-start">${balance}</p>
                  </div>
                  <div className="col-lg-1 mt-5">
                    <div className="vr h-100"></div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 text-light">
                    <div className="text-start py-3">
                      <img src={diamond} alt="Diamond" className="img-fluid" />
                    </div>
                    <h4 className="border border-3 py-2 text-light rounded-pill">
                      Unsettled
                    </h4>
                    <p className="fw-bold display-3 text-start">$40</p>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 text-light">
                    <div className="w-50 mx-auto my-5">
                      <div className="rounded-circle position-relative w-100 p-3 bg-light">
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
                          VIP <span id="count">1</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center links d-flex justify-content-center rounded-pill py-3 w-50 mx-auto">
              <Link to={'/'} className="me-3 fw-bold border border-2 text-light text-decoration-none px-3 rounded-pill">
              <i className="bi bi-wallet2 fs-3"></i> Quick Withdrawal
              </Link>
              <Link to={'/'} variant="secondary" className="border fw-bold border-2 text-light text-decoration-none px-4 rounded-pill"><i className="bi bi-cash-stack fs-3"></i> Top up now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;