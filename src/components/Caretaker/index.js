import React, { useState } from 'react';
import './index.css';
import Overview from './Overview';
import RecentActivity from './RecentActivity';
import CalendarView from './CalendarView';
import Notifications from './Notification';

const Caretaker = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const renderTab = () => {
    switch (activeTab) {
      case 'Overview':
        return <Overview />;
      case 'RecentActivity':
        return <RecentActivity />;
      case 'CalendarView':
        return <CalendarView />;
      case 'Notifications':
        return <Notifications />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="caretaker-container">
      <div className="caretaker-header">
        <h2>Caretaker Dashboard</h2>
        <p>Monitoring Eleanor Thompson’s medication adherence</p>
        <div className="stats-box">
          <div className="stat">
            <div className="value">85%</div>
            <div className="label">Adherence Rate</div>
          </div>
          <div className="stat">
            <div className="value">5</div>
            <div className="label">Current Streak</div>
          </div>
          <div className="stat">
            <div className="value">3</div>
            <div className="label">Missed This Month</div>
          </div>
          <div className="stat">
            <div className="value">4</div>
            <div className="label">Taken This Week</div>
          </div>
        </div>
      </div>

      <div className="tabs">
        {['Overview', 'RecentActivity', 'CalendarView', 'Notifications'].map(tab => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.replace(/([A-Z])/g, ' $1').trim()}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {renderTab()}
      </div>
    </div>
  );
};

export default Caretaker;
