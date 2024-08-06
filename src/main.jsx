import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Homepage from './Components/Homepage/Homepage.jsx';
import Registration from './Components/Registration/Registration.jsx';
import Login from './Components/Login/Login.jsx';
import GrabOrder from './Components/GrabOrder/GrabOrder.jsx';
import Account from './Components/Account/Account.jsx';
import Withdrawal from './Components/WithdrawalPage/Withdrawal.jsx';
import Recharge from './Components/Recharge/Recharge.jsx';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import './index.css';

// Defining routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Oops! An error occurred.</div>,
  },
  {
    path: "/homepage",
    element: <Homepage/>,
    errorElement: <div>Oops! An error occurred.</div>,
  },
  {
    path: "/registration",
    element: <Registration/>,
    errorElement: <div>Oops! An error occurred.</div>,
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <div>Oops! An error occurred.</div>,
  },
  {
    path: "/grab-order",
    element: <GrabOrder/>,
    errorElement: <div>Oops! An error occurred.</div>,
  },
  {
    path: "/account",
    element: <Account/>,
    errorElement: <div>Oops! An error occurred.</div>,
  },
  {
    path: "/withdraw",
    element: <Withdrawal/>,
    errorElement: <div>Oops! An error occurred.</div>,
  },
  {
    path: "/recharge-account",
    element: <Recharge/>,
    errorElement: <div>Oops! An error occurred.</div>,
  },
]);

// Rendering the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
