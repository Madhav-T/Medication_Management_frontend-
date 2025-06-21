import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ setRole }) => {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    setRole(role);
    navigate(`/${role}`);
  };

  return (
    <div className="dashboard">
      <div className="logo-icon">💚</div>
      <h1 className="title">Welcome to<br />MediCare Companion</h1>
      <p className="subtitle">
        Your trusted partner in medication management. Choose your role to get started with personalized features.
      </p>

      <div className="cards-wrapper">
        {/* Patient Card */}
        <div className="role-card patient">
          <div className="icon">👤</div>
          <h2>I'm a Patient</h2>
          <p>Track your medication schedule and maintain your health records</p>
          <ul>
            <li>🟢 Mark medications as taken</li>
            <li>🟢 Upload proof photos (optional)</li>
            <li>🟢 View your medication calendar</li>
            <li>🟢 Large, easy-to-use interface</li>
          </ul>
          <button className="select-btn blue" onClick={() => handleSelect('patient')}>
            Continue as Patient
          </button>
        </div>

        {/* Caretaker Card */}
        <div className="role-card caretaker">
          <div className="icon">🧑‍⚕️</div>
          <h2>I'm a Caretaker</h2>
          <p>Monitor and support your loved one’s medication adherence</p>
          <ul>
            <li>🟢 Monitor medication compliance</li>
            <li>🟢 Set up notification preferences</li>
            <li>🟢 View detailed reports</li>
            <li>🟢 Receive email alerts</li>
          </ul>
          <button className="select-btn green" onClick={() => handleSelect('caretaker')}>
            Continue as Caretaker
          </button>
        </div>
      </div>

      <p className="footer-note">You can switch between roles anytime after setup</p>
    </div>
  );
};

export default Dashboard;
