import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Patient from './components/Patient';
import Caretaker from './components/Caretaker';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [role, setRole] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [showSignup, setShowSignup] = useState(true);

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setRole(decoded.role);
        if (decoded.role === 'patient') navigate('/patient');
        else if (decoded.role === 'caretaker') navigate('/caretaker');
      } catch {
        localStorage.removeItem('token');
        setToken(null);
      }
    }
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setRole('');
    navigate('/');
  };

  const hideNavbar = location.pathname === '/';

  if (!token) {
    return (
      <div>
        {showSignup ? (
          <Signup
            onSignupSuccess={(tok) => {
              localStorage.setItem('token', tok);
              setToken(tok);
            }}
          />
        ) : (
          <Login
            onLogin={(tok) => {
              localStorage.setItem('token', tok);
              setToken(tok);
            }}
          />
        )}
        <p style={{ textAlign: 'center', marginTop: '10px' }}>
          {showSignup ? (
            <>
              Already have an account?{' '}
              <button onClick={() => setShowSignup(false)}>Login</button>
            </>
          ) : (
            <>
              Don’t have an account?{' '}
              <button onClick={() => setShowSignup(true)}>Sign Up</button>
            </>
          )}
        </p>
      </div>
    );
  }

  return (
    <>
      {!hideNavbar && (
        <Navbar role={role} setRole={setRole} onLogout={handleLogout} />
      )}
      <Routes>
        <Route path="/" element={<Dashboard setRole={setRole} setShowSignup={setShowSignup} />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/caretaker" element={<Caretaker />} />
      </Routes>
    </>
  );
};

export default App;