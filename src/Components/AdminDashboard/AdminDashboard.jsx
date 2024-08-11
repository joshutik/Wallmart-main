// import "./AdminDashboard.css"; // Optional for custom styling if needed

// const AdminDashboard = () => {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-3 col-md-3 col-sm-12">
//           <div className="flex-shrink-0 p-3" style={{ width: "280px" }}>
//             <a
//               href="/"
//               className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
//             >
//               <svg className="bi pe-none me-2" width="30" height="24">
//                 <use xlinkHref="#bootstrap" />
//               </svg>
//               <span className="fs-5 fw-semibold">Collapsible</span>
//             </a>
//             <ul className="list-unstyled ps-0">
//               <li className="mb-1">
//                 <button
//                   className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#home-collapse"
//                   aria-expanded="true"
//                 >
//                   <i className="bi bi-house-door-fill me-2"></i> Home
//                 </button>
//                 <div className="collapse show" id="home-collapse">
//                   <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//                     <li>
//                       <a
//                         href="#"
//                         className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                       >
//                         <i className="bi bi-grid-fill me-2"></i> Overview
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                       >
//                         <i className="bi bi-arrow-repeat me-2"></i> Updates
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                       >
//                         <i className="bi bi-bar-chart-line-fill me-2"></i> Reports
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </li>
//               <li className="mb-1">
//                 <button
//                   className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#dashboard-collapse"
//                   aria-expanded="false"
//                 >
//                   <i className="bi bi-speedometer2 me-2"></i> Dashboard
//                 </button>
//                 <div className="collapse" id="dashboard-collapse">
//                   <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//                     <li>
//                       <a
//                         href="#"
//                         className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                       >
//                         <i className="bi bi-grid-1x2-fill me-2"></i> Overview
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                       >
//                         <i className="bi bi-calendar-week-fill me-2"></i> Weekly
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                       >
//                         <i className="bi bi-calendar-fill me-2"></i> Monthly
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                       >
//                         <i className="bi bi-calendar2-fill me-2"></i> Annually
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </li>
//               <li className="mb-1">
//                 <button
//                   className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#orders-collapse"
//                   aria-expanded="false"
//                 >
//                   <i className="bi bi-bag-fill me-2"></i> Orders
//                 </button>
//                 <div className="collapse" id="orders-collapse">
//                   <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//                     <li>
//                       <a
//                         href="#"
//                         className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                       >
//                         <i className="bi bi-bag-plus-fill me-2"></i> New
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                       >
//                         <i className="bi bi-bag-check-fill me-2"></i> Processed
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                       >
//                         <i className="bi bi-truck me-2"></i> Shipped
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                       >
//                         <i className="bi bi-arrow-return-left me-2"></i> Returned
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </li>
//               <li className="border-top my-3"></li>
//               <li className="mb-1">
//                 <button
//                   className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#account-collapse"
//                   aria-expanded="false"
//                 >
//                   <i className="bi bi-person-circle me-2"></i> Account
//                 </button>
//                 <div className="collapse" id="account-collapse">
//                   <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
//                     <li>
//                       <a
//                         href="#"
//                         className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                       >
//                         <i className="bi bi-person-plus-fill me-2"></i> New...
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                       >
//                         <i className="bi bi-person-fill me-2"></i> Profile
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                       >
//                         <i className="bi bi-gear-fill me-2"></i> Settings
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="#"
//                         className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                       >
//                         <i className="bi bi-box-arrow-right me-2"></i> Sign out
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

// import React from "react";
// import { useState } from "react";
// import "./AdminDashboard.css";
// import vip1 from "../assets/vip1.png";
// import vip2 from "../assets/vip2.png";
// import vip3 from "../assets/vip3.png";
// import topup from "../assets/topup.png";
// import withdraw from "../assets/withdraw.png";
// import DashInfoCard from "../DashInfoCard/DashInfoCard";
// import LastJoined from "../LastJoined/LastJoined";
// import DashNav from "../DashNav/DashNav";
// // import active from "../assets/active.png";
// // import balance from "../assets/userbalance.png";
// // import deposite from "../assets/deposit.png";
// // import withd from "../assets/with.png";

