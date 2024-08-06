// import { useState } from "react";
// import profile from "../assets/profile.png";
// import { Circle } from "rc-progress";
// import diamond from "../assets/diamond-icon.png";
// import "./Account.css";
// import { Link } from "react-router-dom";
// // import NavigationBar from "../NavigationBar/NavigationBar";

// const Account = () => {
//   const progress = 33.3333;
//   const [showModal, setShowModal] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const handleTopUpClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="container-fluid dashboard-container">
//       <div className="row pb-5 mb-5">
//         {/* Sidebar */}
//         <div className={`col-lg-3 col-md-4 pl-4 sidebar ${sidebarOpen ? 'open' : ''}`}>
//           <div className="profile-section text-center py-5">
//             <img src={profile} className="img-fluid" alt="Profile" />
//             <div className="profile-info px-5">
//               <p>
//                 <strong>Number:</strong> 8766-766-5654
//               </p>
//               <p>
//                 <strong>Invitation code:</strong> 00943
//               </p>
//             </div>
//           </div>
//           <hr />
//           <nav className="nav flex-column account-section fw-bold py-5">
//             <li>
//               <a className="nav-link" href="#">
//                 <i className="bi bi-person-workspace fs-3"></i> Account
//                 information
//               </a>
//             </li>
//             <li>
//               <a className="nav-link" href="#">
//                 <i className="bi bi-file-earmark-text fs-3"></i> Order record
//               </a>
//             </li>
//             <li>
//               <a className="nav-link" href="#">
//                 <i className="bi bi-cash-stack fs-3"></i> Recharge record
//               </a>
//             </li>
//             <li>
//               <a className="nav-link" href="#">
//                 <i className="bi bi-wallet2 fs-3"></i> Withdrawal record
//               </a>
//             </li>
//             <li>
//               <a className="nav-link" href="#">
//                 <i className="bi bi-envelope-paper-fill fs-3"></i> Invite friend
//               </a>
//             </li>
//             <li>
//               <a className="nav-link" href="#">
//                 <i className="bi bi-box-arrow-right fs-3 my-2"></i> Log out
//               </a>
//             </li>
//           </nav>
//         </div>

//         {/* Sidebar Toggle Button */}
//         <button
//           className="sidebar-toggle d-md-none"
//           onClick={toggleSidebar}
//         >
//           ☰
//         </button>

//         {/* Main Content */}
//         <div className="col-lg-9 px-0">
//           <div className="main-content pt-5 pb-5">
//             <div className="d-flex justify-content-between ms-5 text-light pb-5">
//               <div>
//                 <h2 className="fs-1 fw-bold">Hey JAMES,</h2>
//                 <p>Welcome back! Ready to grab and get commission.</p>
//               </div>
//               <div className= text-end me-5">
//                 <button className="btn btn-outline-light">
//                   <i className="bi bi-camera"></i> Change cover
//                 </button>
//               </div>
//             </div>

