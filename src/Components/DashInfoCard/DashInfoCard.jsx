import { useEffect, useState } from "react";
import "./DashInfoCard.css";
import active from "../assets/active.png";
import balance from "../assets/userbalance.png";
import deposite from "../assets/deposit.png";
import withd from "../assets/with.png";

const DashInfoCard = () => {
  // State to store fetched data
  const djangoHostname = import.meta.env.VITE_DJANGO_HOSTNAME;
  const [dashboardData, setDashboardData] = useState({
    activeUsers: 0,
    userBalance: 0,
    deposit: 0,
    withdrawals: 0,
    totalAmountTopUp: 0, // New state for total amount_top_up
  });

  // Fetch data from the backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch account users data
        const usersResponse = await fetch(`${djangoHostname}/api/accounts/users/`);
        const usersData = await usersResponse.json();

        // Fetch recharge data
        const rechargeResponse = await fetch(`${djangoHostname}/api/recharge/recharges/`);
        const rechargeData = await rechargeResponse.json();

        // Calculate the total number of users
        const totalUsers = usersData.length;

        // Calculate the total top-up amount
        const totalAmountTopUp = rechargeData.reduce(
          (sum, recharge) => sum + parseFloat(recharge.amount_top_up),
          0
        );

        setDashboardData({
          activeUsers: totalUsers, // Update activeUsers with total number of users
          userBalance: usersData.reduce((sum, user) => sum + parseFloat(user.balance), 0),
          deposit: usersData.reduce((sum, user) => sum + parseFloat(user.commission1), 0), // Assuming deposit data is from commission1
          withdrawals: usersData.reduce((sum, user) => sum + parseFloat(user.commission2), 0), // Assuming withdrawals data is from commission2
          totalAmountTopUp: totalAmountTopUp, // Update with the total top-up amount
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, [djangoHostname]);


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
              <h5 className="fw-bold mt-3">${dashboardData.totalAmountTopUp}</h5>
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
