// // import React from 'react'
// import "./RechargeDash.css";

// const RechargeDash = () => {
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

// export default RechargeDash;

// import { useEffect, useState } from "react";
// import "./RechargeDash.css";
// import axios from "axios";

// const RechargeDash = () => {
//   const [rechargeData, setRechargeData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(10);

//   useEffect(() => {
//     // Fetch data from the backend
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/recharge"); // Replace with your actual API endpoint
//         setRechargeData(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Pagination logic
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = rechargeData.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Handling Promote, Demote, and Delete actions
//   const handlePromote = (id) => {
//     // Logic for promoting the user
//     console.log("Promote user with ID:", id);
//   };

//   const handleDemote = (id) => {
//     // Logic for demoting the user
//     console.log("Demote user with ID:", id);
//   };

//   const handleDelete = (id) => {
//     // Logic for deleting the user
//     console.log("Delete user with ID:", id);
//   };

//   const handleDownloadReceipt = (id) => {
//     // Logic for downloading receipt
//     console.log("Download receipt for user with ID:", id);
//   };

//   return (
//     <div className="container-fluid">
//       <div className="container bg-light rounded">
//         <h2></h2>
//         <div className="row align-items-center">
//           <div className="table-responsive">
//             <table className="table caption-top text-center">
//               <caption className="text-center fs-2 fw-bold text-dark py-3">
//                 Recharge Account
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
//                 {currentItems.map((item) => (
//                   <tr key={item.id}>
//                     <th scope="row">{item.rechargeMethod}</th>
//                     <td>{item.name}</td>
//                     <td>{item.paymentName}</td>
//                     <td>{item.paymentNo}</td>
//                     <td>${item.balance}</td>
//                     <td>${item.amountTopUp}</td>
//                     <td>
//                       <button
//                         onClick={() => handleDownloadReceipt(item.id)}
//                         className="btn w-100 text-light px-2 py-1 rounded mx-1 dwload"
//                       >
//                         Download
//                       </button>
//                     </td>
//                     <td className="d-flex">
//                       <button
//                         onClick={() => handlePromote(item.id)}
//                         className="btn-success w-100 btn text-light px-2 py-1 rounded mx-1"
//                       >
//                         Promote
//                       </button>
//                       <button
//                         onClick={() => handleDemote(item.id)}
//                         className="btn btn-danger w-100 border-0 text-light px-2 py-1 rounded"
//                       >
//                         Demote
//                       </button>
//                       <button
//                         onClick={() => handleDelete(item.id)}
//                         className="btn border-0 text-light px-2 mx-1 py-1 rounded"
//                       >
//                         <i className="bi bi-trash3 text-dark"></i>
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             {/* Pagination */}
//             <nav>
//               <ul className="pagination justify-content-center">
//                 {Array.from({ length: Math.ceil(rechargeData.length / itemsPerPage) }, (_, index) => (
//                   <li key={index + 1} className="page-item">
//                     <button onClick={() => paginate(index + 1)} className="page-link">
//                       {index + 1}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RechargeDash;

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import "./RechargeDash.css";

// const RechargeDash = () => {
//   const [rechargeData, setRechargeData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     fetchRechargeData(currentPage);
//   }, [currentPage]);

//   const fetchRechargeData = async (page) => {
//     try {
//       const response = await axios.get(`/api/recharge?page=${page}`);
//       const { data, totalEntries, totalPages } = response.data;

//       setRechargeData(data);
//       setTotalPages(totalEntries > 10 ? totalPages : 1); // Only set totalPages if entries > 10
//     } catch (error) {
//       console.error("Error fetching recharge data", error);
//     }
//   };

//   const handleDownloadReceipt = (receiptUrl) => {
//     window.open(receiptUrl, '_blank');
//   };

//   const handlePromoteUser = async (userId) => {
//     try {
//       await axios.post(`/api/recharge/${userId}/promote`);
//       fetchRechargeData(currentPage);
//     } catch (error) {
//       console.error("Error promoting user", error);
//     }
//   };

//   const handleDemoteUser = async (userId) => {
//     try {
//       await axios.post(`/api/recharge/${userId}/demote`);
//       fetchRechargeData(currentPage);
//     } catch (error) {
//       console.error("Error demoting user", error);
//     }
//   };

