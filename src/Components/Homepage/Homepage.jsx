// // import React from 'react'
// import "./Homepage.css";
// import img1 from "../assets/slider-1.png";
// import img2 from "../assets/slider.png";
// import img3 from "../assets/slider3.png";
// import img4 from "../assets/recharge.png";
// import img5 from "../assets/withdrawal.png";
// import img6 from "../assets/invite.png";
// import NavigationBar from "../NavigationBar/NavigationBar";
// import NavigationBar2 from "../NavigationBar2/NavigationBar2";
// import Usercomision from "../Usercomision/Usercomision";
// import Partners from "../Partners/Partners";
// import { Link } from "react-router-dom";

// const Homepage = () => {
//   return (
//     <div className="container pb-5">
//       <NavigationBar2 />
//       <div
//         id="carouselExampleDark"
//         className="carousel carousel-dark slide rounded-5 my-5 py-5"
//       >
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleDark"
//             data-bs-slide-to="0"
//             className="active bg-light"
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             className=" bg-light"
//             type="button"
//             data-bs-target="#carouselExampleDark"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//           ></button>
//           <button
//             className=" bg-light"
//             type="button"
//             data-bs-target="#carouselExampleDark"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//           ></button>
//         </div>
//         <div className="carousel-inner">
//           <div className="carousel-item active" data-bs-interval="10000">
//             <img src={img1} className="d-block w-100" alt="..." />
//           </div>
//           <div className="carousel-item" data-bs-interval="2000">
//             <img src={img2} className="d-block w-100" alt="..." />
//           </div>
//           <div className="carousel-item">
//             <img src={img3} className="d-block w-100" alt="..." />
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleDark"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleDark"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//       {/* card */}
//       <div className="container-fluid my-5">
//         <div className="container quick rounded-5 py-5 px-3">
//           <div className="row gy-3 justify-content-center text-center">
//             <div className="col-lg-4 col-md-4 col-sm-12">
//               <Link
//                 to={"/recharge-account"}
//                 className="btn W-25 py-2 px-4 bg-transparent rounded-5 border-3 action"
//               >
//                 <img src={img4} className="img-fluid mb-3" alt="" />{" "}
//                 <span className="fw-bold text-light">Recharge Now</span>
//               </Link>
//             </div>
//             <div className="col-lg-4 col-md-4 col-sm-12">
//               <Link
//                 to={"/withdraw"}
//                 className="btn W-25 py-3 px-4 bg-transparent rounded-5 action"
//               >
//                 <img src={img5} className="img-fluid mb-2" alt="" />{" "}
//                 <span className="fw-bold text-light">Quick Withdrawal</span>
//               </Link>
//             </div>
//             <div className="col-lg-4 col-md-4 col-sm-12">
//               <Link
//                 to={"/"}
//                 className="btn W-25 py-2 px-4 bg-transparent rounded-5 action"
//               >
//                 <img src={img6} className="img-fluid mb-2" alt="" />{" "}
//                 <span className="fw-bold text-light">Invite Friend</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <Usercomision />
//       <Partners />
//       </div>
//       <div className="mt-5">
//         <NavigationBar />
//       </div>
//     </div>
//   );
// };

// export default Homepage;

// import { useState } from "react";
// import "./Homepage.css";
// import img1 from "../assets/slider-1.png";
// import img2 from "../assets/slider.png";
// import img3 from "../assets/slider3.png";
// import img4 from "../assets/recharge.png";
// import img5 from "../assets/withdrawal.png";
// import img6 from "../assets/invite.png";
// import NavigationBar2 from "../NavigationBar2/NavigationBar2";
// import NavigationBar from "../NavigationBar/NavigationBar";
// import Usercomision from "../Usercomision/Usercomision";
// import Partners from "../Partners/Partners";
// import { Modal, Button, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const Homepage = () => {
//   const [showRechargeModal, setShowRechargeModal] = useState(false);
//   const [amount, setAmount] = useState("");

//   const handleShowRechargeModal = () => setShowRechargeModal(true);
//   const handleCloseRechargeModal = () => setShowRechargeModal(false);

//   const handleAmountChange = (e) => setAmount(e.target.value);

//   // const [amount, setAmount] = useState(0);

//   const handleAmountClick = (amount) => {
//     setAmount(amount);
//   };

//   const handleRechargeSubmit = (e) => {
//     e.preventDefault();
//     // Add your recharge logic here
//     console.log("Recharge Amount:", amount);
//     setAmount(""); // Clear the input field after submission
//     handleCloseRechargeModal();
//   };

