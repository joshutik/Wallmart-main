// // import React from 'react'
// import "./WithdrawDash.css";

// const WithdrawDash = () => {
//   return (
//     <div className="container-fluid">
//       <div className="container bg-light rounded">
//         <h2></h2>
//         <div className="row align-items-center">
//           <div className="table-responsive">
//             <table className="table caption-top text-center">
//               <caption className="text-center fs-2 fw-bold text-dark py-3">
//                Recharge Account
//               </caption>
//               <thead>
//                 <tr className="tablehead-bg">
//                   <th scope="col">Recharge Method</th>
//                   <th scope="col">Name</th>
//                   <th scope="col">Payment Name</th>
//                   <th scope="col">Payment No</th>
//                   <th scope="col">Balance</th>
//                   <th scope="col">Amount Top-up</th>
//                   <th scope="col">Receipt</th>
//                   <th scope="col">Control Panel</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <th scope="row">Bank</th>
//                   <td>Remirez</td>
//                   <td>PalmPay</td>
//                   <td>08033322444</td>
//                   <td>$0</td>
//                   <td>$0</td>
//                   <td>
//                     <button className="btn w-100 text-light px-2 py-1 rounded mx-1 dwload">
//                       Download
//                     </button>
//                   </td>
//                   <td className="d-flex">

//                       <button className="btn-success w-100 btn text-light px-2 py-1 rounded mx-1">
//                         Promote
//                       </button>
//                       <button className="btn btn-danger w-100 border-0 text-light px-2 py-1 rounded">
//                         Demote
//                       </button>

//                     <button className="btn border-0 text-light px-2 mx-1 py-1 rounded">
//                       <i className="bi bi-trash3 text-dark"></i>
//                     </button>
//                   </td>
//                 </tr>
//                 <tr>
//                 <th scope="row">Bank</th>
//                   <td>Remirez</td>
//                   <td>PalmPay</td>
//                   <td>08033322444</td>
//                   <td>$0</td>
//                   <td>$0</td>
//                   <td>
//                     <button className="btn w-100 text-light px-2 py-1 rounded mx-1 dwload">
//                       Download
//                     </button>
//                   </td>
//                   <td className="d-flex">

//                       <button className="btn-success w-100 btn text-light px-2 py-1 rounded mx-1">
//                         Promote
//                       </button>
//                       <button className="btn btn-danger w-100 border-0 text-light px-2 py-1 rounded">
//                         Demote
//                       </button>

//                     <button className="btn border-0 text-light px-2 mx-1 py-1 rounded">
//                       <i className="bi bi-trash3 text-dark"></i>
//                     </button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WithdrawDash;

import { useEffect, useState } from "react";
import axios from "axios";
import "./WithdrawDash.css";
import { Link } from "react-router-dom";

const WithdrawDash = () => {
  const [withdrawData, setWithdrawData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchWithdrawData(currentPage);
  }, [currentPage]);

  const fetchWithdrawData = async (page) => {
    try {
      const response = await axios.get(`/api/withdraw?page=${page}`);
      const { data, totalEntries, totalPages } = response.data;

      setWithdrawData(Array.isArray(data) ? data : []);
      setTotalPages(totalEntries > 10 ? totalPages : 1);
    } catch (error) {
      console.error("Error fetching withdraw data", error);
    }
  };

  const handleDownloadReceipt = (receiptUrl) => {
    window.open(receiptUrl, "_blank");
  };

  const handlePromoteUser = async (userId) => {
    try {
      await axios.post(`/api/withdraw/${userId}/promote`);
      fetchWithdrawData(currentPage);
    } catch (error) {
      console.error("Error promoting user", error);
    }
  };

  const handleDemoteUser = async (userId) => {
    try {
      await axios.post(`/api/withdraw/${userId}/demote`);
      fetchWithdrawData(currentPage);
    } catch (error) {
      console.error("Error demoting user", error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`/api/withdraw/${userId}`);
      fetchWithdrawData(currentPage);
    } catch (error) {
      console.error("Error deleting user", error);
    }
  };

  return (
    <div className="container-fluid">
        <div className="my-3">
          <h3 className="text-light">
            <Link to={"/"} className="text-light">
              <i className="bi bi-chevron-left"></i>
            </Link>
            ADMIN DASHBOARD
          </h3>
        </div>
      <div className="container bg-light rounded">
        <div className="row align-items-center">
          <div className="table-responsive">
            <table className="table caption-top text-center">
              <caption className="text-center fs-2 fw-bold text-dark py-3">
                Withdraw Account
              </caption>
              <thead>
                <tr className="tablehead-bg">
                  <th scope="col">Withdraw Method</th>
                  <th scope="col">Name</th>
                  <th scope="col">Payment Name</th>
                  <th scope="col">Payment No</th>
                  <th scope="col">Balance</th>
                  <th scope="col">Amount Withdrawn</th>
                  <th scope="col">Receipt</th>
                  <th scope="col">Control Panel</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(withdrawData) && withdrawData.length > 0 ? (
                  withdrawData.map((item) => (
                    <tr key={item.id}>
                      <th scope="row">{item.method}</th>
                      <td>{item.name}</td>
                      <td>{item.paymentName}</td>
                      <td>{item.paymentNo}</td>
                      <td>{item.balance}</td>
                      <td>{item.amountWithdrawn}</td>
                      <td>
                        <button
                          className="btn w-100 text-light px-2 py-1 rounded mx-1 dwload"
                          onClick={() => handleDownloadReceipt(item.receiptUrl)}
                        >
                          Download
                        </button>
                      </td>
                      <td className="d-flex">
                        <button
                          className="btn-success w-100 btn text-light px-2 py-1 rounded mx-1"
                          onClick={() => handlePromoteUser(item.id)}
                        >
                          Promote
                        </button>
                        <button
                          className="btn btn-danger w-100 border-0 text-light px-2 py-1 rounded"
                          onClick={() => handleDemoteUser(item.id)}
                        >
                          Demote
                        </button>
                        <button
                          className="btn border-0 text-light px-2 mx-1 py-1 rounded"
                          onClick={() => handleDeleteUser(item.id)}
                        >
                          <i className="bi bi-trash3 text-dark"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8">No withdraw data available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  disabled={currentPage === index + 1}
                  className="page-link"
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WithdrawDash;
