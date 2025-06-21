import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ role, setRole, onLogout }) => {
  const navigate = useNavigate();

  const switchRole = () => {
    if (role === 'patient') {
      setRole('caretaker');
      navigate('/caretaker');
    } else if (role === 'caretaker') {
      setRole('patient');
      navigate('/patient');
    }
  };

  return (
    <nav className="navbar">
      <div className="brand">MediCare Companion</div>
      <div>
        {role && (
          <>
            <button className="switch-btn" onClick={switchRole}>
              Switch to {role === 'patient' ? 'Caretaker' : 'Patient'}
            </button>
            <button className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
