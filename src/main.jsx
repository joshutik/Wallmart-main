import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Homepage from './Components/Homepage/Homepage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Registration from './Components/Registration/Registration.jsx';
import Login from './Components/Login/Login.jsx';
import GrabOrder from './Components/GrabOrder/GrabOrder.jsx'
import Account from './Components/Account/Account.jsx'
import Withdrawal from './Components/WithdrawalPage/Withdrawal.jsx';
import Recharge from './Components/Recharge/Recharge.jsx';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard.jsx';
import AdminLogin from './Components/AdminLogin/AdminLogin.jsx';
import AdminReg from './Components/AdminReg/AdminReg.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/homepage",
    element: <Homepage/>,
  },
  {
    path: "/registration",
    element: <Registration/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/grab-order",
    element: <GrabOrder/>,
  },
  {
    path: "/account",
    element: <Account/>,
  },
  {
    path: "/withdraw",
    element: <Withdrawal/>,
  },
  {
    path: "/recharge-account",
    element: <Recharge/>,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard/>,
  },
  {
    path: "/admin-login",
    element: <AdminLogin/>,
  },
  {
    path: "/admin-regiration",
    element: <AdminReg/>,
  },
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
