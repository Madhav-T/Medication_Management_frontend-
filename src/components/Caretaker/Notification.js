import React from 'react';
import './index.css';

const Notifications = () => {
  return (
    <div className="notifications">
      <h3>Notification Preferences</h3>

      <div className="notification-card">
        <label>Email Notifications</label>
        <input type="email" value="caretaker@example.com" readOnly />
        <div className="toggle-switch"><span>🔘</span></div>
      </div>

      <div className="notification-card">
        <label>Alert me if medication isn’t taken within</label>
        <select disabled>
          <option>2 hours</option>
        </select>

        <label>Daily reminder time</label>
        <select disabled>
          <option>8:00 PM</option>
        </select>
      </div>

      <div className="email-preview">
        <strong>📧 Email Preview</strong>
        <p><strong>Subject:</strong> Medication Alert - Eleanor Thompson</p>
        <p>Hello,</p>
        <p>This is a reminder that Eleanor Thompson has not taken her medication today. Please check with her to ensure she takes her prescribed medication.</p>
        <p>Current adherence rate: 85% (5-day streak)</p>
      </div>

      <button className="save-btn">💾 Save Notification Settings</button>
    </div>
  );
};

export default Notifications;