// const AdminDashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };
//   return (
//     <div className="container-fluid">
//       <div className=" pb-5 mb-5">
//         <DashNav toggleSidebar={toggleSidebar} />
//       </div>
//       <div className="row">
//         <div
//           className={`col-lg-3 col-md-4 pl-4 sidebar ${
//             sidebarOpen ? "open" : ""
//           }`}
//         >
//           <div className="col-lg-2 col-md-3 col-sm-12">
//             <div className="flex-shrink-0 p-3" style={{ width: "280px" }}>
//               <a
//                 href="/"
//                 className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
//               >
//                 {/* <svg className="bi pe-none me-2" width="30" height="24">
//                 <use xlinkHref="#bootstrap" />
//               </svg> */}
//                 <span className="fs-5 fw-semibold">Home</span>
//               </a>
//               <ul className="list-unstyled ps-0">
//                 <li className="mb-1">
//                   <button
//                     className="btn btn-toggle d-inline-flex align-items-center rounded fs-5 border-0 collapsed"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#home-collapse"
//                     aria-expanded="false"
//                   >
//                     <i className="bi bi-person me-2"></i> User
//                     <i className="bi bi-chevron-right ms-auto toggle-icon"></i>
//                   </button>
//                   <div className="collapse" id="home-collapse">
//                     <ul className="btn-toggle-nav list-unstyled fw-normal pb-1">
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                         >
//                           <img src={vip1} alt="" />
//                           VIP 1
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                         >
//                           <img src={vip2} alt="" />
//                           VIP 2
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                         >
//                           <img src={vip3} alt="" />
//                           VIP 3
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>
//                 {/* Repeat for other dropdowns */}
//                 <li className="mb-1">
//                   <button
//                     className="btn btn-toggle d-inline-flex align-items-center rounded border-0 fs-5 collapsed"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#order-collapse"
//                     aria-expanded="false"
//                   >
//                     <i className="bi bi-file-earmark-medical me-2"></i>Order
//                     <i className="bi ms-auto toggle-icon"></i>
//                   </button>
//                   <div className="collapse" id="order-collapse">
//                     <ul className="btn-toggle-nav list-unstyled fw-normal pb-1">
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded d-block"
//                         >
//                           <img src={vip1} alt="" /> VIP 1
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                         >
//                           <img src={vip2} alt="" />
//                           VIP 2
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                         >
//                           <img src={vip3} alt="" />
//                           VIP 3
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>

//                 <li className="mb-1">
//                   <button
//                     className="btn btn-toggle d-inline-flex align-items-center rounded border-0 fs-5 collapsed"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#finance-collapse"
//                     aria-expanded="false"
//                   >
//                     <i className="bi bi-bar-chart-line me-2"></i>Finance
//                     <i className="bi ms-auto toggle-icon"></i>
//                   </button>
//                   <div className="collapse" id="finance-collapse">
//                     <ul className="btn-toggle-nav list-unstyled fw-normal pb-1">
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                         >
//                           <img src={topup} alt="" />
//                           Top Up
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                         >
//                           <img src={withdraw} alt="" />
//                           Withdrawal
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>
//                 <li>
//                   <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 fs-5 collapsed">
//                     <i className="bi bi-gear me-2"></i>Settings
//                     <i className="bi ms-auto toggle-icon"></i>
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* main content */}
//         <div className="col-lg-9 col-md-9 col-sm-12 dash">
//           <div className="container-fluid">
//             <DashInfoCard />
//             <LastJoined />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;




// import { useState } from "react";
// import "./AdminDashboard.css";
// import vip1 from "../assets/vip1.png";
// import vip2 from "../assets/vip2.png";
// import vip3 from "../assets/vip3.png";
// import topup from "../assets/topup.png";
// import withdraw from "../assets/withdraw.png";
// import DashInfoCard from "../DashInfoCard/DashInfoCard";
// import LastJoined from "../LastJoined/LastJoined";
// import DashNav from "../DashNav/DashNav";
// import recharge from "../assets/recharge.png"
// import Vip1Details from "../Vip1Details/Vip1Details"; // Import your VIP components here
// import Vip2Details from "../Vip2Details/Vip2Details"; // Import your VIP components here
// import Vip3Details from "../Vip3Details/Vip3Details"; // Import your VIP components here
// import RechargeDash from "../RechargeDash/RechargeDash";
// import WithdrawDash from "../WithdrawDash/WithdrawDash";

