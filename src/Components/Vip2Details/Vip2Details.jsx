// // import React from 'react'
// import "./Vip2Details.css";

// const Vip2Details = () => {
//   return (
//     <div className="container-fluid">
//       <div className="container bg-light rounded">
//         <h2></h2>
//         <div className="row">
//             <div className="table-responsive">
//               <table className="table caption-top text-center">
//                 <caption className="text-center fs-2 fw-bold text-dark py-3">VIP 2</caption>
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
//                     <td className="d-flex">
//                     <button className="btn-success btn text-light px-2 py-1 rounded mx-1">
//                        Promote
//                       </button>
//                       <button className="btn btn-warning border-0 text-light px-2 py-1 rounded">
//                        Demote
//                       </button>
//                       <button className="btn btn-danger border-0 text-light px-2 mx-1 py-1 rounded">
//                       <i className="bi bi-trash3"></i>
//                       </button>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row">2</th>
//                     <td>Jacob</td>
//                     <td>12745622</td>
//                     <td>$0</td>
//                     <td>(0)</td>
//                     <td className="d-flex">
//                     <button className="btn-success btn text-light px-2 py-1 rounded mx-1">
//                        Promote
//                       </button>
//                       <button className="btn btn-warning border-0 text-light px-2 py-1 rounded">
//                        Demote
//                       </button>
//                       <button className="btn btn-danger border-0 text-light px-2 mx-1 py-1 rounded">
//                       <i className="bi bi-trash3"></i>
//                       </button>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row">3</th>
//                     <td>Larry</td>
//                     <td>43226</td>
//                     <td>$0</td>
//                     <td>(0)</td>
//                     <td className="d-flex">
//                     <button className="btn-success btn text-light px-2 py-1 rounded mx-1">
//                        Promote
//                       </button>
//                       <button className="btn btn-warning border-0 text-light px-2 py-1 rounded">
//                        Demote
//                       </button>
//                       <button className="btn btn-danger border-0 text-light px-2 mx-1 py-1 rounded">
//                       <i className="bi bi-trash3"></i>
//                       </button>
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

// export default Vip2Details;


import { useState, useEffect } from "react";
import "./Vip2Details.css";

const Vip2Details = () => {
  const [vip2Users, setVip2Users] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch VIP 2 data from the backend
    const fetchVip2Users = async () => {
      try {
        const response = await fetch("YOUR_BACKEND_API_ENDPOINT/vip2");
        const data = await response.json();
        setVip2Users(data);
      } catch (error) {
        console.error("Error fetching VIP 2 users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVip2Users();
  }, []);

  const promoteToVip3 = async (userId) => {
    try {
      await fetch(`YOUR_BACKEND_API_ENDPOINT/promote/${userId}`, {
        method: "POST",
      });
      // Optionally update UI after promoting
      setVip2Users(vip2Users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error promoting user:", error);
    }
  };

  const demoteToVip1 = async (userId) => {
    try {
      await fetch(`YOUR_BACKEND_API_ENDPOINT/demote/${userId}`, {
        method: "POST",
      });
      // Optionally update UI after demoting
      setVip2Users(vip2Users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error demoting user:", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await fetch(`YOUR_BACKEND_API_ENDPOINT/delete/${userId}`, {
        method: "DELETE",
      });
      // Optionally update UI after deletion
      setVip2Users(vip2Users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid">
      <div className="container bg-light rounded my-5">
        <div className="row">
          <div className="table-responsive">
            <table className="table caption-top text-center">
              <caption className="text-center fs-2 fw-bold text-dark py-3">
                VIP 2 Users
              </caption>
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
                {vip2Users.map((user, index) => (
                  <tr key={user.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.idNumber}</td>
                    <td>${user.balance}</td>
                    <td>({user.grabs})</td>
                    <td className="d-flex justify-content-center">
                      <button
                        className="btn btn-success text-light px-2 py-1 rounded mx-1"
                        onClick={() => promoteToVip3(user.id)}
                      >
                        Promote
                      </button>
                      <button
                        className="btn btn-warning text-light px-2 py-1 rounded mx-1"
                        onClick={() => demoteToVip1(user.id)}
                      >
                        Demote
                      </button>
                      <button
                        className="btn btn-danger text-light px-2 py-1 rounded mx-1"
                        onClick={() => deleteUser(user.id)}
                      >
                        <i className="bi bi-trash3"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vip2Details;