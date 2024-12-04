import React, { useState } from 'react';
import './DashboardCalendar.css'; // Import CSS for styling

const DashboardCalendar = ({ initialMonth, initialYear, markedDates = [], markedDates1 = [] }) => {
  const [month, setMonth] = useState(initialMonth);
  const [year, setYear] = useState(initialYear);

  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Number of days in the current month
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // Day of the week of the first day of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const isMarked = (date) => {
    const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    return markedDates.includes(formattedDate);
  };
  const isMarked1 = (date) => {
    const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    return markedDates1.includes(formattedDate);
  };

  return (
    <div className="calendar-container">
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={handlePrevMonth}>Prev</button>
          <h5>{`${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`}</h5>
          <button onClick={handleNextMonth}>Next</button>
        </div>
        <div className="days-header">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="day-label">{day}</div>
          ))}
        </div>
        <div className="dates-container">
          {[...Array(firstDayOfMonth).fill(null), ...Array(daysInMonth).fill().map((_, index) => index + 1)].map((date, index) => (
            <div
              key={index}
              className={`date-box ${date !== null ? 'active' : ''} ${isMarked(date) ? 'marked' : ''} ${isMarked1(date) ? 'marked-special' : ''}`}
            >
              {date !== null ? date : ''}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardCalendar;