// const AdminDashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [currentView, setCurrentView] = useState("dashboard"); // State to track current view

//   // This function sets the current view and closes the sidebar on mobile screens
//   const handleLinkClick = (view) => {
//     setCurrentView(view);
//     if (window.innerWidth <= 768) { // Adjust the width as per your needs
//       setSidebarOpen(false);
//     }
//   };

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   const renderContent = () => {
//     switch (currentView) {
//       case "vip1":
//         return <Vip1Details />;
//       case "vip2":
//         return <Vip2Details />;
//       case "vip3":
//         return <Vip3Details />;
//       case "topup":
//         return <RechargeDash/>;
//       case "withdraw":
//         return <WithdrawDash />;
//       case "lastJoined":
//         return <LastJoined />;
//       default:
//         return (
//           <>
//             <DashInfoCard />
//             <LastJoined />
//           </>
//         );
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <div className=" pb-5 mb-5">
//         <DashNav toggleSidebar={toggleSidebar} />
//       </div>
//       <div className="row">
//         <div
//           className={`col-lg-3 col-md-4 pl-4 sidebar ${
//             sidebarOpen ? "open" : ""
//           }`}
//         >
//           <div className="col-lg-2 col-md-3 col-sm-12">
//             <div className="flex-shrink-0 p-3" style={{ width: "280px" }}>
//               <a
//                 href="#"
//                 className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
//                 // onClick={() => setCurrentView("dashboard")} // Default dashboard view
//                 onClick={() => handleLinkClick("dashboard")}
//               >
//                 <span className="fs-5 fw-semibold">Home</span>
//               </a>
//               <ul className="list-unstyled ps-0">
//                 <li className="mb-1">
//                   <button
//                     className="btn btn-toggle d-inline-flex align-items-center rounded fs-5 border-0 collapsed"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#home-collapse"
//                     aria-expanded="false"
//                   >
//                     <i className="bi bi-person me-2"></i> User
//                     <i className="bi bi-chevron-right ms-auto toggle-icon"></i>
//                   </button>
//                   <div className="collapse" id="home-collapse">
//                     <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 list-li">
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                           onClick={() => setCurrentView("vip1")} // Set VIP 1 view
//                         >
//                           <img src={vip1} alt="" />
//                           VIP 1
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                           onClick={() => setCurrentView("vip2")} // Set VIP 2 view
//                         >
//                           <img src={vip2} alt="" />
//                           VIP 2
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                           onClick={() => setCurrentView("vip3")} // Set VIP 3 view
//                         >
//                           <img src={vip3} alt="" />
//                           VIP 3
//                         </a>
//                       </li>
                      
//                     </ul>
//                   </div>
//                 </li>
//                 {/* Repeat for other dropdowns */}
//                 {/* <li className="mb-1">
//                   <button
//                     className="btn btn-toggle d-inline-flex align-items-center rounded border-0 fs-5 collapsed"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#order-collapse"
//                     aria-expanded="false"
//                   >
//                     <i className="bi bi-file-earmark-medical me-2"></i>Order
//                     <i className="bi ms-auto toggle-icon"></i>
//                   </button>
//                   <div className="collapse" id="order-collapse">
//                     <ul className="btn-toggle-nav list-unstyled fw-normal pb-1">
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded d-block"
//                           onClick={() => setCurrentView("vip1")}
//                         >
//                           <img src={vip1} alt="" /> VIP 1
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                           onClick={() => setCurrentView("vip2")}
//                         >
//                           <img src={vip2} alt="" />
//                           VIP 2
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                           onClick={() => setCurrentView("vip3")}
//                         >
//                           <img src={vip3} alt="" />
//                           VIP 3
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li> */}

