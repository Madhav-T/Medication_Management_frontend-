import React from 'react';
import './index.css'; // optional separate styling

const RecentActivity = () => {
  const activityData = [
    { date: 'Monday, June 10', time: '8:30 AM', status: 'Completed', photo: true },
    { date: 'Sunday, June 9', time: '8:15 AM', status: 'Completed', photo: false },
    { date: 'Saturday, June 8', time: '', status: 'Missed', photo: false },
    { date: 'Friday, June 7', time: '8:45 AM', status: 'Completed', photo: true },
    { date: 'Thursday, June 6', time: '8:20 AM', status: 'Completed', photo: false }
  ];

  return (
    <div className="recent-activity">
      <h3>Recent Medication Activity</h3>
      <ul className="activity-list">
        {activityData.map((item, index) => (
          <li key={index} className={`activity-item ${item.status === 'Missed' ? 'missed' : 'completed'}`}>
            <div>
              <strong>{item.date}</strong>
              {item.status !== 'Missed' && <p>Taken at {item.time}</p>}
            </div>
            <div className="activity-status">
              {item.photo && <span className="tag">📷 Photo</span>}
              <span className={`tag ${item.status.toLowerCase()}`}>{item.status}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
