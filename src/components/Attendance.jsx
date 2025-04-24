import React, { useState } from "react";
import './Attendance.css';

const Attendance = () => {
  // Initial state for attendance (31 days, assumes all present initially)
  const [attendance, setAttendance] = useState(
    Array.from({ length: 31 }, (_, i) => ({ date: i + 1, present: false }))
  );
  
  const [modalActive, setModalActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [subjectAttendance, setSubjectAttendance] = useState({
    Mathematics: false,
    Science: false,
    History: false,
    Geography: false,
  });
  
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); // 0 - 11 (January - December)
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Current year
  
  // Get the number of days in a month, accounting for leap years
  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  
  // Get the first day of the month (0 - 6, Sunday - Saturday)
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();
  
  // Handle the "Next Month" and "Previous Month" navigation
  const handleMonthChange = (direction) => {
    if (direction === "next") {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    } else if (direction === "previous") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    }
  };

  // Open the modal for the selected day
  const openModal = (date) => {
    setSelectedDate(date);
    setModalActive(true);
  };

  // Close the modal
  const closeModal = () => {
    setModalActive(false);
  };

  // Handle the checkbox change for subjects
  const handleCheckboxChange = (subject) => {
    setSubjectAttendance((prevState) => ({
      ...prevState,
      [subject]: !prevState[subject],
    }));
  };

  // Save the attendance for the selected day
  const saveAttendance = () => {
    setAttendance((prevAttendance) =>
      prevAttendance.map((entry) =>
        entry.date === selectedDate
          ? {
              ...entry,
              present: Object.values(subjectAttendance).every(
                (status) => status === true
              ),
            }
          : entry
      )
    );
    closeModal();
  };

  // Get the current month's number of days and first day of the month
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);

  // Create a 2D array for the calendar grid (5 weeks, 7 days)
  const calendarDays = Array.from({ length: 5 }, (_, rowIndex) => {
    return Array.from({ length: 7 }, (_, colIndex) => {
      const day = rowIndex * 7 + colIndex + 1 - firstDayOfMonth;
      return day > 0 && day <= daysInMonth ? day : null;
    });
  });

  return (
    <div className="attendance-container">
      <div className="attendance-header">
        <h1>Attendance</h1>
      </div>
      <div className="attendance-calendar-box">
        <div className="attendance-legend">
          <div className="attendance-legend-item">
            <div className="attendance-legend-color attendance-present"></div>
            <span>Present</span>
          </div>
          <div className="attendance-legend-item">
            <div className="attendance-legend-color attendance-absent"></div>
            <span>Absent</span>
          </div>
          <div className="attendance-legend-item">
            <div className="attendance-legend-color attendance-holiday"></div>
            <span>Holiday</span>
          </div>
        </div>
        <div className="attendance-calendar">
          <h2>{`${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} ${currentYear}`}</h2>
          <div className="attendance-calendar-nav">
            <button
              className="attendance-nav-button"
              onClick={() => handleMonthChange("previous")}
            >
              &#60;
            </button>
            <button
              className="attendance-nav-button"
              onClick={() => handleMonthChange("next")}
            >
              &#62;
            </button>
          </div>
          <table className="attendance-calendar-table">
            <thead>
              <tr>
                <th>Mo</th>
                <th>Tu</th>
                <th>We</th>
                <th>Th</th>
                <th>Fr</th>
                <th>Sa</th>
                <th>Su</th>
              </tr>
            </thead>
            <tbody>
              {calendarDays.map((week, rowIndex) => (
                <tr key={rowIndex}>
                  {week.map((day, colIndex) => {
                    if (day) {
                      const dayData = attendance.find((entry) => entry.date === day);
                      return (
                        <td
                          key={colIndex}
                          onClick={() => openModal(day)}
                          className={`attendance-calendar-day ${
                            dayData?.present ? "attendance-present" : ""
                          }`}
                        >
                          {day}
                        </td>
                      );
                    }
                    return <td key={colIndex}></td>;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modalActive && selectedDate !== null && (
        <div className="attendance-modal-overlay">
          <div className="attendance-modal">
            <button className="attendance-close-button" onClick={closeModal}>
              X
            </button>
            <h2>Mark Attendance for {selectedDate}</h2>
            <div className="attendance-subject-list">
              <h3>Subjects</h3>
              {["Mathematics", "Science", "History", "Geography"].map((subject) => (
                <div key={subject} className="attendance-subject-item">
                  <label className="attendance-subject-checkbox">
                    <input
                      type="checkbox"
                      checked={subjectAttendance[subject]}
                      onChange={() => handleCheckboxChange(subject)}
                    />
                    {subjectAttendance[subject] ? "Present" : "Absent"} - {subject}
                  </label>
                </div>
              ))}
            </div>
            <button className="attendance-save-button" onClick={saveAttendance}>
              Save Attendance
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Attendance;