//                 <li className="mb-1">
//                   <button
//                     className="btn btn-toggle d-inline-flex align-items-center rounded border-0 fs-5 collapsed"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#finance-collapse"
//                     aria-expanded="false"
//                   >
//                     <i className="bi bi-bar-chart-line me-2"></i>Finance
//                     <i className="bi ms-auto toggle-icon"></i>
//                   </button>
//                   <div className="collapse" id="finance-collapse">
//                     <ul className="btn-toggle-nav list-unstyled fw-normal list-li pb-1">
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                           onClick={() => setCurrentView("topup")}
//                         >
//                           <img src={topup} alt="" />
//                           Top Up
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                           onClick={() => setCurrentView("withdraw")}
//                         >
//                           <img src={withdraw} alt="" />
//                           Withdrawal
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>
//                 {/* <li>
//                   <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 fs-5 collapsed"
//                   data-bs-toggle="collapse"
//                   data-bs-target="#settings-collapse"
//                   aria-expanded="false">
//                     <i className="bi bi-gear me-2"></i>Settings
//                     <i className="bi ms-auto toggle-icon"></i>
//                   </button>

//                 </li> */}
                
//              <li className="mb-1">
//                      <button
//                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 fs-5 collapsed"
//                    data-bs-toggle="collapse"
//                    data-bs-target="#settings-collapse"
//                    aria-expanded="false"
//                  >
//                    <i className="bi bi-gear me-2"></i>Settings
//                    <i className="bi ms-auto toggle-icon"></i>
//                  </button>
//                  <div className="collapse" id="settings-collapse">
//                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 list-li">
//                      <li>
//                        <a
//                          href="#"
//                          className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                        >
//                          <img src={topup} alt="" />
//                         Invitation Link
//                        </a>
//                      </li>
//                      <li>
//                        <a
//                          href="#"
//                          className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                        >
//                          <img src={withdraw} alt="" />
//                         Bank Details
//                        </a>
//                      </li>
//                      <li>
//                        <a
//                          href="#"
//                          className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                        >
//                          <img src={recharge} alt="" />
//                         Wallet Details
//                        </a>
//                      </li>
//                    </ul>
//                  </div>
//                </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* main content */}
//         <div className="col-lg-9 col-md-9 col-sm-12 dash">
//           <div className="container-fluid">
//             {renderContent()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;






// import { useState } from "react";
// import "./AdminDashboard.css";
// import vip1 from "../assets/vip1.png";
// import vip2 from "../assets/vip2.png";
// import vip3 from "../assets/vip3.png";
// import topup from "../assets/topup.png";
// import withdraw from "../assets/withdraw.png";
// import recharge from "../assets/recharge.png";
// import DashInfoCard from "../DashInfoCard/DashInfoCard";
// import LastJoined from "../LastJoined/LastJoined";
// import DashNav from "../DashNav/DashNav";
// import Vip1Details from "../Vip1Details/Vip1Details";
// import Vip2Details from "../Vip2Details/Vip2Details";
// import Vip3Details from "../Vip3Details/Vip3Details";
// import RechargeDash from "../RechargeDash/RechargeDash";
// import WithdrawDash from "../WithdrawDash/WithdrawDash";

// const AdminDashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [currentView, setCurrentView] = useState("dashboard");

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   // This function sets the current view and closes the sidebar on mobile screens
//   const handleLinkClick = (view) => {
//     setCurrentView(view);
//     if (window.innerWidth <= 768) { // Adjust the width as per your needs
//       setSidebarOpen(false);
//     }
//   };

