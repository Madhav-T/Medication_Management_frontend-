import React, { useState } from 'react';
import { signup } from '../../api/auth';
import './index.css';

export default function Signup({ onSignupSuccess }) {
  const [form, setForm] = useState({ username: '', password: '', role: 'patient' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await signup(form);
      localStorage.setItem('token', token);
      setSuccess('Account created successfully!');
      setError('');
      onSignupSuccess(token); // Trigger login logic
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="patient">Patient</option>
          <option value="caretaker">Caretaker</option>
        </select>
        <button type="submit">Sign Up</button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
}
