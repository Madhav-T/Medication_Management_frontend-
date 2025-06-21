import React from 'react';
import './index.css';

const CalendarView = () => {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const today = 20;

  return (
    <div className="calendar-view">
      <h3>Medication Calendar Overview</h3>
      <div className="calendar-header">
        <button>{'<'}</button>
        <span>June 2025</span>
        <button>{'>'}</button>
      </div>

      <div className="calendar-grid">
        <div className="day-names">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="calendar-days">
          {days.map(day => {
            let className = 'missed';
            if (day === today) className = 'today';
            else if (day === 18 || day === 19) className = 'taken'; // example

            return <div key={day} className={`calendar-day ${className}`}>{day}</div>;
          })}
        </div>
      </div>

      <div className="calendar-legend">
        <span className="dot taken"></span> Medication taken
        <span className="dot missed"></span> Missed medication
        <span className="dot today"></span> Today
      </div>

      <div className="calendar-details">
        <div className="info-card">
          <strong>📅 Today</strong>
          <p>Monitor Eleanor Thompson’s medication status for today.</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