//   const renderContent = () => {
//     switch (currentView) {
//       case "vip1":
//         return <Vip1Details />;
//       case "vip2":
//         return <Vip2Details />;
//       case "vip3":
//         return <Vip3Details />;
//       case "topup":
//         return <RechargeDash />;
//       case "withdraw":
//         return <WithdrawDash />;
//       case "lastJoined":
//         return <LastJoined />;
//       default:
//         return (
//           <>
//             <DashInfoCard />
//             <LastJoined />
//           </>
//         );
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <div className="pb-5 mb-5">
//         <DashNav toggleSidebar={toggleSidebar} />
//       </div>
//       <div className="row">
//         <div
//           className={`col-lg-3 col-md-4 pl-4 sidebar ${
//             sidebarOpen ? "open" : ""
//           }`}
//         >
//           <div className="col-lg-2 col-md-3 col-sm-12">
//             <div className="flex-shrink-0 p-3" style={{ width: "280px" }}>
//               <a
//                 href="#"
//                 className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
//                 onClick={() => handleLinkClick("dashboard")}
//               >
//                 <span className="fs-5 fw-semibold">Home</span>
//               </a>
//               <ul className="list-unstyled ps-0">
//                 <li className="mb-1">
//                   <button
//                     className="btn btn-toggle d-inline-flex align-items-center rounded fs-5 border-0 collapsed"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#home-collapse"
//                     aria-expanded="false"
//                   >
//                     <i className="bi bi-person me-2"></i> User
//                     <i className="bi bi-chevron-right ms-auto toggle-icon"></i>
//                   </button>
//                   <div className="collapse" id="home-collapse">
//                     <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 list-li">
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                           onClick={() => handleLinkClick("vip1")}
//                         >
//                           <img src={vip1} alt="VIP 1" />
//                           VIP 1
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                           onClick={() => handleLinkClick("vip2")}
//                         >
//                           <img src={vip2} alt="VIP 2" />
//                           VIP 2
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                           onClick={() => handleLinkClick("vip3")}
//                         >
//                           <img src={vip3} alt="VIP 3" />
//                           VIP 3
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>

//                 <li className="mb-1">
//                   <button
//                     className="btn btn-toggle d-inline-flex align-items-center rounded border-0 fs-5 collapsed"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#finance-collapse"
//                     aria-expanded="false"
//                   >
//                     <i className="bi bi-bar-chart-line me-2"></i> Finance
//                     <i className="bi ms-auto toggle-icon"></i>
//                   </button>
//                   <div className="collapse" id="finance-collapse">
//                     <ul className="btn-toggle-nav list-unstyled fw-normal list-li pb-1">
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                           onClick={() => handleLinkClick("topup")}
//                         >
//                           <img src={topup} alt="Top Up" />
//                           Top Up
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                           onClick={() => handleLinkClick("withdraw")}
//                         >
//                           <img src={withdraw} alt="Withdrawal" />
//                           Withdrawal
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>

//                 <li className="mb-1">
//                   <button
//                     className="btn btn-toggle d-inline-flex align-items-center rounded border-0 fs-5 collapsed"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#settings-collapse"
//                     aria-expanded="false"
//                   >
//                     <i className="bi bi-gear me-2"></i> Settings
//                     <i className="bi ms-auto toggle-icon"></i>
//                   </button>
//                   <div className="collapse" id="settings-collapse">
//                     <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 list-li">
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                         >
//                           <img src={topup} alt="Invitation Link" />
//                           Invitation Link
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                         >
//                           <img src={withdraw} alt="Bank Details" />
//                           Bank Details
//                         </a>
//                       </li>
//                       <li>
//                         <a
//                           href="#"
//                           className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
//                         >
//                           <img src={recharge} alt="Wallet Details" />
//                           Wallet Details
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* main content */}
//         <div className="col-lg-9 col-md-9 col-sm-12 dash">
//           <div className="container-fluid">
//             {renderContent()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;




