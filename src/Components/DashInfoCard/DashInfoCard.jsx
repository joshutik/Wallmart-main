// import React from 'react'
// import './DashInfoCard.css'
// import active from "../assets/active.png";
// import balance from "../assets/userbalance.png";
// import deposite from "../assets/deposit.png";
// import withd from "../assets/with.png";

// const DashInfoCard = () => {
//   return (
//     <div>
//       <div className="container dash py-4">
//             <h3 className="text-light">ADMIN DASHBOARD</h3>
//             <div className="row gy-3">
//               <div className="col-lg-3 col-md-6 col-sm-12 h-50">
//                 <div className="rounded-3 px-3 py-4 active-user">
//                   <div>
//                     <img src={active} alt="" className="img-fluid" />
//                   </div>
//                   <h5 className="fw-bold mt-3">1200</h5>
//                   <span>Active Users</span>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-6 col-sm-12">
//                 <div className="rounded-3 px-3 py-4 user-bal">
//                   <div>
//                     <img src={balance} alt="" className="img-fluid" />
//                   </div>
//                   <h5 className="fw-bold mt-3">$1200</h5>
//                   <span>Users Balance</span>
//                 </div>
//               </div>
//               <div className="col-lg-3 col-md-6 col-sm-12">
//                 <div className="rounded-3 px-3 py-4 depo">
//                   <div>
//                     <img src={deposite} alt="" className="img-fluid" />
//                   </div>
//                   <h5 className="fw-bold mt-3">$1200</h5>
//                   <span>Deposite</span>
//                 </div>          
//               </div>
//               <div className="col-lg-3 col-md-6 col-sm-12">
//                 <div className="rounded-3 px-3 py-4 take w-100">
//                   <div>
//                     <img src={withd} alt="" className="img-fluid" />
//                   </div>
//                   <h5 className="fw-bold mt-3">$1200</h5>
//                   <span>Withdrawals</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//     </div>
//   )
// }

// export default DashInfoCard



import { useEffect, useState } from "react";
import "./DashInfoCard.css";
import active from "../assets/active.png";
import balance from "../assets/userbalance.png";
import deposite from "../assets/deposit.png";
import withd from "../assets/with.png";

const DashInfoCard = () => {
  // State to store fetched data
  const [dashboardData, setDashboardData] = useState({
    activeUsers: 0,
    userBalance: 0,
    deposit: 0,
    withdrawals: 0,
  });

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/dashboard"); // Replace with your API endpoint
        const data = await response.json();
        setDashboardData({
          activeUsers: data.activeUsers,
          userBalance: data.userBalance,
          deposit: data.deposit,
          withdrawals: data.withdrawals,
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="container">
        <h3 className="text-light my-4">ADMIN DASHBOARD</h3>
        <div className="row gy-3">
          <div className="col-lg-3 col-md-6 col-sm-12 h-50">
            <div className="rounded-3 px-3 py-4 active-user">
              <div>
                <img src={active} alt="Active Users" className="img-fluid" />
              </div>
              <h5 className="fw-bold mt-3">{dashboardData.activeUsers}</h5>
              <span>Active Users</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="rounded-3 px-3 py-4 user-bal">
              <div>
                <img src={balance} alt="Users Balance" className="img-fluid" />
              </div>
              <h5 className="fw-bold mt-3">${dashboardData.userBalance}</h5>
              <span>Users Balance</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="rounded-3 px-3 py-4 depo">
              <div>
                <img src={deposite} alt="Deposit" className="img-fluid" />
              </div>
              <h5 className="fw-bold mt-3">${dashboardData.deposit}</h5>
              <span>Deposit</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="rounded-3 px-3 py-4 take w-100">
              <div>
                <img src={withd} alt="Withdrawals" className="img-fluid" />
              </div>
              <h5 className="fw-bold mt-3">${dashboardData.withdrawals}</h5>
              <span>Withdrawals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashInfoCard;