//   return (
//     <div className="container pb-5">
//       <NavigationBar2 />
//       <div
//         id="carouselExampleDark"
//         className="carousel carousel-dark slide rounded-5 my-5 py-5"
//       >
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleDark"
//             data-bs-slide-to="0"
//             className="active bg-light"
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             className=" bg-light"
//             type="button"
//             data-bs-target="#carouselExampleDark"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//           ></button>
//           <button
//             className=" bg-light"
//             type="button"
//             data-bs-target="#carouselExampleDark"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//           ></button>
//         </div>
//         <div className="carousel-inner">
//           <div className="carousel-item active" data-bs-interval="10000">
//             <img src={img1} className="d-block w-100" alt="..." />
//           </div>
//           <div className="carousel-item" data-bs-interval="2000">
//             <img src={img2} className="d-block w-100" alt="..." />
//           </div>
//           <div className="carousel-item">
//             <img src={img3} className="d-block w-100" alt="..." />
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleDark"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleDark"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//       {/* card */}
//       <div className="container-fluid my-5">
//         <div className="container quick rounded-5 py-5 px-3">
//           <div className="row gy-3 justify-content-center text-center">
//             <div className="col-lg-4 col-md-4 col-sm-12">
//               <Button
//                 onClick={handleShowRechargeModal}
//                 className="btn W-25 py-2 px-4 bg-transparent rounded-5 border-3 action"
//               >
//                 <img src={img4} className="img-fluid mb-3" alt="" />{" "}
//                 <span className="fw-bold text-light">Recharge Now</span>
//               </Button>
//             </div>
//             <div className="col-lg-4 col-md-4 col-sm-12">
//               <Link
//                 to={"/withdraw"}
//                 className="btn W-25 py-3 px-4 bg-transparent rounded-5 action"
//               >
//                 <img src={img5} className="img-fluid mb-2" alt="" />{" "}
//                 <span className="fw-bold text-light">Quick Withdrawal</span>
//               </Link>
//             </div>
//             <div className="col-lg-4 col-md-4 col-sm-12">
//               <Link
//                 to={"/"}
//                 className="btn W-25 py-2 px-4 bg-transparent rounded-5 action"
//               >
//                 <img src={img6} className="img-fluid mb-2" alt="" />{" "}
//                 <span className="fw-bold text-light">Invite Friend</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <Usercomision />
//         <Partners />
//       </div>
//       <div className="mt-5">
//         <NavigationBar />
//       </div>

//       {/* Recharge Modal */}
//       <Modal show={showRechargeModal} onHide={handleCloseRechargeModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Recharge Amount</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleRechargeSubmit}>
//             <Form.Group className="mb-3" controlId="formBasicAmount">
//               <div className="container">
//                 <div className="row gy-3">
//                   <div className="col-lg-12 col-md-6 col-sm-12 d-flex recharge-btn">
//                     <button
//                       className="btn border w-100 fw-bold mx-2"
//                       onClick={() => handleAmountClick(10)}
//                     >
//                       $10
//                     </button>
//                     <button
//                       className="btn border fw-bold w-100 mx-2"
//                       onClick={() => handleAmountClick(30)}
//                     >
//                       $30
//                     </button>
//                   </div>
//                   <div className="col-lg-12 col-md-6 col-sm-12 d-flex recharge-btn">
//                     <button
//                       className="btn border fw-bold w-100 mx-2"
//                       onClick={() => handleAmountClick(40)}
//                     >
//                       $40
//                     </button>
//                     <button
//                       className="btn border fw-bold w-100 mx-2"
//                       onClick={() => handleAmountClick(50)}
//                     >
//                       $50
//                     </button>
//                   </div>
//                   <div className="col-lg-12 col-md-6 col-sm-12 d-flex recharge-btn">
//                     <button
//                       className="btn border fw-bold w-100 mx-2"
//                       onClick={() => handleAmountClick(60)}
//                     >
//                       $60
//                     </button>
//                     <button
//                       className="btn border fw-bold w-100 mx-2"
//                       onClick={() => handleAmountClick(80)}
//                     >
//                       $80
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <Link
//                             to={"/recharge-account"}
//                             type="button"
//                             className="recharge text-light fw-bold rounded-pill text-decoration-none w-75 border-0 py-2"
//                             onClick={makePayment}
//                             disabled={amount === 0 || loading}
//                           >
//                             {loading ? "Processing..." : "Recharge now"}
//                           </Link>
//               {/* <Form.Label>Amount</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="Enter amount"
//                 value={amount}
//                 onChange={handleAmountChange}
//                 required
//               />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Recharge
//             </Button> */}
//           </Form.Group>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default Homepage;