//             <div className="card text-center balance-card rounded-5 w-75 mx-auto">
//               <div className="container">
//                 <div className="row justify-content-center align-items-center">
//                   <div className="col-lg-4 col-md-6 col-sm-12 text-light">
//                     <div className="text-start py-3">
//                       <img src={diamond} alt="Diamond" className="img-fluid" />
//                     </div>
//                     <h4 className="border border-3 py-2 text-light rounded-pill fs-5">
//                       Account Balance
//                     </h4>
//                     <p className="fw-bold display-3 text-start">$30</p>
//                   </div>
//                   <div className="col-lg-1 mt-5 d-sm-none d-lg-block">
//                     <div className="vr h-100"></div>
//                   </div>
//                   <div className="col-lg-3 col-md-6 col-sm-12 text-light">
//                     <h4 className="border border-3 py-2 text-light rounded-pill mt-5">
//                       Unsettled
//                     </h4>
//                     <p className="fw-bold display-3 text-start">$40</p>
//                   </div>
//                   <div className="col-lg-4 col-md-6 col-sm-12 text-light">
//                     <div className="w-100 mx-auto my-5">
//                       <div className="rounded-circle position-relative w-100 p-3 bg-light">
//                         <Circle
//                           percent={progress}
//                           strokeWidth={10}
//                           strokeColor="#FFAD31"
//                           strokeLinecap="square"
//                           trailWidth={10}
//                           trailColor="#EEE"
//                           gapPosition="bottom"
//                         />
//                         <h2 className="vip-count position-absolute top-50 start-0 end-0 translate-middle-y display-5 w-75 mx-4 my-3 fw-bold text-center">
//                           VIP<br/> <span id="count">1</span>
//                         </h2>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="my-5 text-center justify-content-center mb-5">
//               <div className="container card links" >
//               <div className="row py-3 py-lg-4 px-5 mx-auto rounded-pill pb-5">
//                 <div className="col-lg-6 col-md-6 col-sm-6 mb-3 mb-md-0">
//                   <Link
//                     to="/"
//                     className="fw-bold border border-2 text-light action text-decoration-none px-3 py-2 rounded-pill d-block"
//                   >
//                     <i className="bi bi-wallet2 fs-3"></i> Quick Withdrawal
//                   </Link>
//                 </div>
//                 <div className="col-lg-6 col-md-6 col-sm-6">
//                   <Link
//                     onClick={handleTopUpClick}
//                     className="fw-bold border action border-2 text-light text-decoration-none px-2 py-2 rounded-pill d-block"
//                   >
//                     <i className="bi bi-cash-stack fs-3"></i> Top up now
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             </div>
//           </div>
//           {showModal && (
//             <div className="modal show d-block" tabIndex="-1" role="dialog">
//               <div className="modal-dialog" role="document">
//                 <div className="modal-content">
//                   <div className="modal-header">
//                     <h5 className="modal-title">Top Up</h5>
//                     <button
//                       type="button"
//                       className="close"
//                       onClick={handleCloseModal}
//                     >
//                       <span>&times;</span>
//                     </button>
//                   </div>
//                   <div className="modal-body">
//                     <p>Modal content goes here...</p>
//                   </div>
//                   <div className="modal-footer">
//                     <button
//                       type="button"
//                       className="btn btn-secondary"
//                       onClick={handleCloseModal}
//                     >
//                       Close
//                     </button>
//                     <button type="button" className="btn btn-primary">
//                       Save changes
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <div>
//         {/* <NavigationBar /> */}
//       </div>
//     </div>
//   );
// };

// export default Account;

import { useState, useEffect } from "react";
import user from "../assets/user.png";
import { Circle } from "rc-progress";
import diamond from "../assets/diamond-icon.png";
import "./Account.css";
import { Link } from "react-router-dom";
import axios from "axios";
import NavigationBar from "../NavigationBar/NavigationBar";

