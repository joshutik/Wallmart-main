// // import React from 'react'
// import "./Vip1Details.css";

// const Vip1Details = () => {
//   return (
//     <div className="container-fluid">
//       <div className="container bg-light rounded">
//         <h2></h2>
//         <div className="row">

//             <div className="table-responsive">
//               <table className="table caption-top text-center">
//                 <caption className="text-center fs-2 fw-bold text-dark py-3">Last Joined Users</caption>
//                 <thead>
//                   <tr>
//                     <th scope="col">#No.</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">ID Number</th>
//                     <th scope="col">Balance</th>
//                     <th scope="col">Number Of Grabs</th>
//                     <th scope="col">Control Panel</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <th scope="row">1</th>
//                     <td>Mark</td>
//                     <td>23311</td>
//                     <td>$0</td>
//                     <td>(0)</td>
//                     <td>
//                       <span className="timy text-light px-2 py-1 rounded">
//                        Promote
//                       </span>
//                       <span className="bg-danger text-light px-2 mx-1 py-1 rounded">
//                       <i className="bi bi-trash3"></i>
//                       </span>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row">2</th>
//                     <td>Jacob</td>
//                     <td>12745622</td>
//                     <td>$0</td>
//                     <td>(0)</td>
//                     <td>
//                     <span className="timy text-light px-2 py-1 rounded">
//                        Promote
//                       </span>
//                       <span className="bg-danger text-light px-2 mx-1 py-1 rounded">
//                       <i className="bi bi-trash3"></i>
//                       </span>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row">3</th>
//                     <td>Larry</td>
//                     <td>43226</td>
//                     <td>$0</td>
//                     <td>(0)</td>
//                     <td>
//                     <span className="timy text-light px-2 py-1 rounded">
//                        Promote
//                       </span>
//                       <span className="bg-danger text-light px-2 mx-1 py-1 rounded">
//                       <i className="bi bi-trash3"></i>
//                       </span>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// };

// export default Vip1Details;



import { useEffect, useState } from "react";
import "./Vip1Details.css";

const Vip1Details = () => {
  const [vipUsers, setVipUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  // Fetch VIP 1 users from the backend
  useEffect(() => {
    const fetchVipUsers = async () => {
      try {
        const response = await fetch("https://api.example.com/vip1-users"); // Replace with your API endpoint
        const data = await response.json();
        setVipUsers(data.users); // Assuming the API returns an object with a 'users' key
      } catch (error) {
        console.error("Error fetching VIP users:", error);
      }
    };

    fetchVipUsers();
  }, []);

  // Handle Promotion
  const handlePromote = async (userId) => {
    try {
      const response = await fetch(`https://api.example.com/promote/${userId}`, {
        method: "POST",
      });
      if (response.ok) {
        // Handle successful promotion, e.g., update the UI or notify the user
        alert("User promoted successfully!");
      } else {
        alert("Failed to promote user.");
      }
    } catch (error) {
      console.error("Error promoting user:", error);
    }
  };

  // Handle Deletion
  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`https://api.example.com/delete/${userId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setVipUsers(vipUsers.filter((user) => user.id !== userId)); // Update the state to remove the deleted user
        alert("User deleted successfully!");
      } else {
        alert("Failed to delete user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = vipUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid">
      <div className="container bg-light rounded my-5">
        <div className="row">
          <div className="table-responsive">
            <table className="table caption-top text-center">
              <caption className="text-center fs-2 fw-bold text-dark py-3">VIP 1 Users</caption>
              <thead>
                <tr>
                  <th scope="col">#No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">ID Number</th>
                  <th scope="col">Balance</th>
                  <th scope="col">Number Of Grabs</th>
                  <th scope="col">Control Panel</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user, index) => (
                  <tr key={user.id}>
                    <th scope="row">{indexOfFirstUser + index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.idNumber}</td>
                    <td>${user.balance}</td>
                    <td>({user.numberOfGrabs})</td>
                    <td>
                      <span
                        className="timy text-light px-2 py-1 rounded"
                        onClick={() => handlePromote(user.id)}
                        style={{ cursor: "pointer" }}
                      >
                        Promote
                      </span>
                      <span
                        className="bg-danger text-light px-2 mx-1 py-1 rounded"
                        onClick={() => handleDelete(user.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <i className="bi bi-trash3"></i>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <nav>
          <ul className="pagination justify-content-center">
            {Array.from({ length: Math.ceil(vipUsers.length / usersPerPage) }).map(
              (_, index) => (
                <li key={index} className="page-item">
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`page-link ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Vip1Details;

{/* <td>
  <button
    className="btn btn-primary"
    onClick={() => handlePromote(user.id)}
  >
    Promote
  </button>
  <button
    className="btn btn-danger mx-1"
    onClick={() => handleDelete(user.id)}
  >
    <i className="bi bi-trash3"></i>
  </button>
</td> */}