import { useState } from "react";
import "./Homepage.css";
import img1 from "../assets/slider-1.png";
import img2 from "../assets/slider.png";
import img3 from "../assets/slider3.png";
import img4 from "../assets/recharge.png";
import img5 from "../assets/withdrawal.png";
import img6 from "../assets/invite.png";
import NavigationBar2 from "../NavigationBar2/NavigationBar2";
import NavigationBar from "../NavigationBar/NavigationBar";
import Usercomision from "../Usercomision/Usercomision";
import Partners from "../Partners/Partners";
import { Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";


const Homepage = () => {
  const [showRechargeModal, setShowRechargeModal] = useState(false);
  const [amount, setAmount] = useState("");

  const handleShowRechargeModal = () => setShowRechargeModal(true);
  const handleCloseRechargeModal = () => setShowRechargeModal(false);
  const [loading, setLoading] = useState(false);


  // const handleAmountChange = (e) => setAmount(e.target.value);

  const handleAmountClick = (amount) => {
    setAmount(amount);
  };

  const handleRechargeSubmit = (e) => {
    e.preventDefault();
    console.log("Recharge Amount:", amount);
    setAmount(""); // Clear the input field after submission
    handleCloseRechargeModal();
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

  return (
    <div className="container pb-5">
      <NavigationBar2 />
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide rounded-5 my-5 py-5"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active bg-light"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            className=" bg-light"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            className=" bg-light"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* card */}
      <div className="container-fluid my-5">
        <div className="container quick rounded-5 py-5 px-3">
          <div className="row gy-3 justify-content-center text-center">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <Button
                onClick={handleShowRechargeModal}
                className="btn W-25 py-2 px-4 bg-transparent rounded-5 border-3 action"
              >
                <img src={img4} className="img-fluid mb-3" alt="" />{" "}
                <span className="fw-bold text-light">Recharge Now</span>
              </Button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <Link
                to={"/withdraw"}
                className="btn W-25 py-3 px-4 bg-transparent rounded-5 action"
              >
                <img src={img5} className="img-fluid mb-2" alt="" />{" "}
                <span className="fw-bold text-light">Quick Withdrawal</span>
              </Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <Link
                to={"/"}
                className="btn W-25 py-2 px-4 bg-transparent rounded-5 action"
              >
                <img src={img6} className="img-fluid mb-2" alt="" />{" "}
                <span className="fw-bold text-light">Invite Friend</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Usercomision />
        <Partners />
      </div>
      <div className="mt-5">
        <NavigationBar />
      </div>

      {/* Recharge Modal */}
      <Modal show={showRechargeModal} onHide={handleCloseRechargeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Recharge Amount</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleRechargeSubmit}>
            <Form.Group className="mb-3" controlId="formBasicAmount">
              
              <div className="container">
                <div className="row gy-3">
                  <div className="col-lg-12 col-md-6 col-sm-12 d-flex recharge-btn">
                    <button
                      className="btn border w-100 fw-bold mx-2"
                      onClick={() => handleAmountClick(20)}
                    >
                      $20
                    </button>
                    <button disabled
                      className="btn border fw-bold w-100 mx-2"
                      onClick={() => handleAmountClick(40)}
                    >
                      $40
                    </button>
                  </div>
                  <div className="col-lg-12 col-md-6 col-sm-12 d-flex recharge-btn">
                    <button disabled
                      className="btn border fw-bold w-100 mx-2"
                      onClick={() => handleAmountClick(70)}
                    >
                      $70
                    </button>
                    <button disabled
                      className="btn border fw-bold w-100 mx-2"
                      onClick={() => handleAmountClick(120)}
                    >
                      $120
                    </button>
                  </div>
                  <div className="col-lg-12 col-md-6 col-sm-12 d-flex recharge-btn">
                    <button disabled
                      className="btn border fw-bold w-100 mx-2"
                      onClick={() => handleAmountClick(200)}
                    >
                      $200
                    </button>
                    <button disabled
                      className="btn border fw-bold w-100 mx-2"
                      onClick={() => handleAmountClick(500)}
                    >
                      $500
                    </button>
                  </div>
                </div>
              </div>
              <Link
                to={"/recharge-account"}
                type="button"
                className="recharge text-light fw-bold my-4 rounded-pill text-decoration-none w-75 border-0 py-2"
                onClick={makePayment}
                disabled={amount === 0 || loading}
              >
                {loading ? "Processing..." : "Recharge now"}
              </Link>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={handleAmountChange}
                required
              />
            </Form.Group> */}
            {/* <Button variant="primary" type="submit">
              Recharge
            </Button> */}
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Homepage;