const Account = () => {
  const djangoHostname = import.meta.env.VITE_DJANGO_HOSTNAME;

  const [invite_code, setInvite_code] = useState(0);
  const [balance, setBalance] = useState(0);
  const [unsettle, setUnsettle] = useState(0);

  const [phone, setPhone] = useState(0);

  const progress = 33.3333;
  const [showModal, setShowModal] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(user);
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [level, setLevel] = useState("VIP1");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user_id");
        const user_invitation_code = localStorage.getItem(
          "user_invitation_code"
        );

        const response = await axios.get(
          `${djangoHostname}/api/accounts/users/${user}/`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );

        const data = response.data;
     
        setInvite_code(user_invitation_code);
        setBalance(data.balance);
        setUnsettle(data.unsettle); 
        setPhone(data.phone);
        setLevel(data.level);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [djangoHostname]);

  useEffect(() => {
    // Load the Flutterwave script dynamically
    const script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleTopUpClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const makePayment = () => {
    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
      tx_ref: "titanic-48981487343MDI0NzMx",
      amount: amount,
      currency: "USD",
      payment_options: "card, mobilemoneyghana, ussd",
      callback: function (payment) {
        // Send AJAX verification request to backend
        // verifyTransactionOnBackend(payment.id);
      },
      onclose: function (incomplete) {
        if (incomplete || window.verified === false) {
          document.querySelector("#payment-failed").style.display = "block";
        } else {
          document.querySelector("form").style.display = "none";
          if (window.verified == true) {
            document.querySelector("#payment-success").style.display = "block";
          } else {
            document.querySelector("#payment-pending").style.display = "block";
          }
        }
      },
      // redirect_url: "https://wallmart-main.vercel.app/",
      meta: {
        consumer_id: 23,
        consumer_mac: "92a3-912ba-1192a",
      },
      customer: {
        email: localStorage.getItem("phone") || "08146955393",
        phone_number: localStorage.getItem("phone") || "08146955393",
        name: localStorage.getItem("phone") || "08146955393",
      },
      customizations: {
        title: "The Titanic Store",
        description: "Payment for an awesome cruise",
        logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
      },
    });
  };

  const handleAmountClick = (amount) => {
    setAmount(amount);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container-fluid dashboard-container">
      <div className="row pb-5 mb-5">
        {/* Sidebar */}
        <div
          className={`col-lg-3 col-md-4 pl-4 sidebar ${
            sidebarOpen ? "open" : ""
          }`}
        >
          <div className="profile-section text-center py-5">
            <label
              htmlFor="profile-pic-upload"
              className="profile-pic-label position-relative"
            >
              <img
                src={profilePic}
                className="img-fluid h-25 w-50 profile-pic rounded-circle"
                alt="Profile"
              />
              <i className="bi bi-camera fs-3 text-light position-absolute start-50 end-0 bottom-100 top-0 me-5"></i>
            </label>

            <input
              type="file"
              id="profile-pic-upload"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleProfilePicChange}
            />
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

        {/* Sidebar Toggle Button */}
        {/* <button
          className="sidebar-toggle d-md-none bg-transparent border-dark border-3"
          onClick={toggleSidebar}
        >
          ☰
        </button> */}
        <button
          className={`sidebar-toggle d-md-none fs-1 ${
            sidebarOpen ? "cancel" : ""
          } ${isScrolled ? "scrolled border border-dark border-1 rounded-3 text-dark" : "bg-transparent"}`}
          onClick={toggleSidebar}
        >
          {sidebarOpen ? "×" : "☰"}
        </button>

        {/* Main Content */}
        <div className="col-lg-9 px-0">
          <div className="main-content pt-5 pb-5">
            <div className="d-flex justify-content-between ms-5 text-light pb-5">
              <div>
                <h2 className="fs-1 fw-bold">Hey JAMES,</h2>
                <p>Welcome back! Ready to grab and get commission.</p>
              </div>
              {/* <div className="w-50 text-end me-5">
                <button className="btn btn-outline-light">
                  <i className="bi bi-camera"></i> Change cover
                </button>
              </div> */}
            </div>

            <div className=" text-center  rounded-5 w-75 balance-card mx-auto">
              <div className="container-fluid">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-4 col-md-4 col-sm-12 text-light">
                    <div className="text-start py-2 mt-1">
                      <img src={diamond} alt="Diamond" className="img-fluid" />
                    </div>
                    <h4 className="border border-3 py-2 text-light rounded-pill fs-5">
                      Account Balance
                    </h4>
                    <p className="fw-bold text-center display-1">${balance}</p>
                  </div>
                  <div className="col-lg-1 mt-5 d-none d-lg-block">
                    <div className="vr h-100"></div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 text-light">
                    <h4 className="border border-3 py-2 text-light rounded-pill mt-5">
                      Unsettled
                    </h4>
                    <p className="fw-bold display-1 text-start text-center ">
                      ${unsettle}
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 text-light">
                    <div className="w-100 mx-auto my-5">
                      <div className="rounded-circle position-relative w-75 mx-auto p-3 bg-light">
                        <Circle
                          percent={progress}
                          strokeWidth={10}
                          strokeColor="#FFAD31"
                          strokeLinecap="square"
                          trailWidth={10}
                          trailColor="#EEE"
                          gapPosition="bottom"
                        />
                        <h2 className="vip-count position-absolute top-50 start-0 end-0 translate-middle-y display-5 w-75 mx-4 my-2 fw-bold text-center">
                          {level}
                          {/* {level}<br/> <span id="count">1</span> */}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-5 text-center mb-5">
              <div className="links">
                <div className="row justify-content-center pt-5 px-5 rounded-pill pb-5">
                  <div className="col-lg-4 col-md-6 col-sm-6 mb-3 mb-md-0">
                    <Link
                      to="/withdraw"
                      className="fw-bold border border-2 text-light action text-decoration-none px-3 py-2 rounded-pill d-block "
                    >
                      <i className="bi bi-wallet2 fs-3"></i> Quick Withdrawal
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <Link
                      onClick={handleTopUpClick}
                      className="fw-bold border action border-2 text-light text-decoration-none px-2 py-2 rounded-pill d-block"
                    >
                      <i className="bi bi-cash-stack fs-3"></i> Top up now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showModal && (
            <div className="modal show  d-block" tabIndex="-3" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content top-up">
                  <div className="modal-header">
                    <h5 className="modal-title ms-auto">Top Up Account</h5>
                    <button
                      type="button"
                      className="close border-0 ms-auto fs-1 bg-transparent"
                      onClick={handleCloseModal}
                    >
                      <span>&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p>Select recharge amount...</p>
                    <hr />
                    <div className="container">
                      <div className="row gy-3">
                        <div className="col-lg-12 col-md-6 col-sm-12 d-flex recharge-btn">
                          <button
                            className="btn border w-100 fw-bold mx-2"
                            onClick={() => handleAmountClick(10)}
                          >
                            $10
                          </button>
                          <button
                            className="btn border fw-bold w-100 mx-2"
                            onClick={() => handleAmountClick(30)}
                          >
                            $30
                          </button>
                        </div>
                        <div className="col-lg-12 col-md-6 col-sm-12 d-flex recharge-btn">
                          <button
                            className="btn border fw-bold w-100 mx-2"
                            onClick={() => handleAmountClick(40)}
                          >
                            $40
                          </button>
                          <button
                            className="btn border fw-bold w-100 mx-2"
                            onClick={() => handleAmountClick(50)}
                          >
                            $50
                          </button>
                        </div>
                        <div className="col-lg-12 col-md-6 col-sm-12 d-flex recharge-btn">
                          <button
                            className="btn border fw-bold w-100 mx-2"
                            onClick={() => handleAmountClick(60)}
                          >
                            $60
                          </button>
                          <button
                            className="btn border fw-bold w-100 mx-2"
                            onClick={() => handleAmountClick(80)}
                          >
                            $80
                          </button>
                        </div>
                        <div className="mt-5">
                          <Link
                            to={"/recharge-account"}
                            type="button"
                            className="recharge text-light fw-bold rounded-pill w-75 border-0 py-2"
                            onClick={makePayment}
                            disabled={amount === 0 || loading}
                          >
                            {loading ? "Processing..." : "Recharge now"}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer mx-auto">
                    <button
                      type="button"
                      className="btn bg-transparent fw-bold fs-3"
                      onClick={handleCloseModal}
                    >
                      <span>&times;</span>
                    </button>
                    {/* <button type="button" className="btn btn-primary">
                      Save changes
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          )}
          <NavigationBar/>
        </div>
      </div>
    </div>
  );
};

export default Account;