import { useState } from "react";
import "./AdminDashboard.css";
import vip1 from "../assets/vip1.png";
import vip2 from "../assets/vip2.png";
import vip3 from "../assets/vip3.png";
import topup from "../assets/topup.png";
import withdraw from "../assets/withdraw.png";
import DashInfoCard from "../DashInfoCard/DashInfoCard";
import LastJoined from "../LastJoined/LastJoined";
import DashNav from "../DashNav/DashNav";
import recharge from "../assets/recharge.png";
import Vip1Details from "../Vip1Details/Vip1Details";
import Vip2Details from "../Vip2Details/Vip2Details";
import Vip3Details from "../Vip3Details/Vip3Details";
import RechargeDash from "../RechargeDash/RechargeDash";
import WithdrawDash from "../WithdrawDash/WithdrawDash";
import InvitationModal from "../InvitationModal/InvitationModal";
import BankDetailsModal from "../BankDetailsModal/BankDetailsModal";
import WalletDetailsModal from "../WalletDetailsModal/WalletDetailsModal";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState("dashboard");
  
  // Modal state
  const [showInvitationModal, setShowInvitationModal] = useState(false);
  const [showBankDetailsModal, setShowBankDetailsModal] = useState(false);
  const [showWalletDetailsModal, setShowWalletDetailsModal] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLinkClick = (view) => {
    setCurrentView(view);
    if (window.innerWidth <= 768) {
      setSidebarOpen(false); // Close the sidebar on mobile screens
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case "vip1":
        return <Vip1Details />;
      case "vip2":
        return <Vip2Details />;
      case "vip3":
        return <Vip3Details />;
      case "topup":
        return <RechargeDash />;
      case "withdraw":
        return <WithdrawDash />;
      case "lastJoined":
        return <LastJoined />;
      default:
        return (
          <>
            <DashInfoCard />
            <LastJoined />
          </>
        );
    }
  };

  return (
    <div className="container-fluid">
      <div className="pb-5 mb-5">
        <DashNav toggleSidebar={toggleSidebar} />
      </div>
      <div className="row">
        <div
          className={`col-lg-3 col-md-4 pl-4 sidebar ${
            sidebarOpen ? "open" : ""
          }`}
        >
          <div className="col-lg-2 col-md-3 col-sm-12">
            <div className="flex-shrink-0 p-3" style={{ width: "280px" }}>
              <a
                href="#"
                className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
                onClick={() => handleLinkClick("dashboard")}
              >
                <span className="fs-5 fw-semibold">Home</span>
              </a>
              <ul className="list-unstyled ps-0">
                <li className="mb-1">
                  <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded fs-5 border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#home-collapse"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person me-2"></i> User
                    <i className="bi bi-chevron-right ms-auto toggle-icon"></i>
                  </button>
                  <div className="collapse" id="home-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 list-li">
                      <li>
                        <a
                          href="#"
                          className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
                          onClick={() => handleLinkClick("vip1")}
                        >
                          <img src={vip1} alt="VIP 1" />
                          VIP 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
                          onClick={() => handleLinkClick("vip2")}
                        >
                          <img src={vip2} alt="VIP 2" />
                          VIP 2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
                          onClick={() => handleLinkClick("vip3")}
                        >
                          <img src={vip3} alt="VIP 3" />
                          VIP 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="mb-1">
                  <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 fs-5 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#finance-collapse"
                    aria-expanded="false"
                  >
                    <i className="bi bi-bar-chart-line me-2"></i> Finance
                    <i className="bi ms-auto toggle-icon"></i>
                  </button>
                  <div className="collapse" id="finance-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal list-li pb-1">
                      <li>
                        <a
                          href="#"
                          className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
                          onClick={() => handleLinkClick("topup")}
                        >
                          <img src={topup} alt="Top Up" />
                          Top Up
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
                          onClick={() => handleLinkClick("withdraw")}
                        >
                          <img src={withdraw} alt="Withdrawal" />
                          Withdrawal
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="mb-1">
                  <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 fs-5 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#settings-collapse"
                    aria-expanded="false"
                  >
                    <i className="bi bi-gear me-2"></i> Settings
                    <i className="bi ms-auto toggle-icon"></i>
                  </button>
                  <div className="collapse" id="settings-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 list-li">
                      <li>
                        <a
                          href="#"
                          className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
                          onClick={() => setShowInvitationModal(true)}
                        >
                          <img src={topup} alt="Invitation Link" />
                          Invitation Link
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
                          onClick={() => setShowBankDetailsModal(true)}
                        >
                          <img src={withdraw} alt="Bank Details" />
                          Bank Details
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="link-body-emphasis d-inline-flex align-items-center text-decoration-none rounded"
                          onClick={() => setShowWalletDetailsModal(true)}
                        >
                          <img src={recharge} alt="Wallet Details" />
                          Wallet Details
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="col-lg-9 col-md-9 col-sm-12 dash">
          <div className="container-fluid">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Modals */}
      <InvitationModal
        show={showInvitationModal}
        handleClose={() => setShowInvitationModal(false)}
      />
      <BankDetailsModal
        show={showBankDetailsModal}
        handleClose={() => setShowBankDetailsModal(false)}
      />
      <WalletDetailsModal
        show={showWalletDetailsModal}
        handleClose={() => setShowWalletDetailsModal(false)}
      />
    </div>
  );
};

export default AdminDashboard;