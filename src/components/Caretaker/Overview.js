import React from 'react';
import './index.css';

const Overview = () => {
  return (
    <div className="overview-tab">
      <h3>Today's Status</h3>
      <div className="medication-status">
        <span>Daily Medication Set - 8:00 AM</span>
        <span className="pending-tag">Pending</span>
      </div>

      <h3>Quick Actions</h3>
      <ul>
        <li>📧 Send Reminder Email</li>
        <li>🔔 Configure Notifications</li>
        <li>📅 View Full Calendar</li>
      </ul>

      <h3>Monthly Adherence Progress</h3>
      <div className="progress-bar">
        <div className="taken" style={{ width: '85%' }}></div>
      </div>
      <div className="progress-labels">
        <span className="green">22 days Taken</span>
        <span className="red">3 days Missed</span>
        <span className="gray">5 days Remaining</span>
      </div>
    </div>
  );
};

export default Overview;
