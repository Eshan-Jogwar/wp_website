import React, { useState } from "react";

const initialData = [
  ["AE", "ILA", "ILA", "DS", "IE"],
  ["PS", "ILA", "IE", "AE", "ILA"],
  ["PS", "ILA", "PS", "PS", "WP"],
  ["IE", "AE", "DS", "PS", "DS"],
  ["LUNCH"],
  ["AE(B1)", "WP(B1)", "DS(B2)", "", "WP(B2)"],
  ["AE(B2)", "", "", "", ""],
  ["& DS(B1)", "", "", "", ""],
  ["", "", "", "", ""],
];

const TimeTablePage = () => {
  const [timetable, setTimetable] = useState(initialData);
  const [editing, setEditing] = useState(false);

  const handleChange = (rowIdx, colIdx, value) => {
    const updated = [...timetable];
    updated[rowIdx][colIdx] = value;
    setTimetable(updated);
  };

  const toggleEditing = () => {
    setEditing(!editing);
  };

  return (
    <>
      <div className="container-timeTable">
        <div className="header">
          <h1 className="header-title">Time Table</h1>
          <i className="fas fa-bars menu-icon"></i>
        </div>
        <div className="divider-bar"></div>

        <div style={{ margin: "10px 0", display: "flex", justifyContent: "flex-end" }}>
          <button onClick={toggleEditing} className="edit-button">
            {editing ? "Save" : "Edit"}
          </button>
        </div>

        <div className="content">
          <table className="table-wrapper">
            <thead>
              <tr>
                <th className="table-head-cell"></th>
                <th className="table-head-cell column-highlight">Monday</th>
                <th className="table-head-cell">Tuesday</th>
                <th className="table-head-cell">Wednesday</th>
                <th className="table-head-cell">Thursday</th>
                <th className="table-head-cell">Friday</th>
              </tr>
            </thead>
            <tbody>
              {[
                "9:00-9:55",
                "10:00-10:55",
                "11:00-11:55",
                "12:00-12:55",
                "13:00-13:55",
                "14:00-14:55",
                "15:00-15:55",
                "16:00-16:55",
                "17:00-17:55",
              ].map((time, rowIdx) => (
                <tr key={rowIdx}>
                  <td className="table-body-cell">{time}</td>
                  {timetable[rowIdx].length === 1 ? (
                    <td colSpan="5" className="lunch-cell">
                      {timetable[rowIdx][0]}
                    </td>
                  ) : (
                    timetable[rowIdx].map((val, colIdx) => (
                      <td key={colIdx} className="table-body-cell">
                        {editing ? (
                          <input
                            type="text"
                            value={val}
                            onChange={(e) =>
                              handleChange(rowIdx, colIdx, e.target.value)
                            }
                            style={{ width: "100%" }}
                          />
                        ) : (
                          val
                        )}
                      </td>
                    ))
                  )}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="legend-box">
            <ul className="legend-list">
              <li className="legend-item">
                <strong>AE :</strong> Applied Electronics
              </li>
              <li className="legend-item">
                <strong>IE :</strong> Introduction to Entrepreneurship
              </li>
              <li className="legend-item">
                <strong>DS :</strong> Data Structures
              </li>
              <li className="legend-item">
                <strong>ILA :</strong> Introduction to Linear Algebra
              </li>
              <li className="legend-item">
                <strong>PS :</strong> Probability and Statistics
              </li>
              <li className="legend-item">
                <strong>WP :</strong> Web Programming
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeTablePage;
