import { useState } from 'react';
import './SliderToggle.css'; // Create this CSS file to style the component

const SliderToggle = () => {
  const [activeTab, setActiveTab] = useState('wallet');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container toggle-slider mx-auto my-5 w-100">
      <div
        className={`tab ${activeTab === 'wallet' ? 'active' : ''}`}
        onClick={() => handleTabClick('wallet')}
      >
        Crypto Wallet
      </div>
      <div
        className={`tab ${activeTab === 'bank' ? 'active' : ''}`}
        onClick={() => handleTabClick('bank')}
      >
        Bank Card
      </div>
    </div>
  );
};

export default SliderToggle;
// import React from "react";
// import "./SliderToggle.css";


// import "./SliderToggle.css";

// const SliderToggle = ({ onToggle }) => {
//   return (
//     <div className="slider-toggle">
//       <button className="toggle-button" onClick={() => onToggle("crypto")}>
//         Crypto Wallet
//       </button>
//       <button className="toggle-button" onClick={() => onToggle("bank")}>
//         Bank
//       </button>
//     </div>
//   );
// };

// export default SliderToggle;