//   const handleDeleteUser = async (userId) => {
//     try {
//       await axios.delete(`/api/recharge/${userId}`);
//       fetchRechargeData(currentPage);
//     } catch (error) {
//       console.error("Error deleting user", error);
//     }
//   };

//   return (
//     <div className="container-fluid">
//       <div className="container bg-light rounded">
//         <h2></h2>
//         <div className="row align-items-center">
//           <div className="table-responsive">
//             <table className="table caption-top text-center">
//               <caption className="text-center fs-2 fw-bold text-dark py-3">
//                 Recharge Account
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
//                 {rechargeData.map((item) => (
//                   <tr key={item.id}>
//                     <th scope="row">{item.method}</th>
//                     <td>{item.name}</td>
//                     <td>{item.paymentName}</td>
//                     <td>{item.paymentNo}</td>
//                     <td>{item.balance}</td>
//                     <td>{item.amountTopup}</td>
//                     <td>
//                       <button
//                         className="btn w-100 text-light px-2 py-1 rounded mx-1 dwload"
//                         onClick={() => handleDownloadReceipt(item.receiptUrl)}
//                       >
//                         Download
//                       </button>
//                     </td>
//                     <td className="d-flex">
//                       <button
//                         className="btn-success w-100 btn text-light px-2 py-1 rounded mx-1"
//                         onClick={() => handlePromoteUser(item.id)}
//                       >
//                         Promote
//                       </button>
//                       <button
//                         className="btn btn-danger w-100 border-0 text-light px-2 py-1 rounded"
//                         onClick={() => handleDemoteUser(item.id)}
//                       >
//                         Demote
//                       </button>
//                       <button
//                         className="btn border-0 text-light px-2 mx-1 py-1 rounded"
//                         onClick={() => handleDeleteUser(item.id)}
//                       >
//                         <i className="bi bi-trash3 text-dark"></i>
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {totalPages > 1 && (
//             <div className="pagination">
//               {Array.from({ length: totalPages }, (_, index) => (
//                 <button
//                   key={index + 1}
//                   onClick={() => setCurrentPage(index + 1)}
//                   disabled={currentPage === index + 1}
//                   className="page-link"
//                 >
//                   {index + 1}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RechargeDash;

import { useEffect, useState } from "react";
import axios from "axios";
import "./RechargeDash.css";
import { Link } from "react-router-dom";

const RechargeDash = () => {
  const [rechargeData, setRechargeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchRechargeData(currentPage);
  }, [currentPage]);

  const fetchRechargeData = async (page) => {
    try {
      const response = await axios.get(`/api/recharge?page=${page}`);
      const { data, totalEntries, totalPages } = response.data;

      setRechargeData(Array.isArray(data) ? data : []);
      setTotalPages(totalEntries > 10 ? totalPages : 1);
    } catch (error) {
      console.error("Error fetching recharge data", error);
    }
  };

  const handleDownloadReceipt = (receiptUrl) => {
    window.open(receiptUrl, "_blank");
  };

  const handlePromoteUser = async (userId) => {
    try {
      await axios.post(`/api/recharge/${userId}/promote`);
      fetchRechargeData(currentPage);
    } catch (error) {
      console.error("Error promoting user", error);
    }
  };

  const handleDemoteUser = async (userId) => {
    try {
      await axios.post(`/api/recharge/${userId}/demote`);
      fetchRechargeData(currentPage);
    } catch (error) {
      console.error("Error demoting user", error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`/api/recharge/${userId}`);
      fetchRechargeData(currentPage);
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
                Recharge Account
              </caption>
              <thead>
                <tr className="tablehead-bg">
                  <th scope="col">Recharge Method</th>
                  <th scope="col">Name</th>
                  <th scope="col">Payment Name</th>
                  <th scope="col">Payment No</th>
                  <th scope="col">Balance</th>
                  <th scope="col">Amount Top-up</th>
                  <th scope="col">Receipt</th>
                  <th scope="col">Control Panel</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(rechargeData) && rechargeData.length > 0 ? (
                  rechargeData.map((item) => (
                    <tr key={item.id}>
                      <th scope="row">{item.method}</th>
                      <td>{item.name}</td>
                      <td>{item.paymentName}</td>
                      <td>{item.paymentNo}</td>
                      <td>{item.balance}</td>
                      <td>{item.amountTopup}</td>
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
                    <td colSpan="8">No recharge data available.</td>
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

export default RechargeDash;
