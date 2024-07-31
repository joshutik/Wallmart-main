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
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />

  </React.StrictMode>,
)
