import { useEffect, useState } from "react";
import axios from "axios";
import "./RechargeDash.css";
import { Link } from "react-router-dom";

const RechargeDash = () => {

  const djangoHostname = import.meta.env.VITE_DJANGO_HOSTNAME;
  const [rechargeData, setRechargeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchRechargeData(currentPage);
  }, [currentPage]);

  const fetchRechargeData = async (page) => {
    try {
      const response = await axios.get(`${djangoHostname}/api/recharge/recharges/`);
      const { data, totalEntries, totalPages } = response.data;

      // setRechargeData(Array.isArray(data) ? data : []);
      setRechargeData(response.data);
      
      setTotalPages(totalPages > 0 ? totalPages : 1);
    } catch (error) {
      console.error("Error fetching recharge data", error);
    }
  };

  const handleDownloadReceipt = (receiptUrl) => {
    window.open(receiptUrl, "_blank");
  };

  const handlePromoteUser = async (userId) => {
    try {
      await axios.post(`${djangoHostname}/api/recharge/${userId}/promote`);
      fetchRechargeData(currentPage);
    } catch (error) {
      console.error("Error promoting user", error);
    }
  };

  const handleDemoteUser = async (userId) => {
    try {
      await axios.post(`${djangoHostname}/api/recharge/${userId}/demote`);
      fetchRechargeData(currentPage);
    } catch (error) {
      console.error("Error demoting user", error);
    }
  };

  const handleDeleteUser = async (userId) => {

 
    const isConfirmed = window.confirm("Are you sure you want to delete this recharge data?");
    if (!isConfirmed) {
      return; // If the user cancels, exit the function
    }
    try {
      await axios.delete(`${djangoHostname}/api/recharge/recharges/${userId}`);
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
                {rechargeData.length > 0 ? (
                  rechargeData.map((item) => (
                    <tr key={item.payment_id}>
                      <td>{item.recharge_method}</td>
                      <td>{item.user}</td>
                      <td>{item.payment_name}</td>
                      <td>{item.payment_id}</td>
                      <td>{item.user_balance}</td>
                      <td>{item.amount_top_up}</td>
                      <td>
                        {item.receipt_image && (
                          <button
                            className="btn w-100 text-light px-2 py-1 rounded mx-1 dwload"
                            onClick={() => handleDownloadReceipt(item.receipt_image)}
                          >
                            Download
                          </button>
                        )}
                      </td>
                      <td className="d-flex">
                        <button
                          className="btn-success w-100 btn text-light px-2 py-1 rounded mx-1"
                          onClick={() => handlePromoteUser(item.user)}
                        >
                          Promote
                        </button>
                        <button
                          className="btn btn-danger w-100 border-0 text-light px-2 py-1 rounded"
                          onClick={() => handleDemoteUser(item.user)}
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
