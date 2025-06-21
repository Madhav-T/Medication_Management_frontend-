import React, { useState } from 'react';
import './index.css';

const Patient = () => {
  const todayDate = new Date().getDate(); // dynamic current day
  const [isTakenToday, setIsTakenToday] = useState(false);
  const [takenDates, setTakenDates] = useState(new Set());

  const handleMarkAsTaken = () => {
    setIsTakenToday(true);
    setTakenDates(prev => new Set(prev).add(todayDate));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`File "${file.name}" uploaded as proof.`);
    }
  };

  const renderDayClass = (day) => {
    let className = 'calendar-day';
    if (day === todayDate) className += ' today';
    if (takenDates.has(day)) className += ' taken';
    else if (day < todayDate) className += ' missed';
    return className;
  };

  return (
    <div className="patient-container">
      <div className="patient-header">
        <h2>Good Afternoon!</h2>
        <p>Ready to stay on track with your medication?</p>
        <div className="stats-box">
          <div className="stat">{isTakenToday ? 1 : 0}<br /><span>Day Streak</span></div>
          <div className="stat">{isTakenToday ? '✓' : '0'}<br /><span>Today's Status</span></div>
          <div className="stat">{isTakenToday ? '3%' : '0%'}<br /><span>Monthly Rate</span></div>
        </div>
      </div>

      <div className="medication-box">
        <h3>Today's Medication</h3>

        {isTakenToday ? (
          <div className="medication-completed">
            <p className="success-msg">✅ Medication Completed!</p>
            <p className="details">Great job! You've taken your medication for June {todayDate}, 2025.</p>
            <div className="completed-time">✅ Daily Medication Set — <span>8:00 AM</span></div>
          </div>
        ) : (
          <>
            <div className="medication-set">
              <div className="set-label">Daily Medication Set</div>
              <div className="set-time">🕗 8:00 AM</div>
            </div>
            <div className="proof-photo">
              <p>Add Proof Photo (Optional)</p>
              <label className="photo-button">
                📷 Take Photo
                <input type="file" accept="image/*" onChange={handleFileUpload} hidden />
              </label>
            </div>
            <button className="mark-btn" onClick={handleMarkAsTaken}>✓ Mark as Taken</button>
          </>
        )}
      </div>

      <div className="calendar-box">
        <h3>Medication Calendar</h3>
        <div className="calendar">
          <div className="calendar-row">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d, i) => (
              <div key={i}>{d}</div>
            ))}
          </div>
          <div className="calendar-days">
            {[...Array(30)].map((_, i) => {
              const day = i + 1;
              return (
                <div key={day} className={renderDayClass(day)}>
                  {day}
                  <span className="dot-marker"></span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="legend">
          <div className="legend-item"><span className="dot taken"></span> Medication Taken</div>
          <div className="legend-item"><span className="dot missed"></span> Missed Medication</div>
          <div className="legend-item"><span className="dot today-border"></span> Today</div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
